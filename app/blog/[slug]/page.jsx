import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Head from 'next/head';

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ''),
  }));
}

export default async function BlogPost({ params }) {
  const postPath = path.join(process.cwd(), 'posts', `${params.slug}.md`);
  if (!fs.existsSync(postPath)) return notFound();

  const fileContent = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(fileContent);
  const htmlContent = marked(content);

  return (
    <>
      <Head>
        <title>{data.meta_title || data.title}</title>
        <meta name="description" content={data.meta_description} />
        <meta name="keywords" content={data.keywords} />
      </Head>

      <div className="bg-white text-gray-800 min-h-screen py-10">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Main Blog Content */}
          <article className="md:col-span-2">
            {/* Hero Image */}
            {data.feature_image && (
              <Image
                src={data.feature_image}
                alt={data.title}
                width={1200}
                height={600}
                className="rounded-xl mb-6 w-full object-cover"
              />
            )}

            {/* Blog Header */}
            <h1 className="text-4xl font-bold leading-snug mb-2">{data.title}</h1>
            <p className="text-sm text-gray-500 mb-6">
              {data.author && `By ${data.author} • `}
              {data.date}
            </p>

            {/* Blog Body */}
            <div
              className="prose prose-lg prose-blue max-w-none"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            {/* Tags */}
            {data.tags && (
              <div className="mt-8">
                <h4 className="font-semibold text-gray-700 mb-2">Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {data.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-1 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Social Sharing */}
            <div className="mt-10 border-t pt-6">
              <h3 className="text-xl font-semibold mb-4">Share this post:</h3>
              <div className="flex gap-4 text-sm">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.com/blog/${params.slug}`}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Facebook
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=https://yourwebsite.com/blog/${params.slug}&text=${data.title}`}
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  Twitter
                </a>
                <a
                  href={`https://api.whatsapp.com/send?text=https://yourwebsite.com/blog/${params.slug}`}
                  target="_blank"
                  className="text-green-600 hover:underline"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-3">Recent Posts</h3>
              <ul className="text-blue-600 text-sm space-y-2">
                <li><a href="/blog/my-first-post" className="hover:underline">What is an IP Address?</a></li>
                <li><a href="/blog/what-is-vpn" className="hover:underline">What is a VPN?</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3">Related Topics</h3>
              <ul className="text-blue-600 text-sm space-y-2">
                <li><a href="/blog/ip-tracking" className="hover:underline">Is IP Tracking Legal?</a></li>
                <li><a href="/blog/ip-leaks" className="hover:underline">Prevent IP Leaks</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
