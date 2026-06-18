'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';
import { Sidebar } from '@/components/Sidebar';
import { TopBar } from '@/components/TopBar';

const pageContent = {
  '/dashboard': {
    title: 'Dashboard Overview',
    description: 'Track subscription performance, engagement, and account health using static mock analytics.',
  },
  '/users': {
    title: 'User Management',
    description: 'Search, sort, and review the customer-facing user directory in real time.',
  },
  '/settings': {
    title: 'Workspace Settings',
    description: 'Update your admin profile, notification preferences, and theme defaults.',
  },
} as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const page = useMemo(() => {
    if (pathname in pageContent) {
      return pageContent[pathname as keyof typeof pageContent];
    }

    return pageContent['/dashboard'];
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[var(--app-background)] text-[var(--app-foreground)] transition-colors">
      <div className="mx-auto flex min-h-screen max-w-[1600px] flex-col lg:flex-row">
        <Sidebar />
        <div className="flex min-h-screen flex-1 flex-col">
          <TopBar title={page.title} description={page.description} />
          <main className="flex-1 px-6 py-6 md:px-8 lg:px-10">{children}</main>
        </div>
      </div>
    </div>
  );
}
