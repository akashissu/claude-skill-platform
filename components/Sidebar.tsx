'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', description: 'KPIs and growth signals' },
  { href: '/users', label: 'Users', description: 'Search and manage accounts' },
  { href: '/settings', label: 'Settings', description: 'Profile and notifications' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex w-full max-w-xs flex-col border-b border-slate-200 bg-white/95 px-5 py-6 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95 lg:min-h-screen lg:w-72 lg:border-b-0 lg:border-r">
      <div className="mb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400">Northstar SaaS</p>
        <h1 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white">Admin Dashboard</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Monitor revenue, users, and account settings from one workspace.</p>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-2xl border px-4 py-3 transition ${
                isActive
                  ? 'border-sky-500 bg-sky-50 text-sky-900 shadow-sm dark:border-sky-500/80 dark:bg-sky-500/10 dark:text-sky-100'
                  : 'border-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-50 dark:text-slate-300 dark:hover:border-slate-800 dark:hover:bg-slate-900'
              }`}
            >
              <div className="text-sm font-semibold">{item.label}</div>
              <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{item.description}</div>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto hidden rounded-3xl bg-slate-100 p-4 text-sm text-slate-600 dark:bg-slate-900 dark:text-slate-300 lg:block">
        <p className="font-semibold text-slate-900 dark:text-white">Today’s focus</p>
        <p className="mt-2">Revenue is trending up and churn is down. Review signups and settings before the next leadership sync.</p>
      </div>
    </aside>
  );
}
