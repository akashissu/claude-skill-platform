'use client';

import { useState } from 'react';
import { Session } from '@/types';
import { Clock, Users, Bookmark, BookmarkCheck, Play, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SessionCardProps {
  session: Session;
  compact?: boolean;
}

const trackColors: Record<string, string> = {
  'AI & ML': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'Web Dev': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'DevOps': 'bg-green-500/20 text-green-300 border-green-500/30',
  'Security': 'bg-red-500/20 text-red-300 border-red-500/30',
  'Cloud': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  'Mobile': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
};

export function SessionCard({ session, compact = false }: SessionCardProps) {
  const [saved, setSaved] = useState(false);

  const trackColor = trackColors[session.track] || 'bg-gray-500/20 text-gray-300 border-gray-500/30';

  return (
    <div
      className={cn(
        'glass-card p-5 hover:border-brand-500/30 transition-all duration-300 group',
        session.isLive && 'border-red-500/30 shadow-red-500/5 shadow-lg'
      )}
    >
      <div className="flex items-start gap-4">
        {/* Speaker Avatar */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold text-lg">
            {session.speaker.name.charAt(0)}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3 mb-2">
            <div className="flex flex-wrap items-center gap-2">
              {session.isLive && (
                <span className="live-badge">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                  LIVE
                </span>
              )}
              <span className={cn('text-xs font-medium px-2.5 py-1 rounded-full border', trackColor)}>
                {session.track}
              </span>
              <span className="text-xs text-gray-500">{session.type}</span>
            </div>
            <button
              onClick={() => setSaved(!saved)}
              className="flex-shrink-0 text-gray-500 hover:text-brand-400 transition-colors"
              title={saved ? 'Remove from saved' : 'Save session'}
            >
              {saved ? (
                <BookmarkCheck className="w-5 h-5 text-brand-400" />
              ) : (
                <Bookmark className="w-5 h-5" />
              )}
            </button>
          </div>

          <h3 className="font-semibold text-white text-base mb-1 group-hover:text-brand-300 transition-colors line-clamp-2">
            {session.title}
          </h3>

          {!compact && (
            <p className="text-gray-400 text-sm mb-3 line-clamp-2">{session.description}</p>
          )}

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-brand-400 to-accent-400 flex items-center justify-center text-xs font-bold text-white">
                {session.speaker.name.charAt(0)}
              </div>
              {session.speaker.name}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {session.time} · {session.duration}
            </span>
            <span className="flex items-center gap-1">
              <Users className="w-3.5 h-3.5" />
              {session.attendeeCount.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Action */}
        <div className="flex-shrink-0">
          {session.isLive ? (
            <button className="flex items-center gap-1.5 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-400 text-sm font-medium px-3 py-2 rounded-lg transition-colors">
              <Play className="w-3.5 h-3.5" />
              Watch
            </button>
          ) : (
            <button className="flex items-center gap-1.5 bg-brand-600/20 hover:bg-brand-600/30 border border-brand-500/30 text-brand-400 text-sm font-medium px-3 py-2 rounded-lg transition-colors">
              <ExternalLink className="w-3.5 h-3.5" />
              Details
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
