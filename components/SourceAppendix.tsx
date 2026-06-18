import type { SourceLink } from '@/types';

interface SourceAppendixProps {
  sources: SourceLink[];
  limit?: number;
}

export function SourceAppendix({ sources, limit }: SourceAppendixProps) {
  const visibleSources = typeof limit === 'number' ? sources.slice(0, limit) : sources;

  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16">
      <div className="max-w-4xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-300">Research appendix</p>
        <h2 className="section-heading">Source URLs used in the ticket research snapshot</h2>
        <p className="section-subheading">
          The catalog references Anthropic documentation, public skill marketplaces, Asana template demand signals, and
          public industry datasets. Keeping the appendix in-app makes review and traceability easier for the next role.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {visibleSources.map((source) => (
          <article key={source.id} className="card border-slate-800 bg-slate-900/70">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-300">{source.id}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{source.title}</h3>
              </div>
              <span className="rounded-full border border-slate-700 px-3 py-1 text-xs uppercase tracking-[0.16em] text-slate-400">
                {source.category}
              </span>
            </div>
            <a href={source.url} className="mt-4 block break-all text-sm leading-6 text-primary-200 hover:text-primary-100">
              {source.url}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
