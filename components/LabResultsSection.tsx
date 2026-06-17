import { labResults } from '@/data/portalData';
import { SectionCard } from '@/components/SectionCard';

const trendStyles = {
  Stable: 'text-emerald-200',
  Improving: 'text-cyan-200',
  'Needs review': 'text-amber-200',
};

export function LabResultsSection() {
  return (
    <SectionCard title="Lab results" eyebrow="Latest diagnostics" action="Download PDF" className="xl:col-span-2">
      <div className="grid gap-4 md:grid-cols-3">
        {labResults.map((result) => (
          <article key={result.id} className="rounded-3xl border border-white/10 bg-slate-950/35 p-5">
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-slate-400">{result.name}</p>
            <p className="mt-3 text-3xl font-semibold text-white">{result.value}</p>
            <p className="mt-2 text-sm text-slate-300">{result.reference}</p>
            <div className="mt-6 flex items-center justify-between gap-3 text-sm">
              <span className={`font-semibold ${trendStyles[result.trend]}`}>{result.trend}</span>
              <span className="text-slate-400">{result.updatedAt}</span>
            </div>
          </article>
        ))}
      </div>
    </SectionCard>
  );
}
