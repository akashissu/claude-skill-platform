'use client';

import { useTheme } from '@/components/ThemeProvider';

export function ThemeToggle() {
  const { mounted, theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-3 rounded-full border border-slate-300/80 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-sky-500 dark:hover:text-sky-300"
      aria-label="Toggle light and dark mode"
    >
      <span
        className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${
          isDark ? 'bg-slate-800 text-amber-300' : 'bg-amber-100 text-amber-600'
        }`}
      >
        {isDark ? '☾' : '☀'}
      </span>
      <span>{mounted ? (isDark ? 'Dark mode' : 'Light mode') : 'Theme'}</span>
    </button>
  );
}
