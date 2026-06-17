import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="section-shell">
      <div className="space-y-4 text-center">
        <p className="eyebrow">Pulse Summit</p>
        <h2 className="text-4xl font-black text-white">A modern virtual event experience for global attendees.</h2>
        <p className="mx-auto max-w-2xl text-base leading-7 text-slate-300">
          Browse the agenda, meet speakers, join the conversation, and discover meaningful connections.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/#agenda" className="btn-primary">Browse sessions</Link>
          <Link href="/#networking" className="btn-secondary">Meet attendees</Link>
        </div>
      </div>
    </section>
  );
}
