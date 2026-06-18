import { ThemeToggle } from '@/components/ThemeToggle';

interface TopBarProps {
  title: string;
  description: string;
}

export function TopBar({ title, description }: TopBarProps) {
  return (
    <header className="flex flex-col gap-4 border-b border-slate-200 bg-white/80 px-6 py-5 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm font-medium text-sky-600 dark:text-sky-400">SaaS Operations</p>
        <h2 className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">{title}</h2>
        <p className="mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400">{description}</p>
      </div>
      <ThemeToggle />
    </header>
  );
}
