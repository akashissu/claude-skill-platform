'use client';

import { useState } from 'react';
import { AgendaItem } from '@/types';
import { Clock, MapPin, Bookmark, BookmarkCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AgendaPanelProps {
  items: AgendaItem[];
  savedSessions?: string[];
  onToggleSave?: (id: string) => void;
}

const typeColors: Record<string, string> = {
  keynote: 'bg-accent-500/20 text-accent-400 border-accent-500/30',
  talk: 'bg-brand-500/20 text-brand-300 border-brand-500/30',
  workshop: 'bg-green-500/20 text-green-300 border-green-500/30',
  panel: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  break: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
};

export function AgendaPanel({ items, savedSessions = [], onToggleSave }: AgendaPanelProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const groupedItems = items.reduce<Record<string, AgendaItem[]>>((acc, item) => {
    const key = item.timeSlot;
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});

  const timeSlots = Object.keys(groupedItems).sort();

  return (
    <div className="space-y-2">
      {timeSlots.map((timeSlot) => (
        <div key={timeSlot}>
          {/* Time Slot Header */}
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center gap-1.5 text-brand-400 text-sm font-semibold">
              <Clock className="w-4 h-4" />
              {timeSlot}
            </div>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          {/* Sessions in this slot */}
          <div className="space-y-2 mb-4">
            {groupedItems[timeSlot].map((item) => {
              const isExpanded = expandedItem === item.id;
              const isSaved = savedSessions.includes(item.id);
              const typeColor = typeColors[item.type] || typeColors.talk;

              return (
                <div
                  key={item.id}
                  className={cn(
                    'glass-card overflow-hidden transition-all duration-300',
                    item.type === 'keynote' && 'border-accent-500/20',
                    item.isLive && 'border-red-500/30'
                  )}
                >
                  <div
                    className="p-4 cursor-pointer"
                    onClick={() => setExpandedItem(isExpanded ? null : item.id)}
                  >
                    <div className="flex items-start gap-3">
                      {/* Time indicator */}
                      <div className="flex-shrink-0 w-1 self-stretch rounded-full bg-gradient-to-b from-brand-500 to-brand-700" />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                          {item.isLive && (
                            <span className="live-badge">
                              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                              LIVE
                            </span>
                          )}
                          <span className={cn('text-xs font-medium px-2 py-0.5 rounded-full border capitalize', typeColor)}>
                            {item.type}
                          </span>
                          {item.track && (
                            <span className="text-xs text-gray-500">{item.track}</span>
                          )}
                        </div>

                        <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>

                        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
                          {item.speaker && (
                            <span className="flex items-center gap-1">
                              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-brand-400 to-accent-400 flex items-center justify-center text-xs font-bold text-white">
                                {item.speaker.charAt(0)}
                              </div>
                              {item.speaker}
                            </span>
                          )}
                          {item.room && (
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {item.room}
                            </span>
                          )}
                          <span>{item.duration}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        {onToggleSave && item.type !== 'break' && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onToggleSave(item.id);
                            }}
                            className="text-gray-500 hover:text-brand-400 transition-colors"
                          >
                            {isSaved ? (
                              <BookmarkCheck className="w-4 h-4 text-brand-400" />
                            ) : (
                              <Bookmark className="w-4 h-4" />
                            )}
                          </button>
                        )}
                        {item.description && (
                          <button className="text-gray-500 hover:text-white transition-colors">
                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Description */}
                  {isExpanded && item.description && (
                    <div className="px-4 pb-4 pt-0 border-t border-white/5">
                      <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
