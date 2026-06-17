'use client';

import { useState } from 'react';
import type { EventSession } from '@/types';

const statusStyles: Record<EventSession['status'], string> = {
  'Live now': 'bg-emerald-500/15 text-emerald-300 border-emerald-400/30',
  'Starting soon': 'bg-amber-500/15 text-amber-300 border-amber-400/30',
  'On demand': 'bg-slate-500/15 text-slate-300 border-slate-400/30',
};

export function SessionCard({ session }: { session: EventSession }) {
  const [saved, setSaved] = useState(Boolean(session.saved));

  return (
    <article className="panel flex h-full flex-col gap-5 transition duration-200 hover:-translate-y-1 hover:border-primary-400/30 hover:bg-slate-900/90">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="space-y-2">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-primary-500/15 px-3 py-1 text-xs font-semibold text-primary-200">
              {session.track}
            </span>
            <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${statusStyles[session.status]}`}>
              {session.status}
            </span>
          </div>
          <h3 className="text-xl font-bold leading-7 text-white">{session.title}</h3>
        </div>
        <button
          type="button"
          onClick={() => setSaved((current) => !current)}
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold transition ${
            saved
              ? 'border-primary-400/40 bg-primary-500/15 text-primary-100'
              : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
          }`}
          aria-pressed={saved}
        >
          {saved ? '★ Saved' : '☆ Save'}
        </button>
      </div>

      <p className="text-sm leading-6 text-slate-300">{session.summary}</p>

      <dl className="grid gap-3 sm:grid-cols-2">
        <div className="panel-muted">
          <dt className="grid-label">Time</dt>
          <dd className="mt-2 text-sm font-medium text-white">{session.startTime}–{session.endTime} · {session.duration}</dd>
        </div>
        <div className="panel-muted">
          <dt className="grid-label">Speaker</dt>
          <dd className="mt-2 text-sm font-medium text-white">{session.speaker}</dd>
        </div>
        <div className="panel-muted">
          <dt className="grid-label">Room</dt>
          <dd className="mt-2 text-sm font-medium text-white">{session.room}</dd>
        </div>
        <div className="panel-muted">
          <dt className="grid-label">Capacity</dt>
          <dd className="mt-2 text-sm font-medium text-white">{session.capacity} · {session.attendees.toLocaleString()} attending</dd>
        </div>
      </dl>

      <div className="mt-auto flex flex-wrap gap-2">
        {session.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
