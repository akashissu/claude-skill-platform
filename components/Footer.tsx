import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">📋</span>
              <span className="text-lg font-bold text-gray-900">TodoMaster</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              A simple, powerful todo list app to help you stay organized and productive every day.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">My Tasks</Link></li>
              <li><Link href="/stats" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Statistics</Link></li>
              <li><Link href="/tips" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Productivity Tips</Link></li>
              <li><Link href="/about" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">About</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Features</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>✅ Add &amp; complete tasks</li>
              <li>🏷️ Priority levels</li>
              <li>📂 Task categories</li>
              <li>💾 Auto-save to browser</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-gray-400 text-sm">
            © {currentYear} TodoMaster. Built with Next.js &amp; TypeScript.
          </p>
          <p className="text-gray-400 text-sm">
            Your tasks are stored locally in your browser.
          </p>
        </div>
      </div>
    </footer>
  );
}
