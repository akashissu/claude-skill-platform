import Link from 'next/link';

export function ClosingCTASection() {
  return (
    <section className="section-shell overflow-hidden">
      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="eyebrow">Ready for the next session?</p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Keep attendees moving with clear CTAs, support visibility, and polished event surfaces.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
            This homepage brings together the most important event workflows in one React experience:
            plan the day, join content, participate in chat, and find the right people to meet.
          </p>
        </div>

        <div className="panel flex flex-col gap-4">
          <div className="panel-muted">
            <p className="grid-label">Attendee checklist</p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-200">
              <li>• Save your next two sessions</li>
              <li>• Introduce yourself in chat</li>
              <li>• Schedule one networking conversation</li>
            </ul>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/#agenda" className="btn-primary flex-1">
              Jump to agenda
            </Link>
            <Link href="/#registration" className="btn-secondary flex-1">
              Review registration
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
