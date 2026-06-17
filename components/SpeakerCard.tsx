import { Speaker } from '@/types';
import { Twitter, Linkedin } from 'lucide-react';

interface SpeakerCardProps {
  speaker: Speaker;
}

export function SpeakerCard({ speaker }: SpeakerCardProps) {
  return (
    <div className="glass-card p-5 hover:border-brand-500/30 transition-all duration-300 group cursor-pointer">
      {/* Avatar */}
      <div className="relative mb-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center text-2xl font-bold text-white">
          {speaker.name.charAt(0)}
        </div>
        {speaker.isKeynote && (
          <div className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
            ★
          </div>
        )}
      </div>

      {/* Info */}
      <h3 className="font-semibold text-white text-base mb-0.5 group-hover:text-brand-300 transition-colors">
        {speaker.name}
      </h3>
      <p className="text-brand-400 text-sm font-medium mb-0.5">{speaker.role}</p>
      <p className="text-gray-500 text-sm mb-3">{speaker.company}</p>

      {/* Topics */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {speaker.topics.slice(0, 2).map((topic) => (
          <span key={topic} className="tag text-xs">{topic}</span>
        ))}
        {speaker.topics.length > 2 && (
          <span className="text-gray-500 text-xs">+{speaker.topics.length - 2}</span>
        )}
      </div>

      {/* Social */}
      <div className="flex gap-2">
        {speaker.twitter && (
          <a
            href={speaker.twitter}
            onClick={(e) => e.stopPropagation()}
            className="w-7 h-7 bg-white/10 hover:bg-brand-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
          >
            <Twitter className="w-3.5 h-3.5" />
          </a>
        )}
        {speaker.linkedin && (
          <a
            href={speaker.linkedin}
            onClick={(e) => e.stopPropagation()}
            className="w-7 h-7 bg-white/10 hover:bg-brand-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </div>
  );
}
