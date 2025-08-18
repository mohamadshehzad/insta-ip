import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getPosts() {
  try {
    const filenames = await fs.readdir(postsDirectory);
    
    const posts = await Promise.all(filenames.map(async (filename) => {
      if (!filename.endsWith('.md')) return null;
      
      const filePath = path.join(postsDirectory, filename);
      const fileContents = await fs.readFile(filePath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug: filename.replace(/\.md$/, ''),
        title: data.title || 'Untitled Post',
        excerpt: data.excerpt || 'No description available.',
        coverImage: data.coverImage || '/default-blog.jpg',
        date: data.date || new Date().toISOString(),
      };
    }));

    return posts.filter(post => post !== null)
               .sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error('Error getting posts:', error);
    return [];
  }
}

export async function getPostData(slug) {
  try {
    const filePath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      data: {
        title: data.title || 'Untitled Post',
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || '',
        coverImage: data.coverImage || '/default-blog.jpg',
        author: data.author || 'Admin',
        sidebarBanner: data.sidebarBanner || '',
        sidebarLink: data.sidebarLink || '#',
      },
      content: content || '',
    };
  } catch (error) {
    console.error(`Error loading post ${slug}:`, error);
    return null;
  }
}