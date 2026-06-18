import type { Metadata } from 'next';
import './globals.css';
import { AppShell } from '@/components/AppShell';
import { ThemeProvider } from '@/components/ThemeProvider';

export const metadata: Metadata = {
  title: {
    default: 'Northstar SaaS Admin Dashboard',
    template: '%s | Northstar SaaS Admin Dashboard',
  },
  description: 'Client-side SaaS admin dashboard with KPI cards, charts, user management, settings, and persistent theming.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <AppShell>{children}</AppShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
