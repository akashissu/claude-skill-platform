'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Session } from '@/types';
import { Clock, Users, Bookmark, BookmarkCheck, Play, Star } from 'lucide-react';
import { cn, formatDuration, getTrackColor } from '@/lib/utils';

interface SessionCardProps {
  session: Session;
  viewMode?: 'grid' | 'list';
}

export function SessionCard({ session, viewMode = 'grid' }: SessionCardProps) {
  const [bookmarked, setBookmarked] = useState(false);

  if (viewMode === 'list') {
    return (
      <div className="card flex flex-col sm:flex-row gap-4 hover:border-brand-800 group">
        <div className="relative w-full sm:w-48 h-28 rounded-xl overflow-hidden flex-shrink-0">
          <div className={cn('absolute inset-0', getTrackColor(session.track))} />
          <div className="absolute inset-0 flex items-center justify-center">
            <Play className="w-10 h-10 text-white/80" />
          </div>
          {session.isLive && (
            <div className="absolute top-2 left-2">
              <span className="live-indicator">
                <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                LIVE
              </span>
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-2">
                <span className={cn('badge', getTrackBadgeStyle(session.track))}>{session.track}</span>
                {session.level && (
                  <span className="badge bg-gray-800 text-gray-400">{session.level}</span>
                )}
              </div>
              <h3 className="text-white font-semibold text-lg leading-tight mb-1 group-hover:text-brand-300 transition-colors">
                {session.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-2">{session.description}</p>
            </div>
            <button
              onClick={() => setBookmarked(!bookmarked)}
              className="text-gray-500 hover:text-brand-400 transition-colors flex-shrink-0"
            >
              {bookmarked ? <BookmarkCheck className="w-5 h-5 text-brand-400" /> : <Bookmark className="w-5 h-5" />}
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-4 mt-3">
            <div className="flex items-center gap-2">
              <div className="relative w-6 h-6 rounded-full overflow-hidden">
                <Image src={session.speaker.avatar} alt={session.speaker.name} fill className="object-cover" />
              </div>
              <span className="text-gray-300 text-sm font-medium">{session.speaker.name}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <Clock className="w-4 h-4" />
              <span>{session.time}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-500 text-sm">
              <Users className="w-4 h-4" />
              <span>{session.attendeeCount.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-1 text-amber-400 text-sm">
              <Star className="w-4 h-4 fill-current" />
              <span>{session.rating}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card flex flex-col hover:border-brand-800 group cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-900/20">
      {/* Thumbnail */}
      <div className="relative h-40 rounded-xl overflow-hidden mb-4 -mx-6 -mt-6">
        <div className={cn('absolute inset-0', getTrackColor(session.track))} />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all">
            <Play className="w-7 h-7 text-white ml-1" />
          </div>
        </div>
        {session.isLive && (
          <div className="absolute top-3 left-3">
            <span className="live-indicator">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              LIVE
            </span>
          </div>
        )}
        <button
          onClick={(e) => { e.stopPropagation(); setBookmarked(!bookmarked); }}
          className="absolute top-3 right-3 w-8 h-8 bg-black/40 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-black/60 transition-all"
        >
          {bookmarked ? <BookmarkCheck className="w-4 h-4 text-brand-400" /> : <Bookmark className="w-4 h-4" />}
        </button>
        <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1 text-white text-xs font-medium">
          {formatDuration(session.duration)}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-3">
          <span className={cn('badge', getTrackBadgeStyle(session.track))}>{session.track}</span>
          {session.level && (
            <span className="badge bg-gray-800 text-gray-400">{session.level}</span>
          )}
        </div>
        <h3 className="text-white font-semibold text-lg leading-tight mb-2 group-hover:text-brand-300 transition-colors line-clamp-2">
          {session.title}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-2 mb-4 flex-1">{session.description}</p>

        {/* Speaker */}
        <div className="flex items-center gap-3 mb-4 pb-4 border-b border-gray-800">
          <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
            <Image src={session.speaker.avatar} alt={session.speaker.name} fill className="object-cover" />
          </div>
          <div className="min-w-0">
            <p className="text-gray-200 text-sm font-medium truncate">{session.speaker.name}</p>
            <p className="text-gray-500 text-xs truncate">{session.speaker.title}</p>
          </div>
        </div>

        {/* Meta */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-3 text-gray-500">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{session.time}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{session.attendeeCount.toLocaleString()}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-amber-400">
            <Star className="w-4 h-4 fill-current" />
            <span className="font-medium">{session.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function getTrackBadgeStyle(track: string): string {
  const styles: Record<string, string> = {
    'AI & ML': 'bg-purple-900/50 text-purple-300 border border-purple-800',
    'Web Dev': 'bg-blue-900/50 text-blue-300 border border-blue-800',
    'Cloud': 'bg-sky-900/50 text-sky-300 border border-sky-800',
    'Security': 'bg-red-900/50 text-red-300 border border-red-800',
    'DevOps': 'bg-orange-900/50 text-orange-300 border border-orange-800',
    'Product': 'bg-green-900/50 text-green-300 border border-green-800',
    'Leadership': 'bg-amber-900/50 text-amber-300 border border-amber-800',
  };
  return styles[track] || 'bg-gray-800 text-gray-300';
}
