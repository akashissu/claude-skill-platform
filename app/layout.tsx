import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: {
    default: 'Pulse Summit Live — Virtual Event Platform',
    template: '%s | Pulse Summit Live',
  },
  description:
    'Pulse Summit Live is a polished virtual event platform for agendas, speakers, live chat, networking, and registration insights.',
  keywords: [
    'virtual event platform',
    'conference agenda',
    'speaker showcase',
    'live chat',
    'networking lounge',
    'registration dashboard',
  ],
  authors: [{ name: 'Pulse Summit Live Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://pulse-summit.live',
    siteName: 'Pulse Summit Live',
    title: 'Pulse Summit Live — Virtual Event Platform',
    description:
      'Join a premium digital event experience with session cards, live chat, speaker profiles, networking, and instant registration context.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pulse Summit Live — Virtual Event Platform',
    description:
      'A responsive React event interface with sessions, speakers, chat, networking, and attendee-ready registration insights.',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <div className="page-shell">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
