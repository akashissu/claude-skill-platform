import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'TodoMaster - Organize Your Tasks',
  description: 'A powerful and intuitive todo list application to help you stay organized and productive. Add, complete, and manage your daily tasks with ease.',
  keywords: 'todo, tasks, productivity, organization, task manager',
  authors: [{ name: 'TodoMaster Team' }],
  openGraph: {
    title: 'TodoMaster - Organize Your Tasks',
    description: 'Stay organized and productive with TodoMaster.',
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
