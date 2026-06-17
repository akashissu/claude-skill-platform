'use client';

import { useState } from 'react';
import { SpeakerCard } from '@/components/SpeakerCard';
import { speakers } from '@/lib/data';
import { Speaker } from '@/types';
import { Search, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function SpeakersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);

  const filteredSpeakers = speakers.filter(
    (speaker) =>
      speaker.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      speaker.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      speaker.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-white mb-3">Speakers</h1>
          <p className="text-gray-400 text-lg">
            {speakers.length} world-class speakers sharing their expertise
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-md mb-10">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="Search speakers, companies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-field pl-12"
          />
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSpeakers.map((speaker) => (
            <div key={speaker.id} onClick={() => setSelectedSpeaker(speaker)} className="cursor-pointer">
              <SpeakerCard speaker={speaker} />
            </div>
          ))}
        </div>

        {/* Speaker Modal */}
        {selectedSpeaker && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedSpeaker(null)}
          >
            <div
              className="bg-gray-900 border border-gray-800 rounded-2xl p-8 max-w-lg w-full shadow-2xl animate-slide-up"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image
                    src={selectedSpeaker.avatar}
                    alt={selectedSpeaker.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-white">{selectedSpeaker.name}</h2>
                  <p className="text-brand-400 font-medium">{selectedSpeaker.title}</p>
                  <p className="text-gray-400">{selectedSpeaker.company}</p>
                </div>
                <button
                  onClick={() => setSelectedSpeaker(null)}
                  className="text-gray-500 hover:text-gray-300 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">{selectedSpeaker.bio}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedSpeaker.topics.map((topic) => (
                  <span key={topic} className="badge bg-brand-900/50 text-brand-300 border border-brand-800">
                    {topic}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {selectedSpeaker.linkedin && (
                  <a
                    href={selectedSpeaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                  >
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                )}
                {selectedSpeaker.twitter && (
                  <a
                    href={selectedSpeaker.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sky-400 hover:text-sky-300 text-sm font-medium transition-colors"
                  >
                    <Twitter className="w-4 h-4" /> Twitter
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
