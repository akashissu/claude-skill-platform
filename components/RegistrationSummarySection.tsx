import type { RegistrationSummary } from '@/types';

export function RegistrationSummarySection({ summary }: { summary: RegistrationSummary }) {
  const cards = [
    { label: 'Attendee', value: summary.attendeeName, detail: summary.ticketType },
    { label: 'Check-in', value: summary.checkInStatus, detail: 'Priority stream access enabled' },
    { label: 'Timezone', value: summary.timezone, detail: 'All session times shown in your locale' },
    { label: 'Saved agenda', value: `${summary.savedSessions} sessions`, detail: 'Bookmarks synced to your dashboard' },
    { label: 'Matches', value: `${summary.networkingMatches} suggested intros`, detail: 'Fresh recommendations based on your interests' },
    { label: 'Access', value: summary.loungeAccess, detail: summary.helpDesk },
  ];

  return (
    <section id="registration" className="section-shell">
      <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow">Registration summary</p>
          <h2 className="mt-3 text-3xl font-bold text-white">Everything an attendee needs before joining the next room.</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-300">
          Ticket status, agenda saves, networking readiness, and support access are surfaced in one responsive panel.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <article key={card.label} className="panel-muted h-full">
            <p className="grid-label">{card.label}</p>
            <h3 className="mt-3 text-lg font-semibold text-white">{card.value}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-400">{card.detail}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
