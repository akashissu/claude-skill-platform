import { prescriptions } from '@/data/portalData';
import { SectionCard } from '@/components/SectionCard';

const statusStyles = {
  Active: 'text-emerald-200 bg-emerald-400/10 border-emerald-300/20',
  'Refill due': 'text-amber-200 bg-amber-400/10 border-amber-300/20',
  'Awaiting approval': 'text-violet-200 bg-violet-400/10 border-violet-300/20',
};

export function PrescriptionPanel() {
  return (
    <SectionCard title="Prescriptions" eyebrow="Medication center" action="Request refill">
      <div className="space-y-4">
        {prescriptions.map((prescription) => (
          <article key={prescription.id} className="rounded-3xl border border-white/10 bg-slate-950/35 p-4">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-white">{prescription.name}</h3>
                <p className="mt-1 text-sm text-cyan-200">{prescription.dosage}</p>
              </div>
              <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[prescription.status]}`}>
                {prescription.status}
              </span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">{prescription.instructions}</p>
            <div className="mt-4 flex items-center justify-between gap-3 text-sm">
              <span className="text-slate-400">{prescription.refillDate}</span>
              <button className="rounded-full border border-white/10 px-3 py-2 font-medium text-slate-200 transition hover:bg-white/5">
                Open details
              </button>
            </div>
          </article>
        ))}
      </div>
    </SectionCard>
  );
}
