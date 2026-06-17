'use client';

import { useState } from 'react';
import { SessionCard } from '@/components/SessionCard';
import { SpeakerCard } from '@/components/SpeakerCard';
import { AgendaSection } from '@/components/AgendaSection';
import { LiveChatPanel } from '@/components/LiveChatPanel';
import { NetworkingArea } from '@/components/NetworkingArea';
import { RegistrationSummary } from '@/components/RegistrationSummary';
import { sessions, speakers, agendaDays, chatMessages, attendees } from '@/lib/data';
import { Calendar, Users, Zap, Globe, ChevronRight, Play } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const featuredSessions = sessions.slice(0, 3);
  const featuredSpeakers = speakers.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-brand-950 to-gray-950 pt-20 pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-900/30 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-brand-900/50 border border-brand-700/50 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <span className="text-brand-300 text-sm font-medium">Live Now — Day 2 of 3</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
                Tech<span className="text-brand-400">Summit</span>
                <br />
                <span className="text-3xl lg:text-5xl text-gray-300 font-bold">2024</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl">
                The world&apos;s largest virtual technology conference. 3 days, 50+ sessions, 80+ speakers, and 12,000+ attendees from 90 countries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => setIsRegistered(true)}
                  className="btn-primary flex items-center justify-center gap-2 text-lg"
                >
                  <Zap className="w-5 h-5" />
                  Register Free
                </button>
                <Link href="/sessions" className="btn-secondary flex items-center justify-center gap-2 text-lg">
                  <Play className="w-5 h-5" />
                  Browse Sessions
                </Link>
              </div>
              <div className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start">
                {[
                  { icon: Calendar, label: 'June 10–12, 2024', sub: '3 Days' },
                  { icon: Users, label: '12,000+ Attendees', sub: '90 Countries' },
                  { icon: Globe, label: '50+ Sessions', sub: '8 Tracks' },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-900/50 rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-brand-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{label}</p>
                      <p className="text-gray-500 text-xs">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 w-full max-w-lg">
              <RegistrationSummary
                isRegistered={isRegistered}
                onRegister={() => setIsRegistered(true)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sessions */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="section-title">Featured Sessions</h2>
            <p className="section-subtitle">Don&apos;t miss these top-rated talks</p>
          </div>
          <Link
            href="/sessions"
            className="hidden sm:flex items-center gap-2 text-brand-400 hover:text-brand-300 font-semibold transition-colors"
          >
            View All <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredSessions.map((session) => (
            <SessionCard key={session.id} session={session} />
          ))}
        </div>
      </section>

      {/* Speakers Preview */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="section-title">World-Class Speakers</h2>
              <p className="section-subtitle">Learn from industry pioneers and innovators</p>
            </div>
            <Link
              href="/speakers"
              className="hidden sm:flex items-center gap-2 text-brand-400 hover:text-brand-300 font-semibold transition-colors"
            >
              All Speakers <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredSpeakers.map((speaker) => (
              <SpeakerCard key={speaker.id} speaker={speaker} />
            ))}
          </div>
        </div>
      </section>

      {/* Agenda Preview */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="section-title">Event Agenda</h2>
          <p className="section-subtitle">Three packed days of learning and networking</p>
        </div>
        <AgendaSection days={agendaDays} />
      </section>

      {/* Networking Area */}
      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="section-title">Networking Lounge</h2>
            <p className="section-subtitle">Connect with fellow attendees and industry professionals</p>
          </div>
          <NetworkingArea attendees={attendees} />
        </div>
      </section>

      {/* Floating Chat Button */}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-brand-600 hover:bg-brand-700 rounded-full shadow-2xl shadow-brand-600/40 flex items-center justify-center transition-all duration-200 active:scale-95"
        aria-label="Toggle live chat"
      >
        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center font-bold">3</span>
      </button>

      {/* Live Chat Panel */}
      {isChatOpen && (
        <LiveChatPanel
          messages={chatMessages}
          onClose={() => setIsChatOpen(false)}
        />
      )}
    </div>
  );
}
