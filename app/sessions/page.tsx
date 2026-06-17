'use client';

import { useState } from 'react';
import { SessionCard } from '@/components/SessionCard';
import { sessions } from '@/lib/data';
import { SessionTrack } from '@/types';
import { Search, Filter, Grid, List } from 'lucide-react';

const tracks: SessionTrack[] = ['All', 'AI & ML', 'Web Dev', 'Cloud', 'Security', 'DevOps', 'Product', 'Leadership'];

export default function SessionsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTrack, setSelectedTrack] = useState<SessionTrack>('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredSessions = sessions.filter((session) => {
    const matchesSearch =
      session.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      session.speaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      session.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTrack = selectedTrack === 'All' || session.track === selectedTrack;
    return matchesSearch && matchesTrack;
  });

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-white mb-3">All Sessions</h1>
          <p className="text-gray-400 text-lg">
            {sessions.length} sessions across 8 tracks — find your next learning opportunity
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search sessions, speakers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input-field pl-12"
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-3 rounded-xl border transition-all ${
                viewMode === 'grid'
                  ? 'bg-brand-600 border-brand-500 text-white'
                  : 'bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-600'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-3 rounded-xl border transition-all ${
                viewMode === 'list'
                  ? 'bg-brand-600 border-brand-500 text-white'
                  : 'bg-gray-800 border-gray-700 text-gray-400 hover:border-gray-600'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Track Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          <Filter className="w-5 h-5 text-gray-500 self-center" />
          {tracks.map((track) => (
            <button
              key={track}
              onClick={() => setSelectedTrack(track)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                selectedTrack === track
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/30'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200 border border-gray-700'
              }`}
            >
              {track}
            </button>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-gray-500 text-sm mb-6">
          Showing {filteredSessions.length} of {sessions.length} sessions
        </p>

        {/* Sessions Grid/List */}
        {filteredSessions.length > 0 ? (
          <div
            className={`${
              viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'flex flex-col gap-4'
            }`}
          >
            {filteredSessions.map((session) => (
              <SessionCard key={session.id} session={session} viewMode={viewMode} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-300 mb-2">No sessions found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}
