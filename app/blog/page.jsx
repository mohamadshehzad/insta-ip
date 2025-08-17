import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Image from "next/image";

export default function BlogPage() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title || "Untitled Post",
      excerpt: data.excerpt || "No description available.",
      coverImage: data.coverImage || "/datacenter.avif", // fallback image
    };
  });

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1.5rem" }}>
        Blog Posts
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {posts.map((post) => (
          <div
            key={post.slug}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <Image
              src={post.coverImage}
              alt={post.title}
              width={600}
              height={300}
              style={{ objectFit: "cover" }}
            />
            <div style={{ padding: "1rem" }}>
              <h2 style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>
                {post.title}
              </h2>
              <p style={{ color: "#666", marginBottom: "1rem" }}>
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                style={{
                  display: "inline-block",
                  background: "#0070f3",
                  color: "white",
                  padding: "0.5rem 1rem",
                  borderRadius: "5px",
                  textDecoration: "none",
                }}
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
