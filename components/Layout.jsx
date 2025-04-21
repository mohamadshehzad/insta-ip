"use client";

import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white text-gray-900">
      
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Insta-IP Blog
          </Link>
          <nav className="space-x-6 text-sm">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600">
              Blog
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-6xl mx-auto px-6 py-10">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 mt-16 py-6">
        <div className="max-w-6xl mx-auto text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Insta-IP. All rights reserved.
        </div>
      </footer>

    </div>
  );
}
