import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-auto">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl">✅</span>
            <span className="font-bold text-gray-800">TaskFlow</span>
            <span className="text-gray-400 text-sm">— Your personal productivity companion</span>
          </div>

          <nav className="flex items-center gap-4 text-sm text-gray-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">My Tasks</Link>
            <Link href="/stats" className="hover:text-blue-600 transition-colors">Stats</Link>
            <Link href="/settings" className="hover:text-blue-600 transition-colors">Settings</Link>
            <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
          </nav>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-100 text-center text-sm text-gray-400">
          <p>© {currentYear} TaskFlow. Built with Next.js 14 & Tailwind CSS.</p>
          <p className="mt-1">Your data stays in your browser — private and secure.</p>
        </div>
      </div>
    </footer>
  );
}
