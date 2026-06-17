import type { EventStat } from '@/types';

export function EventStatsBar({ stats }: { stats: EventStat[] }) {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <article key={stat.id} className="panel h-full">
          <p className="grid-label">{stat.label}</p>
          <p className="mt-3 text-4xl font-black text-white">{stat.value}</p>
          <p className="mt-2 text-sm font-medium text-slate-200">{stat.description}</p>
        </article>
      ))}
    </section>
  );
}
