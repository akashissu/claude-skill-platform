import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'PAP-420 Todo App',
  description: 'A simple React todo list built with TypeScript.'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
