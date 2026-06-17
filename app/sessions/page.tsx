'use client';

import { useState } from 'react';
import { SessionCard } from '@/components/SessionCard';
import { sessions } from '@/lib/data';
import { Search, Filter, Clock, Users } from 'lucide-react';
import { SessionTrack } from '@/types';

const tracks: SessionTrack[] = ['All', 'AI & ML', 'Web Dev', 'DevOps', 'Security', 'Cloud', 'Mobile'];
const days = ['All Days', 'Day 1 — June 12', 'Day 2 — June 13', 'Day 3 — June 14'];

export default function SessionsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTrack, setSelectedTrack] = useState<SessionTrack>('All');
  const [selectedDay, setSelectedDay] = useState('All Days');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');

  const filteredSessions = sessions.filter((session) => {
    const matchesSearch =
      session.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      session.speaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      session.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTrack = selectedTrack === 'All' || session.track === selectedTrack;
    const matchesDay = selectedDay === 'All Days' || session.day === selectedDay;
    return matchesSearch && matchesTrack && matchesDay;
  });

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white mb-3">All Sessions</h1>
          <p className="text-gray-400 text-lg">
            {sessions.length} sessions across 7 tracks — find what excites you
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: <Clock className="w-5 h-5" />, label: 'Total Hours', value: '96h' },
            { icon: <Users className="w-5 h-5" />, label: 'Speakers', value: '62' },
            { icon: <Filter className="w-5 h-5" />, label: 'Tracks', value: '7' },
            { icon: <Search className="w-5 h-5" />, label: 'Workshops', value: '12' },
          ].map((stat) => (
            <div key={stat.label} className="glass-card p-4 flex items-center gap-3">
              <div className="text-brand-400">{stat.icon}</div>
              <div>
                <div className="text-xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="glass-card p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search sessions, speakers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-brand-500 transition-colors"
              />
            </div>

            {/* Day Filter */}
            <select
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-brand-500 transition-colors"
            >
              {days.map((day) => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>

            {/* View Toggle */}
            <div className="flex gap-1 bg-gray-800 p-1 rounded-lg">
              <button
                onClick={() => setViewMode('list')}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                  viewMode === 'list' ? 'bg-brand-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                List
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                  viewMode === 'grid' ? 'bg-brand-600 text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                Grid
              </button>
            </div>
          </div>

          {/* Track Filters */}
          <div className="flex flex-wrap gap-2 mt-4">
            {tracks.map((track) => (
              <button
                key={track}
                onClick={() => setSelectedTrack(track)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedTrack === track
                    ? 'bg-brand-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white border border-gray-700'
                }`}
              >
                {track}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-gray-400 mb-4">
          Showing <span className="text-white font-semibold">{filteredSessions.length}</span> sessions
        </p>

        {/* Sessions Grid/List */}
        {filteredSessions.length > 0 ? (
          <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 gap-4' : 'flex flex-col gap-4'}>
            {filteredSessions.map((session) => (
              <SessionCard key={session.id} session={session} compact={viewMode === 'grid'} />
            ))}
          </div>
        ) : (
          <div className="glass-card p-16 text-center">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-white mb-2">No sessions found</h3>
            <p className="text-gray-400">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
}
