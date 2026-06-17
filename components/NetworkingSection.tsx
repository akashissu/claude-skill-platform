'use client';

import { useMemo, useState } from 'react';
import { NetworkingCard } from '@/components/NetworkingCard';
import type { NetworkingMatch } from '@/types';

export function NetworkingSection({
  matches,
  topics,
}: {
  matches: NetworkingMatch[];
  topics: string[];
}) {
  const [activeTopic, setActiveTopic] = useState(topics[0] ?? 'All');

  const filteredMatches = useMemo(() => {
    if (activeTopic === 'All') {
      return matches;
    }

    return matches.filter((match) => match.interests.includes(activeTopic));
  }, [activeTopic, matches]);

  return (
    <section id="networking" className="section-shell">
      <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="eyebrow">Networking area</p>
          <h2 className="mt-3 text-3xl font-bold text-white">Curated introductions, topic filters, and lounge-ready calls to action.</h2>
        </div>
        <p className="max-w-xl text-sm leading-6 text-slate-300">
          Suggested matches adapt to attendee interests, making the networking section feel active without needing a backend service.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {topics.map((topic) => (
          <button
            key={topic}
            type="button"
            onClick={() => setActiveTopic(topic)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              activeTopic === topic
                ? 'border-primary-400/40 bg-primary-500/15 text-primary-100'
                : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            {topic}
          </button>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.4fr_0.8fr]">
        <div className="grid gap-4 md:grid-cols-2">
          {filteredMatches.map((match) => (
            <NetworkingCard key={match.id} match={match} />
          ))}
        </div>

        <aside className="panel flex flex-col gap-4">
          <div>
            <p className="grid-label">Lounge concierge</p>
            <h3 className="mt-2 text-2xl font-bold text-white">Get matched faster with a few guided prompts.</h3>
          </div>
          <div className="space-y-3">
            <div className="panel-muted">
              <p className="grid-label">Suggested next step</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">
                Join the Founder Stories room after the keynote to meet attendees discussing community-led growth.
              </p>
            </div>
            <div className="panel-muted">
              <p className="grid-label">Best practice</p>
              <p className="mt-2 text-sm leading-6 text-slate-200">
                Add one agenda bookmark and one interest tag to refresh your recommendations instantly.
              </p>
            </div>
          </div>
          <button type="button" className="btn-primary mt-auto w-full">
            Refresh match cues
          </button>
        </aside>
      </div>
    </section>
  );
}
