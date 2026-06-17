import Link from 'next/link';

const heroHighlights = ['Live now', 'Multi-track', 'Global streaming'];
const commandCenter = [
  { label: 'Next session', value: 'Facilitation for hybrid teams · 10:00 UTC' },
  { label: 'Stream health', value: '99.98% uptime · captions enabled' },
  { label: 'Networking activity', value: '247 intros scheduled this hour' },
];

export function EventHeroSection() {
  return (
    <section className="section-shell overflow-hidden px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
      <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <span className="eyebrow">June 17 · Streaming in UTC</span>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-balance text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              A premium React virtual event platform built for sessions, speakers, chat, and connection.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Pulse Summit Live gives attendees a clear path through the day: browse the agenda,
              meet featured speakers, jump into chat, and turn session interest into real networking outcomes.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {heroHighlights.map((item) => (
              <span key={item} className="status-pill">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/#agenda" className="btn-primary">
              View live agenda
            </Link>
            <Link href="/#networking" className="btn-secondary">
              Explore networking lounge
            </Link>
          </div>
        </div>

        <div className="panel mesh-border relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10" />
          <div className="relative space-y-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="grid-label">Live control center</p>
                <h2 className="mt-2 text-2xl font-bold text-white">Attendee-ready in one glance</h2>
              </div>
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                Broadcast healthy
              </span>
            </div>

            <div className="space-y-3">
              {commandCenter.map((item) => (
                <div key={item.label} className="panel-muted">
                  <p className="grid-label">{item.label}</p>
                  <p className="mt-2 text-sm font-medium leading-6 text-slate-100">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              <div className="panel-muted">
                <p className="grid-label">Active rooms</p>
                <p className="mt-2 text-2xl font-bold text-white">12</p>
              </div>
              <div className="panel-muted">
                <p className="grid-label">Saved sessions</p>
                <p className="mt-2 text-2xl font-bold text-white">4</p>
              </div>
              <div className="panel-muted">
                <p className="grid-label">Unread chat</p>
                <p className="mt-2 text-2xl font-bold text-white">18</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
