import { medicalSummary } from '@/data/portalData';
import { SectionCard } from '@/components/SectionCard';

const summaryBlocks = [
  { key: 'conditions', label: 'Conditions' },
  { key: 'allergies', label: 'Allergies' },
  { key: 'vitals', label: 'Recent vitals' },
  { key: 'documents', label: 'Shared records' },
] as const;

export function MedicalSummarySection() {
  return (
    <SectionCard title="Medical records summary" eyebrow="Clinical snapshot" action="Open chart">
      <div className="space-y-5">
        {summaryBlocks.map((block) => (
          <div key={block.key} className="rounded-3xl border border-white/10 bg-slate-950/35 p-4">
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">{block.label}</h3>
            <div className="mt-4 space-y-3">
              {medicalSummary[block.key].map((item) => (
                <div key={item.label} className="rounded-2xl border border-white/8 bg-white/[0.03] p-3">
                  <p className="text-sm font-medium text-white">{item.label}</p>
                  <p className="mt-1 text-sm text-slate-300">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
