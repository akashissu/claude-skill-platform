import { SessionCard } from '@/components/SessionCard';
import type { EventSession } from '@/types';

export function AgendaSection({ sessions }: { sessions: EventSession[] }) {
  const tracks = Array.from(new Set(sessions.map((session) => session.track)));

  return (
    <section id="agenda" className="section-shell h-full">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow">Event agenda</p>
          <h2 className="mt-3 text-3xl font-bold text-white">Session cards keep the schedule readable on every screen size.</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {tracks.map((track) => (
            <span key={track} className="status-pill">
              {track}
            </span>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {sessions.map((session) => (
          <SessionCard key={session.id} session={session} />
        ))}
      </div>
    </section>
  );
}
