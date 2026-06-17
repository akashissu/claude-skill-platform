'use client';

import { useState } from 'react';
import { AgendaPanel } from '@/components/AgendaPanel';
import { agendaItems } from '@/lib/data';
import { Calendar, Download, Bell } from 'lucide-react';

const days = [
  { id: 'day1', label: 'Day 1', date: 'June 12, 2024', theme: 'AI & The Future' },
  { id: 'day2', label: 'Day 2', date: 'June 13, 2024', theme: 'Building at Scale' },
  { id: 'day3', label: 'Day 3', date: 'June 14, 2024', theme: 'Security & Beyond' },
];

export default function SchedulePage() {
  const [activeDay, setActiveDay] = useState('day1');
  const [savedSessions, setSavedSessions] = useState<string[]>([]);

  const filteredItems = agendaItems.filter((item) => item.dayId === activeDay);

  const toggleSave = (sessionId: string) => {
    setSavedSessions((prev) =>
      prev.includes(sessionId) ? prev.filter((id) => id !== sessionId) : [...prev, sessionId]
    );
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Full Schedule</h1>
            <p className="text-gray-400">Plan your TechSummit 2024 experience</p>
          </div>
          <div className="flex gap-3">
            <button className="btn-secondary flex items-center gap-2 text-sm">
              <Download className="w-4 h-4" />
              Export .ics
            </button>
            <button className="btn-primary flex items-center gap-2 text-sm">
              <Bell className="w-4 h-4" />
              Set Reminders
            </button>
          </div>
        </div>

        {/* Day Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {days.map((day) => (
            <button
              key={day.id}
              onClick={() => setActiveDay(day.id)}
              className={`p-5 rounded-2xl border text-left transition-all duration-200 ${
                activeDay === day.id
                  ? 'bg-brand-600/20 border-brand-500 shadow-lg shadow-brand-500/10'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <Calendar className={`w-5 h-5 ${activeDay === day.id ? 'text-brand-400' : 'text-gray-500'}`} />
                <span className={`font-bold text-lg ${activeDay === day.id ? 'text-white' : 'text-gray-300'}`}>
                  {day.label}
                </span>
              </div>
              <p className={`text-sm ${activeDay === day.id ? 'text-brand-300' : 'text-gray-500'}`}>{day.date}</p>
              <p className={`text-sm font-medium mt-1 ${activeDay === day.id ? 'text-gray-200' : 'text-gray-400'}`}>
                {day.theme}
              </p>
            </button>
          ))}
        </div>

        {/* Saved Sessions Banner */}
        {savedSessions.length > 0 && (
          <div className="bg-brand-900/40 border border-brand-700/50 rounded-xl p-4 mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-brand-400" />
              <span className="text-brand-300 text-sm">
                <span className="font-semibold">{savedSessions.length}</span> session{savedSessions.length !== 1 ? 's' : ''} saved to your schedule
              </span>
            </div>
            <button
              onClick={() => setSavedSessions([])}
              className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Agenda */}
        <AgendaPanel
          items={filteredItems}
          savedSessions={savedSessions}
          onToggleSave={toggleSave}
        />
      </div>
    </div>
  );
}
