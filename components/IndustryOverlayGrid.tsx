import type { IndustryOverlay } from '@/types';

interface IndustryOverlayGridProps {
  overlays: IndustryOverlay[];
  title?: string;
  description?: string;
}

export function IndustryOverlayGrid({
  overlays,
  title = 'Industry overlays',
  description = 'Vertical overlays add terminology, service playbooks, compliance checks, and reporting expectations on top of department suites.',
}: IndustryOverlayGridProps) {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16">
      <div className="max-w-4xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-300">Vertical coverage</p>
        <h2 className="section-heading">{title}</h2>
        <p className="section-subheading">{description}</p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {overlays.map((overlay) => (
          <article key={overlay.slug} className="card border-slate-800 bg-slate-900/70">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold text-white">{overlay.name}</h3>
              <span className="rounded-full border border-primary-400/30 bg-primary-500/10 px-3 py-1 text-sm font-semibold text-primary-100">
                {overlay.skillCount} skills
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">{overlay.summary}</p>
            <div className="mt-5 rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Compliance and workflow focus</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">{overlay.complianceFocus}</p>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {overlay.pairedDepartments.slice(0, 3).map((department) => (
                <span key={department} className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs text-slate-300">
                  {department}
                </span>
              ))}
            </div>
            <ul className="mt-5 space-y-2 text-sm text-slate-200">
              {overlay.sampleSkills.map((skill) => (
                <li key={skill}>• {skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
