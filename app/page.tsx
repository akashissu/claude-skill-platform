'use client';

import { useState } from 'react';
import { SessionCard } from '@/components/SessionCard';
import { SpeakerCard } from '@/components/SpeakerCard';
import { AgendaPanel } from '@/components/AgendaPanel';
import { LiveChatPanel } from '@/components/LiveChatPanel';
import { NetworkingArea } from '@/components/NetworkingArea';
import { RegistrationSummary } from '@/components/RegistrationSummary';
import { sessions, speakers, agendaItems, attendees } from '@/lib/data';
import { Calendar, Users, Zap, Globe, ChevronRight, Play } from 'lucide-react';
import Link from 'next/link';

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<'sessions' | 'agenda' | 'networking'>('sessions');
  const [showRegistration, setShowRegistration] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  const featuredSessions = sessions.filter((s) => s.featured);
  const featuredSpeakers = speakers.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-brand-900/20 to-gray-950 pt-20 pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-600/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-accent-500/10 via-transparent to-transparent" />
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
                <span className="text-3xl lg:text-5xl text-gray-300 font-light">2024 Virtual Conference</span>
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl">
                Three days of cutting-edge talks, hands-on workshops, and unparalleled networking with 10,000+ tech professionals from 80+ countries.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10">
                <div className="flex items-center gap-2 text-gray-300">
                  <Calendar className="w-5 h-5 text-brand-400" />
                  <span>June 12–14, 2024</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Users className="w-5 h-5 text-brand-400" />
                  <span>10,000+ Attendees</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Globe className="w-5 h-5 text-brand-400" />
                  <span>80+ Countries</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <Zap className="w-5 h-5 text-brand-400" />
                  <span>48 Sessions</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                {!isRegistered ? (
                  <button
                    onClick={() => setShowRegistration(true)}
                    className="btn-primary text-lg px-8 py-4"
                  >
                    Register Free
                  </button>
                ) : (
                  <div className="flex items-center gap-2 bg-green-500/20 border border-green-500/30 text-green-400 font-semibold px-6 py-3 rounded-xl">
                    <span>✓ You&apos;re Registered!</span>
                  </div>
                )}
                <Link href="/sessions" className="btn-secondary text-lg px-8 py-4 flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Browse Sessions
                </Link>
              </div>
            </div>
            <div className="flex-1 w-full max-w-lg">
              <div className="glass-card p-6 relative">
                <div className="absolute -top-3 -right-3">
                  <span className="live-badge">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                    LIVE
                  </span>
                </div>
                <div className="aspect-video bg-gradient-to-br from-brand-900 to-gray-900 rounded-xl flex items-center justify-center mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-600/30 to-accent-500/20" />
                  <div className="relative text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 cursor-pointer hover:bg-white/30 transition-colors">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                    <p className="text-white font-semibold">The Future of AI in Production</p>
                    <p className="text-gray-400 text-sm">Sarah Chen — Main Stage</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-7 h-7 rounded-full bg-gradient-to-br from-brand-400 to-accent-500 border-2 border-gray-900 flex items-center justify-center text-xs font-bold text-white">
                          {String.fromCharCode(64 + i)}
                        </div>
                      ))}
                    </div>
                    <span className="text-gray-400">2,847 watching</span>
                  </div>
                  <span className="text-brand-400 font-medium">Main Stage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-brand-600/10 border-y border-brand-700/30 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Sessions', value: '48', icon: '🎯' },
              { label: 'Speakers', value: '62', icon: '🎤' },
              { label: 'Workshops', value: '12', icon: '🛠️' },
              { label: 'Sponsors', value: '24', icon: '🏆' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="text-2xl mb-1">{stat.icon}</span>
                <span className="text-3xl font-bold text-white">{stat.value}</span>
                <span className="text-gray-400 text-sm">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Left: Main Content */}
          <div className="flex-1 min-w-0">
            {/* Tab Navigation */}
            <div className="flex gap-1 bg-gray-900 p-1 rounded-xl mb-8 w-fit">
              {(['sessions', 'agenda', 'networking'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-lg font-medium text-sm capitalize transition-all duration-200 ${
                    activeTab === tab
                      ? 'bg-brand-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Sessions Tab */}
            {activeTab === 'sessions' && (
              <div className="animate-fade-in">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="section-title">Featured Sessions</h2>
                    <p className="section-subtitle">Don&apos;t miss these highlighted talks</p>
                  </div>
                  <Link href="/sessions" className="flex items-center gap-1 text-brand-400 hover:text-brand-300 font-medium transition-colors">
                    View All <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className="grid gap-4">
                  {featuredSessions.map((session) => (
                    <SessionCard key={session.id} session={session} />
                  ))}
                </div>
              </div>
            )}

            {/* Agenda Tab */}
            {activeTab === 'agenda' && (
              <div className="animate-fade-in">
                <h2 className="section-title">Event Agenda</h2>
                <p className="section-subtitle">Full schedule for all three days</p>
                <AgendaPanel items={agendaItems} />
              </div>
            )}

            {/* Networking Tab */}
            {activeTab === 'networking' && (
              <div className="animate-fade-in">
                <h2 className="section-title">Networking Lounge</h2>
                <p className="section-subtitle">Connect with fellow attendees</p>
                <NetworkingArea attendees={attendees} />
              </div>
            )}
          </div>

          {/* Right: Chat Panel */}
          <div className="xl:w-80 flex-shrink-0">
            <LiveChatPanel />
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="bg-gray-900/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="section-title">Featured Speakers</h2>
              <p className="section-subtitle">Industry leaders sharing their expertise</p>
            </div>
            <Link href="/speakers" className="flex items-center gap-1 text-brand-400 hover:text-brand-300 font-medium transition-colors">
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

      {/* Registration Modal */}
      {showRegistration && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-lg">
            <RegistrationSummary
              onClose={() => setShowRegistration(false)}
              onRegister={() => {
                setIsRegistered(true);
                setShowRegistration(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
