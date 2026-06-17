import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'TodoMaster - Organize Your Life',
  description: 'A powerful todo list application to help you stay organized, productive, and on top of your tasks every day.',
  keywords: 'todo, task manager, productivity, organize, checklist',
  authors: [{ name: 'TodoMaster Team' }],
  openGraph: {
    title: 'TodoMaster - Organize Your Life',
    description: 'A powerful todo list application to help you stay organized and productive.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
