'use client';

import { useState } from 'react';
import { Attendee } from '@/types';
import { MessageCircle, UserPlus, Search, Globe, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

interface NetworkingAreaProps {
  attendees: Attendee[];
}

export function NetworkingArea({ attendees }: NetworkingAreaProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [connectedIds, setConnectedIds] = useState<string[]>([]);
  const [filter, setFilter] = useState<'all' | 'online' | 'speakers'>('all');

  const filteredAttendees = attendees.filter((a) => {
    const matchesSearch =
      a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter =
      filter === 'all' ||
      (filter === 'online' && a.isOnline) ||
      (filter === 'speakers' && a.isSpeaker);
    return matchesSearch && matchesFilter;
  });

  const toggleConnect = (id: string) => {
    setConnectedIds((prev) =>
      prev.includes(id) ? prev.filter((cid) => cid !== id) : [...prev, id]
    );
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Online Now', value: attendees.filter((a) => a.isOnline).length, color: 'text-green-400' },
          { label: 'Total Attendees', value: '10,247', color: 'text-brand-400' },
          { label: 'Connections Made', value: '3,891', color: 'text-accent-400' },
        ].map((stat) => (
          <div key={stat.label} className="glass-card p-4 text-center">
            <div className={cn('text-2xl font-bold', stat.color)}>{stat.value}</div>
            <div className="text-gray-400 text-xs mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search attendees..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-500 transition-colors text-sm"
          />
        </div>
        <div className="flex gap-1 bg-gray-900 p-1 rounded-lg">
          {(['all', 'online', 'speakers'] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                'px-3 py-1.5 rounded text-xs font-medium capitalize transition-all duration-200',
                filter === f ? 'bg-brand-600 text-white' : 'text-gray-400 hover:text-white'
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Attendees Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredAttendees.map((attendee) => {
          const isConnected = connectedIds.includes(attendee.id);
          return (
            <div key={attendee.id} className="glass-card p-4 hover:border-brand-500/30 transition-all duration-300">
              <div className="flex items-start gap-3">
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-white font-bold">
                    {attendee.name.charAt(0)}
                  </div>
                  {attendee.isOnline && (
                    <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-900" />
                  )}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <h4 className="font-medium text-white text-sm truncate">{attendee.name}</h4>
                    {attendee.isSpeaker && (
                      <span className="text-xs bg-accent-500/20 text-accent-400 border border-accent-500/30 px-1.5 py-0.5 rounded-full flex-shrink-0">
                        Speaker
                      </span>
                    )}
                  </div>
                  <p className="text-gray-400 text-xs truncate flex items-center gap-1">
                    <Briefcase className="w-3 h-3 flex-shrink-0" />
                    {attendee.role} @ {attendee.company}
                  </p>
                  <p className="text-gray-500 text-xs flex items-center gap-1 mt-0.5">
                    <Globe className="w-3 h-3 flex-shrink-0" />
                    {attendee.country}
                  </p>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mt-3 mb-3">
                {attendee.interests.slice(0, 2).map((interest) => (
                  <span key={interest} className="tag text-xs">{interest}</span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <button
                  onClick={() => toggleConnect(attendee.id)}
                  className={cn(
                    'flex-1 flex items-center justify-center gap-1.5 text-xs font-medium py-1.5 rounded-lg transition-all duration-200',
                    isConnected
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-brand-600/20 hover:bg-brand-600/30 text-brand-400 border border-brand-500/30'
                  )}
                >
                  <UserPlus className="w-3.5 h-3.5" />
                  {isConnected ? 'Connected' : 'Connect'}
                </button>
                <button className="flex items-center justify-center gap-1.5 text-xs font-medium py-1.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/10 transition-all duration-200">
                  <MessageCircle className="w-3.5 h-3.5" />
                  Chat
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredAttendees.length === 0 && (
        <div className="glass-card p-12 text-center">
          <div className="text-4xl mb-3">👥</div>
          <h3 className="text-lg font-semibold text-white mb-1">No attendees found</h3>
          <p className="text-gray-400 text-sm">Try adjusting your search</p>
        </div>
      )}
    </div>
  );
}
