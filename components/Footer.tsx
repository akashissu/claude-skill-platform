import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">✅</span>
              <span className="font-bold text-gray-900">TodoMaster</span>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              A simple, powerful todo app to help you stay organized and productive every day.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">My Tasks</Link></li>
              <li><Link href="/categories" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Categories</Link></li>
              <li><Link href="/tips" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">Productivity Tips</Link></li>
              <li><Link href="/about" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Features</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-500">✓ Add & complete tasks</li>
              <li className="text-sm text-gray-500">✓ Priority levels</li>
              <li className="text-sm text-gray-500">✓ Category organization</li>
              <li className="text-sm text-gray-500">✓ Search & filter</li>
              <li className="text-sm text-gray-500">✓ Local storage sync</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} TodoMaster. Built with Next.js 14 & TypeScript.
          </p>
          <p className="text-sm text-gray-400">
            Your tasks are stored locally in your browser.
          </p>
        </div>
      </div>
    </footer>
  );
}
