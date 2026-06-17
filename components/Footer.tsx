import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-slate-950/90">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.3fr_repeat(3,minmax(0,1fr))] lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 via-violet-500 to-accent-500 text-sm font-black text-white shadow-lg shadow-primary-500/25">
              PS
            </div>
            <div>
              <p className="text-lg font-bold text-white">Pulse Summit Live</p>
              <p className="text-sm text-slate-400">A polished virtual event experience for global audiences.</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-400">
            Built for attendees who need a clear agenda, live collaboration, effortless networking,
            and support that keeps the event moving.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">Explore</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><Link href="/#agenda" className="transition hover:text-white">Agenda</Link></li>
            <li><Link href="/#speakers" className="transition hover:text-white">Speakers</Link></li>
            <li><Link href="/#chat" className="transition hover:text-white">Live chat</Link></li>
            <li><Link href="/#networking" className="transition hover:text-white">Networking lounge</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">Support</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><a href="#" className="transition hover:text-white">Event help desk</a></li>
            <li><a href="#" className="transition hover:text-white">Accessibility tools</a></li>
            <li><a href="#" className="transition hover:text-white">Code of conduct</a></li>
            <li><a href="#" className="transition hover:text-white">Replay access</a></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-slate-200">Stay connected</h3>
          <div className="panel-muted space-y-3">
            <p className="text-sm text-slate-300">Need support during a session?</p>
            <p className="text-sm text-slate-400">Concierge response time: under 2 minutes for checked-in attendees.</p>
            <Link href="/#registration" className="btn-secondary w-full">
              View registration details
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
        © {currentYear} Pulse Summit Live. Streaming globally with moderated chat, inclusive access,
        and curated networking.
      </div>
    </footer>
  );
}
