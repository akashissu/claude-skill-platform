import { appointments } from '@/data/portalData';
import { SectionCard } from '@/components/SectionCard';

const badgeStyles = {
  Confirmed: 'bg-sky-400/10 text-sky-200 border-sky-300/20',
  'Check-in open': 'bg-emerald-400/10 text-emerald-200 border-emerald-300/20',
  'Follow-up': 'bg-violet-400/10 text-violet-200 border-violet-300/20',
};

export function AppointmentSection() {
  return (
    <SectionCard title="Appointments" eyebrow="Care schedule" action="Manage visits" className="xl:col-span-2">
      <div className="grid gap-4 lg:grid-cols-3">
        {appointments.map((appointment) => (
          <article key={appointment.id} className="rounded-3xl border border-white/10 bg-slate-950/40 p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm font-medium text-cyan-200">{appointment.specialty}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{appointment.doctor}</h3>
              </div>
              <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${badgeStyles[appointment.status]}`}>
                {appointment.status}
              </span>
            </div>
            <dl className="mt-5 space-y-3 text-sm text-slate-300">
              <div className="flex justify-between gap-3">
                <dt>Date</dt>
                <dd className="font-medium text-white">{appointment.date}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt>Time</dt>
                <dd className="font-medium text-white">{appointment.time}</dd>
              </div>
              <div className="space-y-1">
                <dt>Location</dt>
                <dd className="text-white">{appointment.location}</dd>
              </div>
            </dl>
            <div className="mt-5 flex gap-3">
              <button className="flex-1 rounded-2xl bg-cyan-400 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
                View details
              </button>
              <button className="rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/5">
                Check in
              </button>
            </div>
          </article>
        ))}
      </div>
    </SectionCard>
  );
}
