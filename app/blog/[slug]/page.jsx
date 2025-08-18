import { getPostData, getPosts } from "@/lib/posts";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }) {
  const postData = await getPostData(params.slug);

  if (!postData) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">Post Not Found</h1>
        <p className="mt-4">The requested blog post could not be found.</p>
        <Link href="/blog" className="text-blue-600 hover:underline mt-4 inline-block">
          Back to Blog
        </Link>
      </div>
    );
  }

  const { data: frontmatter, content } = postData;
  const postDate = new Date(frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      <article className="md:col-span-2 bg-white shadow-lg rounded-2xl p-6">
        <nav className="text-sm mb-4 text-gray-500">
          <Link href="/" className="hover:underline">Home</Link> /{" "}
          <Link href="/blog" className="hover:underline">Blog</Link> /{" "}
          <span className="text-gray-700">{frontmatter.title}</span>
        </nav>

        {frontmatter.coverImage && (
          <div className="mb-6 relative w-full h-64 md:h-96 rounded-xl overflow-hidden">
            <Image
              src={frontmatter.coverImage}
              alt={frontmatter.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            />
          </div>
        )}

        <h1 className="text-3xl font-bold mb-4">{frontmatter.title}</h1>
        <div className="text-gray-500 text-sm mb-6">
          By {frontmatter.author || "Admin"} | {postDate}
        </div>

        <div className="markdown-content">
          <Markdown
            options={{
              overrides: {
                p: { 
                  component: ({ children }) => (
                    <div className="mb-4">{children}</div>
                  )
                },
                img: { 
                  component: ({ src, alt }) => (
                    <div className="relative w-full h-64 my-6">
                      <Image
                        src={src}
                        alt={alt || ""}
                        fill
                        className="object-contain rounded-xl mx-auto"
                        sizes="(max-width: 768px) 100vw, 800px"
                      />
                    </div>
                  )
                },
                a: { 
                  component: ({ href, children }) => (
                    href.startsWith("/") ? (
                      <Link href={href} className="text-blue-600 hover:underline">
                        {children}
                      </Link>
                    ) : (
                      <a 
                        href={href} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-600 hover:underline"
                      >
                        {children}
                      </a>
                    )
                  )
                },
                h2: {
                  component: ({ children }) => (
                    <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>
                  )
                },
                h3: {
                  component: ({ children }) => (
                    <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>
                  )
                },
                ul: {
                  component: ({ children }) => (
                    <ul className="list-disc pl-6 mb-4">{children}</ul>
                  )
                },
                ol: {
                  component: ({ children }) => (
                    <ol className="list-decimal pl-6 mb-4">{children}</ol>
                  )
                }
              }
            }}
          >
            {content}
          </Markdown>
        </div>
      </article>

      <aside className="bg-gray-50 p-4 shadow rounded-2xl h-fit sticky top-4">
        <h3 className="text-lg font-semibold mb-4">Special Offer</h3>
        {frontmatter.sidebarBanner ? (
          <Link
            href={frontmatter.sidebarLink || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-4 relative w-full h-56"
          >
            <Image
              src={frontmatter.sidebarBanner}
              alt="Special offer"
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </Link>
        ) : (
          <div className="bg-gray-200 rounded-lg h-56 flex items-center justify-center text-gray-500">
            Banner Placeholder
          </div>
        )}
        <p className="text-gray-600 text-sm">
          Discover exclusive discounts on the best hosting providers.
        </p>
      </aside>
    </div>
  );
}