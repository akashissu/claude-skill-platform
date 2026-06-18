import Link from 'next/link';

const navigation = [
  { href: '/', label: 'Overview' },
  { href: '/departments', label: 'Departments' },
  { href: '/industry-overlays', label: 'Industry overlays' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/features', label: 'Controls' },
  { href: '/about', label: 'Research' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold text-white">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-primary-600 text-lg shadow-lg shadow-primary-900/40">
            CS
          </span>
          <span>
            <span className="block text-xs uppercase tracking-[0.24em] text-primary-300">PAP-438</span>
            <span className="block text-base">Cloude Skill Platform</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-slate-900 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
