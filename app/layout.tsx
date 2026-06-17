import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'TechSummit 2024 — Virtual Event Platform',
  description:
    'Join TechSummit 2024, the premier virtual technology conference featuring world-class speakers, interactive sessions, and networking opportunities.',
  keywords: 'virtual event, tech conference, TechSummit, online summit, technology',
  openGraph: {
    title: 'TechSummit 2024 — Virtual Event Platform',
    description: 'The premier virtual technology conference of 2024.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
