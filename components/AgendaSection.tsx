'use client';

import { useState } from 'react';
import { AgendaDay, AgendaItem } from '@/types';
import { Clock, MapPin, Users, ChevronDown, ChevronUp, Play } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AgendaSectionProps {
  days: AgendaDay[];
}

export function AgendaSection({ days }: AgendaSectionProps) {
  const [activeDay, setActiveDay] = useState(0);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const currentDay = days[activeDay];

  return (
    <div>
      {/* Day Tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
        {days.map((day, index) => (
          <button
            key={day.date}
            onClick={() => setActiveDay(index)}
            className={cn(
              'flex-shrink-0 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200',
              activeDay === index
                ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/30'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200 border border-gray-700'
            )}
          >
            <span className="block">{day.label}</span>
            <span className="block text-xs font-normal opacity-75 mt-0.5">{day.date}</span>
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-16 top-0 bottom-0 w-px bg-gray-800 hidden sm:block" />
        <div className="space-y-4">
          {currentDay.items.map((item) => (
            <AgendaItemRow
              key={item.id}
              item={item}
              isExpanded={expandedItem === item.id}
              onToggle={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AgendaItemRow({
  item,
  isExpanded,
  onToggle,
}: {
  item: AgendaItem;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const typeStyles: Record<string, string> = {
    keynote: 'border-brand-700 bg-brand-900/20',
    session: 'border-gray-800 bg-gray-900',
    break: 'border-gray-800/50 bg-gray-900/50',
    workshop: 'border-amber-800/50 bg-amber-900/10',
    panel: 'border-purple-800/50 bg-purple-900/10',
  };

  const typeBadge: Record<string, string> = {
    keynote: 'bg-brand-900/50 text-brand-300 border border-brand-800',
    session: 'bg-gray-800 text-gray-400',
    break: 'bg-gray-800/50 text-gray-500',
    workshop: 'bg-amber-900/50 text-amber-300 border border-amber-800',
    panel: 'bg-purple-900/50 text-purple-300 border border-purple-800',
  };

  return (
    <div className={cn('flex gap-4 sm:gap-6', item.type === 'break' && 'opacity-60')}>
      {/* Time */}
      <div className="w-16 flex-shrink-0 text-right hidden sm:block">
        <span className="text-gray-500 text-sm font-medium">{item.time}</span>
      </div>

      {/* Dot */}
      <div className="hidden sm:flex flex-col items-center">
        <div
          className={cn(
            'w-3 h-3 rounded-full mt-1.5 flex-shrink-0 z-10',
            item.type === 'keynote' ? 'bg-brand-500' : item.type === 'break' ? 'bg-gray-700' : 'bg-gray-600'
          )}
        />
      </div>

      {/* Content */}
      <div
        className={cn(
          'flex-1 border rounded-xl p-4 cursor-pointer transition-all duration-200',
          typeStyles[item.type] || 'border-gray-800 bg-gray-900',
          !isExpanded && 'hover:border-gray-700'
        )}
        onClick={onToggle}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-gray-500 text-xs sm:hidden">{item.time}</span>
              <span className={cn('badge text-xs', typeBadge[item.type] || 'bg-gray-800 text-gray-400')}>
                {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
              </span>
              {item.isLive && (
                <span className="live-indicator">
                  <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                  LIVE
                </span>
              )}
            </div>
            <h3 className={cn(
              'font-semibold leading-tight',
              item.type === 'break' ? 'text-gray-500' : 'text-white'
            )}>
              {item.title}
            </h3>
            {item.speaker && (
              <p className="text-gray-400 text-sm mt-1">{item.speaker}</p>
            )}
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {item.type !== 'break' && (
              <button className="w-8 h-8 bg-brand-600/20 hover:bg-brand-600/40 rounded-lg flex items-center justify-center text-brand-400 transition-all">
                <Play className="w-4 h-4" />
              </button>
            )}
            {item.description && (
              isExpanded ? <ChevronUp className="w-4 h-4 text-gray-500" /> : <ChevronDown className="w-4 h-4 text-gray-500" />
            )}
          </div>
        </div>

        {/* Expanded Details */}
        {isExpanded && item.description && (
          <div className="mt-4 pt-4 border-t border-gray-800/50 animate-fade-in">
            <p className="text-gray-400 text-sm leading-relaxed mb-3">{item.description}</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              {item.duration && (
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{item.duration} min</span>
                </div>
              )}
              {item.room && (
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{item.room}</span>
                </div>
              )}
              {item.attendeeCount && (
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{item.attendeeCount.toLocaleString()} registered</span>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
