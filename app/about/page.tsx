import { SourceAppendix } from '@/components/SourceAppendix';
import { getCatalogData } from '@/lib/catalog';

export default function AboutPage() {
  const data = getCatalogData();

  return (
    <div className="mx-auto max-w-7xl px-6 py-14">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <section className="card border-slate-800 bg-slate-900/70">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-300">Research basis</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white">Source-backed catalog construction</h1>
          <p className="mt-5 text-base leading-8 text-slate-300">
            The ticket cites Anthropic Agent Skills guidance, public skills marketplaces, Asana workflow templates, and public
            industry datasets. This page keeps that lineage visible for product, QA, and compliance review.
          </p>
          <div className="mt-6 rounded-3xl border border-slate-800 bg-slate-950/70 p-5">
            <h2 className="text-xl font-semibold text-white">Implementation notes</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
              <li>• Department suite details are parsed directly from the supplied issue specification file.</li>
              <li>• Overlay suites are modeled as structured catalog extensions to match the ticket’s 20-overlay requirement.</li>
              <li>• Source IDs are preserved so the next role can trace claims back to the cited research appendix.</li>
            </ul>
          </div>
        </section>

        <section className="card border-slate-800 bg-slate-900/70">
          <h2 className="text-2xl font-semibold text-white">Source mix</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              ['Anthropic docs', data.sources.filter((source) => source.category === 'anthropic').length],
              ['Skill catalogs', data.sources.filter((source) => source.category === 'marketplace').length],
              ['Asana demand signals', data.sources.filter((source) => source.category === 'asana').length],
              ['Data and security', data.sources.filter((source) => source.category === 'data' || source.category === 'security').length],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-5">
                <p className="text-sm uppercase tracking-[0.18em] text-slate-500">{label}</p>
                <p className="mt-3 text-4xl font-black text-white">{value}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <SourceAppendix sources={data.sources} />
    </div>
  );
}
