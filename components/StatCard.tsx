import { KpiRecord } from '@/types/admin';

const trendStyles: Record<KpiRecord['trend'], string> = {
  up: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',
  down: 'bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300',
  steady: 'bg-slate-200 text-slate-700 dark:bg-slate-500/20 dark:text-slate-200',
};

export function StatCard({ label, value, delta, trend, description }: KpiRecord) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{label}</p>
          <p className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{value}</p>
        </div>
        <span className={`rounded-full px-3 py-1 text-sm font-semibold ${trendStyles[trend]}`}>{delta}</span>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-500 dark:text-slate-400">{description}</p>
    </article>
  );
}
