import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'Cloude Skill Platform',
    template: '%s | Cloude Skill Platform',
  },
  description:
    'Enterprise catalog for department suites, industry overlays, pricing, activation rules, and source-backed Claude Skill packaging.',
  keywords: ['Claude Skills', 'enterprise catalog', 'department suite', 'industry overlay', 'pricing', 'governance'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
