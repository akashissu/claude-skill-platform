'use client';

import { NetworkingArea } from '@/components/NetworkingArea';
import { attendees } from '@/lib/data';
import { Users, MessageCircle, Video, Coffee } from 'lucide-react';

export default function NetworkingPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-white mb-3">Networking Lounge</h1>
          <p className="text-gray-400 text-lg">
            Connect with {attendees.length}+ professionals from around the world
          </p>
        </div>

        {/* Networking Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {[
            {
              icon: MessageCircle,
              title: 'Direct Messages',
              description: 'Send private messages to any attendee',
              color: 'text-brand-400',
              bg: 'bg-brand-900/30',
            },
            {
              icon: Video,
              title: 'Video Rooms',
              description: 'Join or create virtual meeting rooms',
              color: 'text-green-400',
              bg: 'bg-green-900/30',
            },
            {
              icon: Coffee,
              title: 'Speed Networking',
              description: '5-minute 1:1 video chats with random attendees',
              color: 'text-amber-400',
              bg: 'bg-amber-900/30',
            },
            {
              icon: Users,
              title: 'Interest Groups',
              description: 'Join topic-based discussion groups',
              color: 'text-purple-400',
              bg: 'bg-purple-900/30',
            },
          ].map(({ icon: Icon, title, description, color, bg }) => (
            <div key={title} className="card hover:scale-105 transition-transform cursor-pointer">
              <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-4`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <h3 className="text-white font-semibold mb-1">{title}</h3>
              <p className="text-gray-400 text-sm">{description}</p>
            </div>
          ))}
        </div>

        {/* Active Rooms */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Active Video Rooms</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'AI Enthusiasts', participants: 8, topic: 'Discussing GPT-5 implications', maxParticipants: 12 },
              { name: 'Startup Founders', participants: 5, topic: 'Fundraising strategies in 2024', maxParticipants: 10 },
              { name: 'Frontend Devs', participants: 11, topic: 'React vs Vue vs Svelte debate', maxParticipants: 15 },
              { name: 'Cloud Architects', participants: 4, topic: 'Multi-cloud cost optimization', maxParticipants: 10 },
              { name: 'Product Managers', participants: 7, topic: 'Roadmap prioritization frameworks', maxParticipants: 12 },
              { name: 'Open Networking', participants: 3, topic: 'General conversation & introductions', maxParticipants: 20 },
            ].map((room) => (
              <div key={room.name} className="card group cursor-pointer hover:border-brand-700">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white font-semibold">{room.name}</h3>
                    <p className="text-gray-400 text-sm mt-1">{room.topic}</p>
                  </div>
                  <span className="live-indicator">
                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                    LIVE
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Users className="w-4 h-4" />
                    <span>{room.participants}/{room.maxParticipants}</span>
                  </div>
                  <button className="btn-primary py-2 px-4 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    Join Room
                  </button>
                </div>
                <div className="mt-3 bg-gray-800 rounded-full h-1.5">
                  <div
                    className="bg-brand-500 h-1.5 rounded-full transition-all"
                    style={{ width: `${(room.participants / room.maxParticipants) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Attendees */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">Attendees Online Now</h2>
          <NetworkingArea attendees={attendees} />
        </div>
      </div>
    </div>
  );
}
