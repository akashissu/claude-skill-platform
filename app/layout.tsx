import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Northside Clinic Portal',
  description:
    'A modern React patient portal for appointments, medical records, prescriptions, lab results, secure doctor messages, and profile settings.',
  keywords: ['clinic portal', 'patient portal', 'healthcare', 'appointments', 'medical records'],
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
