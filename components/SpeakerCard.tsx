import Link from 'next/link';
import type { SpeakerProfile } from '@/types';

export function SpeakerCard({ speaker }: { speaker: SpeakerProfile }) {
  return (
    <article className="panel flex h-full flex-col gap-4">
      <div className="flex items-start gap-4">
        <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${speaker.color} text-lg font-black text-white shadow-lg`}>
          {speaker.initials}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{speaker.name}</h3>
          <p className="mt-1 text-sm font-medium text-primary-200">{speaker.role}</p>
          <p className="text-sm text-slate-400">{speaker.company}</p>
        </div>
      </div>

      <p className="text-sm leading-6 text-slate-300">{speaker.bio}</p>
      <p className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-200">{speaker.topic}</p>

      <div className="flex flex-wrap gap-2">
        {speaker.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            {tag}
          </span>
        ))}
      </div>

      <Link href={`/#agenda`} className="btn-secondary mt-auto w-full">
        View speaker session
      </Link>
    </article>
  );
}
