import type { Stat } from '@/types';

const stats: Stat[] = [
  { id: '1', value: '8.4K', label: 'Attendees', description: 'Joining from around the world', icon: '🌍' },
  { id: '2', value: '6', label: 'Tracks', description: 'Live and replay-ready content', icon: '🎥' },
  { id: '3', value: '14', label: 'Lounges', description: 'Places to network and recharge', icon: '✨' },
];

export function StatsSection() {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {stats.map((stat) => (
        <article key={stat.id} className="panel">
          <div className="text-2xl">{stat.icon}</div>
          <p className="mt-3 text-3xl font-black text-white">{stat.value}</p>
          <p className="mt-1 text-sm font-semibold text-slate-100">{stat.label}</p>
          <p className="mt-2 text-sm text-slate-400">{stat.description}</p>
        </article>
      ))}
    </section>
  );
}
