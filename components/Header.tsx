'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { NavItem } from '@/types';

const navItems: NavItem[] = [
  { label: 'Agenda', href: '/#agenda' },
  { label: 'Speakers', href: '/#speakers' },
  { label: 'Chat', href: '/#chat' },
  { label: 'Networking', href: '/#networking' },
  { label: 'Registration', href: '/#registration' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const enableDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    document.documentElement.classList.toggle('dark', enableDark);
    setIsDark(enableDark);
  }, []);

  const toggleDarkMode = () => {
    const nextDark = !isDark;
    document.documentElement.classList.toggle('dark', nextDark);
    localStorage.setItem('theme', nextDark ? 'dark' : 'light');
    setIsDark(nextDark);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-white/10 bg-slate-950/85 shadow-lg shadow-slate-950/25 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 via-violet-500 to-accent-500 text-sm font-black text-white shadow-lg shadow-primary-500/30">
            PS
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary-200">Pulse Summit</p>
            <p className="text-lg font-bold text-white">Virtual Event Platform</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10"
            aria-label="Toggle dark mode"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
          <Link href="/#agenda" className="hidden btn-primary md:inline-flex">
            Join live agenda
          </Link>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:bg-white/10 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-white/10 bg-slate-950/95 px-4 pb-4 pt-2 backdrop-blur lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-slate-200"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#networking"
              onClick={() => setIsMenuOpen(false)}
              className="btn-primary mt-2"
            >
              Open networking lounge
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
