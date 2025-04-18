export default function Layout({ children }) {
    return (
      <div className="min-h-screen flex flex-col font-sans bg-gray-50 text-gray-900">
        <header className="bg-white shadow">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <a href="/" className="text-2xl font-bold text-blue-600">My Blog</a>
            <nav className="space-x-4">
              <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="/blog" className="text-gray-700 hover:text-blue-600">Blog</a>
            </nav>
          </div>
        </header>
  
        <main className="flex-1 max-w-6xl mx-auto px-6 py-10">
          {children}
        </main>
  
        <footer className="bg-gray-100 mt-16 py-6">
          <div className="max-w-6xl mx-auto text-center text-sm text-gray-600">
            © {new Date().getFullYear()} My Blog. All rights reserved.
          </div>
        </footer>
      </div>
    );
  }
  