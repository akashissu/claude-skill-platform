'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Attendee } from '@/types';
import { MessageCircle, UserPlus, Search, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NetworkingAreaProps {
  attendees: Attendee[];
}

export function NetworkingArea({ attendees }: NetworkingAreaProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [connectedIds, setConnectedIds] = useState<Set<string>>(new Set());

  const filteredAttendees = attendees.filter(
    (a) =>
      a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleConnect = (id: string) => {
    setConnectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div>
      {/* Search */}
      <div className="relative max-w-md mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Search attendees..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="input-field pl-12"
        />
      </div>

      {/* Stats */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <span className="text-gray-400 text-sm">{attendees.filter(a => a.isOnline).length} online now</span>
        </div>
        <div className="text-gray-600 text-sm">•</div>
        <span className="text-gray-400 text-sm">{attendees.length} total attendees</span>
        <div className="text-gray-600 text-sm">•</div>
        <span className="text-gray-400 text-sm">{connectedIds.size} connections made</span>
      </div>

      {/* Attendees Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredAttendees.map((attendee) => (
          <div
            key={attendee.id}
            className={cn(
              'card group hover:border-gray-700 transition-all duration-200',
              connectedIds.has(attendee.id) && 'border-brand-800 bg-brand-950/20'
            )}
          >
            <div className="flex items-start gap-3">
              <div className="relative flex-shrink-0">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden">
                  <Image
                    src={attendee.avatar}
                    alt={attendee.name}
                    fill
                    className="object-cover"
                  />
                </div>
                {attendee.isOnline && (
                  <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-gray-900" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-white font-semibold text-sm truncate">{attendee.name}</h4>
                <p className="text-gray-400 text-xs truncate">{attendee.title}</p>
                <p className="text-gray-500 text-xs truncate">{attendee.company}</p>
              </div>
            </div>

            {/* Location & Interests */}
            <div className="mt-3">
              {attendee.location && (
                <div className="flex items-center gap-1 text-gray-500 text-xs mb-2">
                  <MapPin className="w-3 h-3" />
                  <span>{attendee.location}</span>
                </div>
              )}
              <div className="flex flex-wrap gap-1">
                {attendee.interests.slice(0, 2).map((interest) => (
                  <span key={interest} className="badge bg-gray-800 text-gray-500 text-xs">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => handleConnect(attendee.id)}
                className={cn(
                  'flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg text-xs font-semibold transition-all',
                  connectedIds.has(attendee.id)
                    ? 'bg-brand-900/50 text-brand-400 border border-brand-800'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200 border border-gray-700'
                )}
              >
                <UserPlus className="w-3.5 h-3.5" />
                {connectedIds.has(attendee.id) ? 'Connected' : 'Connect'}
              </button>
              <button className="flex items-center justify-center gap-1.5 px-3 py-2 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-gray-200 rounded-lg text-xs font-semibold transition-all border border-gray-700">
                <MessageCircle className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
