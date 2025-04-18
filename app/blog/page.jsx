import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

export default function BlogPage() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);

    return {
      slug: filename.replace(/\.md$/, ''),
      title: data.title,
      date: data.date,
      description: data.meta_description || '',
    };
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-10">📰 Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="border rounded-xl p-6 shadow hover:shadow-lg transition duration-200"
          >
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold text-blue-600 hover:underline">
                {post.title}
              </h2>
            </Link>
            <p className="text-sm text-gray-500 mt-1">{post.date}</p>
            <p className="text-gray-700 mt-3">{post.description}</p>
            <Link href={`/blog/${post.slug}`}>
              <button className="mt-4 text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
                Read More →
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
