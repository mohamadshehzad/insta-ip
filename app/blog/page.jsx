import Link from "next/link";
import Image from "next/image";

async function getPosts() {
  try {
    // In Vercel, we need to use process.cwd() differently
    const fs = await import('fs/promises');
    const path = await import('path');
    const matter = await import('gray-matter');
    
    const postsDirectory = path.join(process.cwd(), 'posts');
    const filenames = await fs.readdir(postsDirectory);

    const posts = await Promise.all(filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = await fs.readFile(filePath, 'utf8');
      const { data } = matter.default(fileContents);

      return {
        slug: filename.replace(/\.md$/, ''),
        title: data.title || 'Untitled Post',
        excerpt: data.excerpt || 'No description available.',
        coverImage: data.coverImage || '/default-blog.jpg',
        date: data.date || new Date().toISOString(),
      };
    }));

    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (error) {
    console.error('Error loading posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  if (posts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
        <p className="text-gray-600">No blog posts found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.slug} className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
            <div className="relative h-48">
              <Image
                src={post.coverImage.startsWith('/') ? post.coverImage : `/${post.coverImage}`}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}