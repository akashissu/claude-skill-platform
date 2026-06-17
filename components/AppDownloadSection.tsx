import Link from 'next/link';

export function AppDownloadSection() {
  return (
    <section className="section-shell">
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="eyebrow">Event access</p>
          <h2 className="mt-3 text-3xl font-bold text-white">Stay synced across desktop, tablet, and mobile during the event.</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
            Agenda bookmarks, registration status, and networking suggestions are designed to feel fast on every device size.
          </p>
        </div>
        <div className="panel flex flex-col gap-3">
          <Link href="/#agenda" className="btn-primary w-full">Open agenda</Link>
          <Link href="/#chat" className="btn-secondary w-full">Join live chat</Link>
        </div>
      </div>
    </section>
  );
}
