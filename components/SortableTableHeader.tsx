import { SortDirection } from '@/types/admin';

interface SortableTableHeaderProps {
  label: string;
  active: boolean;
  direction: SortDirection;
  onClick: () => void;
}

export function SortableTableHeader({ label, active, direction, onClick }: SortableTableHeaderProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 text-left text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 transition hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
    >
      <span>{label}</span>
      <span aria-hidden="true" className={`text-sm ${active ? 'text-sky-500 dark:text-sky-400' : 'text-slate-300 dark:text-slate-600'}`}>
        {active ? (direction === 'asc' ? '↑' : '↓') : '↕'}
      </span>
    </button>
  );
}
