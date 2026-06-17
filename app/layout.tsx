import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaskFlow - Smart Todo List App",
  description:
    "Organize your tasks, boost your productivity, and achieve your goals with TaskFlow - the smart todo list app.",
  keywords: "todo, tasks, productivity, organization, task management",
  authors: [{ name: "TaskFlow Team" }],
  openGraph: {
    title: "TaskFlow - Smart Todo List App",
    description: "Organize your tasks and boost your productivity with TaskFlow.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
