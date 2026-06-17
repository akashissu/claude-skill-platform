import type { NetworkingMatch } from '@/types';

export function NetworkingCard({ match }: { match: NetworkingMatch }) {
  return (
    <article className="panel flex h-full flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-bold text-white">{match.name}</h3>
          <p className="mt-1 text-sm font-medium text-primary-200">{match.role}</p>
          <p className="text-sm text-slate-400">{match.company} · {match.location}</p>
        </div>
        <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
          {match.availability}
        </span>
      </div>

      <p className="text-sm leading-6 text-slate-300">{match.matchReason}</p>

      <div className="flex flex-wrap gap-2">
        {match.interests.map((interest) => (
          <span key={interest} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            {interest}
          </span>
        ))}
      </div>

      <button type="button" className="btn-secondary mt-auto w-full">
        Request intro
      </button>
    </article>
  );
}
