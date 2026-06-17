'use client';

import { useState } from 'react';
import { SpeakerCard } from '@/components/SpeakerCard';
import { speakers } from '@/lib/data';
import { Search, Twitter, Linkedin, Globe } from 'lucide-react';
import { Speaker } from '@/types';

export default function SpeakersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const filteredSpeakers = speakers.filter(
    (s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.topics.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-3">Our Speakers</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {speakers.length} world-class experts sharing insights on the technologies shaping our future
          </p>
        </div>

        {/* Search */}
        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search speakers, companies, topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-500 transition-colors"
            />
          </div>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSpeakers.map((speaker) => (
            <div key={speaker.id} onClick={() => setSelectedSpeaker(speaker)} className="cursor-pointer">
              <SpeakerCard speaker={speaker} />
            </div>
          ))}
        </div>

        {filteredSpeakers.length === 0 && (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🎤</div>
            <h3 className="text-xl font-semibold text-white mb-2">No speakers found</h3>
            <p className="text-gray-400">Try a different search term</p>
          </div>
        )}

        {/* Speaker Detail Modal */}
        {selectedSpeaker && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedSpeaker(null)}
          >
            <div
              className="glass-card p-8 max-w-lg w-full animate-slide-up"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start gap-5 mb-6">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-3xl font-bold text-white flex-shrink-0">
                  {selectedSpeaker.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white">{selectedSpeaker.name}</h2>
                  <p className="text-brand-400 font-medium">{selectedSpeaker.role}</p>
                  <p className="text-gray-400">{selectedSpeaker.company}</p>
                </div>
                <button
                  onClick={() => setSelectedSpeaker(null)}
                  className="text-gray-400 hover:text-white transition-colors text-2xl leading-none"
                >
                  ×
                </button>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{selectedSpeaker.bio}</p>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedSpeaker.topics.map((topic) => (
                    <span key={topic} className="tag">{topic}</span>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Sessions</h3>
                {selectedSpeaker.sessions.map((session) => (
                  <div key={session} className="text-gray-300 text-sm py-1">• {session}</div>
                ))}
              </div>

              <div className="flex gap-3">
                {selectedSpeaker.twitter && (
                  <a href={selectedSpeaker.twitter} className="flex items-center gap-2 text-gray-400 hover:text-brand-400 transition-colors text-sm">
                    <Twitter className="w-4 h-4" /> Twitter
                  </a>
                )}
                {selectedSpeaker.linkedin && (
                  <a href={selectedSpeaker.linkedin} className="flex items-center gap-2 text-gray-400 hover:text-brand-400 transition-colors text-sm">
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                )}
                {selectedSpeaker.website && (
                  <a href={selectedSpeaker.website} className="flex items-center gap-2 text-gray-400 hover:text-brand-400 transition-colors text-sm">
                    <Globe className="w-4 h-4" /> Website
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
