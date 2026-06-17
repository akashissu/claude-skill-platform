import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'SwiftTask — The Smart Productivity App',
    template: '%s | SwiftTask',
  },
  description:
    'SwiftTask helps you manage tasks, collaborate with your team, and stay focused. Available on iOS and Android.',
  keywords: ['productivity', 'task management', 'team collaboration', 'mobile app', 'iOS', 'Android'],
  authors: [{ name: 'SwiftTask Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://swifttask.app',
    siteName: 'SwiftTask',
    title: 'SwiftTask — The Smart Productivity App',
    description:
      'SwiftTask helps you manage tasks, collaborate with your team, and stay focused. Available on iOS and Android.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SwiftTask — The Smart Productivity App',
    description:
      'SwiftTask helps you manage tasks, collaborate with your team, and stay focused.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}