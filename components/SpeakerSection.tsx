import { SpeakerCard } from '@/components/SpeakerCard';
import type { SpeakerProfile } from '@/types';

export function SpeakerSection({ speakers }: { speakers: SpeakerProfile[] }) {
  return (
    <section id="speakers" className="section-shell">
      <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow">Speaker profiles</p>
          <h2 className="mt-3 text-3xl font-bold text-white">Featured experts with clear topics, roles, and pathways back to the agenda.</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-300">
          Each profile highlights expertise, session context, and a direct route to the attendee’s next decision.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {speakers.map((speaker) => (
          <SpeakerCard key={speaker.id} speaker={speaker} />
        ))}
      </div>
    </section>
  );
}
