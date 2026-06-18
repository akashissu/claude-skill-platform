interface CatalogStatsProps {
  stats: Array<{ label: string; value: string; description: string }>;
}

export function CatalogStats({ stats }: CatalogStatsProps) {
  return (
    <section className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 py-12 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <article key={stat.label} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 shadow-lg shadow-slate-950/40">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-400">{stat.label}</p>
            <p className="mt-4 text-4xl font-black text-white">{stat.value}</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">{stat.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
