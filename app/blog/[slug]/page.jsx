// app/blog/[slug]/page.jsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import Image from "next/image";

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}

export default function BlogPost({ params }) {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filePath = path.join(postsDirectory, `${params.slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data: frontmatter, content } = matter(fileContents);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Main Blog Content */}
      <article className="md:col-span-2 bg-white shadow-lg rounded-2xl p-6">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-4 text-gray-500">
          <Link href="/" className="hover:underline">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>{" "}
          / <span className="text-gray-700">{frontmatter.title}</span>
        </nav>

        {/* Cover Image */}
        {frontmatter.coverImage && (
          <div className="mb-6 relative w-full h-64 md:h-96">
            <Image
              src={frontmatter.coverImage}
              alt={frontmatter.title}
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl font-bold mb-4">{frontmatter.title}</h1>

        {/* Meta Info */}
        <div className="text-gray-500 text-sm mb-6">
          By {frontmatter.author || "Admin"} | {frontmatter.date}
        </div>

        {/* Blog Content */}
        <Markdown
          options={{
            overrides: {
              img: {
                component: (props) => (
                  <Image
                    src={props.src}
                    alt={props.alt || ""}
                    width={800}
                    height={400}
                    className="rounded-xl mx-auto my-4"
                  />
                ),
              },
              a: {
                component: ({ href, children }) => {
                  if (href?.startsWith("/")) {
                    // Internal links → use Next.js <Link>
                    return (
                      <Link href={href} className="text-blue-600 font-semibold hover:underline">
                        {children}
                      </Link>
                    );
                  }
                  // External links → normal <a>
                  return (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      {children}
                    </a>
                  );
                },
              },
            },
          }}
        >
          {content}
        </Markdown>
      </article>

      {/* Sidebar */}
      <aside className="bg-gray-50 p-4 shadow rounded-2xl">
        <h3 className="text-lg font-semibold mb-4">Special Offer</h3>
        {frontmatter.sidebarBanner && (
          <div className="mb-4 relative w-full h-56">
            <Link
              href={frontmatter.sidebarLink || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={frontmatter.sidebarBanner}
                alt="Affiliate Banner"
                fill
                className="object-contain rounded-lg"
              />
            </Link>
          </div>
        )}
        <p className="text-gray-600 text-sm">
          Discover exclusive discounts on the best hosting providers of 2025.
        </p>
      </aside>
    </div>
  );
}
