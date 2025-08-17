import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);
  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}

export async function generateMetadata({ params }) {
  const postPath = path.join(process.cwd(), "posts", `${params.slug}.md`);
  if (!fs.existsSync(postPath)) return {};

  const fileContent = fs.readFileSync(postPath, "utf8");
  const { data } = matter(fileContent);

  return {
    title: data.title || "Blog Post",
    description: data.excerpt || "Read this in-depth blog post.",
    keywords: data.keywords || "",
    authors: [{ name: data.author || "Admin" }],
    openGraph: {
      title: data.title,
      description: data.excerpt,
      url: `https://yourdomain.com/blog/${params.slug}`,
      siteName: "OctBloggers",
      images: [
        {
          url: data.coverImage || "/default-cover.webp",
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
      type: "article",
      publishedTime: data.date,
    },
    twitter: {
      card: "summary_large_image",
      title: data.title,
      description: data.excerpt,
      images: [data.coverImage || "/default-cover.webp"],
    },
  };
}

export default async function BlogPost({ params }) {
  const postPath = path.join(process.cwd(), "posts", `${params.slug}.md`);
  if (!fs.existsSync(postPath)) return notFound();

  const fileContent = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(fileContent);

  const headings = content
    .split("\n")
    .filter((line) => line.startsWith("#"))
    .map((line) => {
      const level = line.match(/^#+/)[0].length;
      const text = line.replace(/^#+\s*/, "");
      const id = text.toLowerCase().replace(/\s+/g, "-");
      return { level, text, id };
    });

  // ✅ Article schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.title,
    description: data.excerpt,
    image: `https://yourdomain.com${data.coverImage || "/default-cover.webp"}`,
    author: {
      "@type": "Person",
      name: data.author || "Admin",
    },
    publisher: {
      "@type": "Organization",
      name: "OctBloggers",
      logo: {
        "@type": "ImageObject",
        url: "https://yourdomain.com/logo.png",
      },
    },
    datePublished: data.date,
    dateModified: data.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://yourdomain.com/blog/${params.slug}`,
    },
  };

  // ✅ Breadcrumb schema
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://yourdomain.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://yourdomain.com/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: data.title,
        item: `https://yourdomain.com/blog/${params.slug}`,
      },
    ],
  };

  // ✅ FAQ schema (if faqs exist in frontmatter)
  const faqLd =
    data.faqs && data.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: data.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-4 gap-10">
      {/* ✅ JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}

      {/* Blog Content */}
      <article className="lg:col-span-3 bg-white shadow-md rounded-2xl p-8">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-6 text-gray-600">
          <a href="/" className="hover:underline">
            Home
          </a>{" "}
          ›{" "}
          <a href="/blog" className="hover:underline">
            Blog
          </a>{" "}
          › <span className="font-medium">{data.title}</span>
        </nav>

        {data.coverImage && (
          <img
            src={data.coverImage}
            alt={data.title}
            className="w-full h-72 object-cover rounded-xl mb-6"
          />
        )}

        <h1 className="text-4xl font-extrabold mb-3">{data.title}</h1>
        <div className="flex items-center text-gray-500 text-sm mb-8 space-x-4">
          <span>📅 {data.date}</span>
          <span>✍️ {data.author || "Admin"}</span>
        </div>

        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: marked(content) }}
        />

        {/* ✅ FAQ Section visible on page (optional) */}
        {data.faqs && data.faqs.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6">❓ Frequently Asked Questions</h2>
            <div className="space-y-6">
              {data.faqs.map((faq, i) => (
                <div key={i} className="border-b pb-4">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                  <p className="text-gray-700 mt-2">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </article>

      {/* Sidebar */}
      <aside className="space-y-8">
        <div className="bg-white shadow-md rounded-2xl p-6">
          <h3 className="text-lg font-bold mb-4">📑 Table of Contents</h3>
          <ul className="text-sm space-y-2">
            {headings.map((h, i) => (
              <li key={i} style={{ marginLeft: (h.level - 1) * 15 }}>
                <a
                  href={`#${h.text.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-blue-600 hover:underline"
                >
                  {h.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {data.sidebarBanner && (
          <a href={data.sidebarLink} target="_blank" rel="noopener noreferrer">
            <img
              src={data.sidebarBanner}
              alt="Affiliate Banner"
              className="rounded-xl shadow-md hover:opacity-90 transition"
            />
          </a>
        )}
      </aside>
    </div>
  );
}
