import Image from 'next/image';
import { Speaker } from '@/types';
import { Twitter, Linkedin, ExternalLink } from 'lucide-react';

interface SpeakerCardProps {
  speaker: Speaker;
}

export function SpeakerCard({ speaker }: SpeakerCardProps) {
  return (
    <div className="card group cursor-pointer hover:border-brand-700 hover:-translate-y-1 transition-all duration-200 hover:shadow-xl hover:shadow-brand-900/20">
      {/* Avatar */}
      <div className="relative w-16 h-16 rounded-2xl overflow-hidden mb-4">
        <Image
          src={speaker.avatar}
          alt={speaker.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Info */}
      <h3 className="text-white font-semibold text-lg leading-tight mb-1 group-hover:text-brand-300 transition-colors">
        {speaker.name}
      </h3>
      <p className="text-brand-400 text-sm font-medium mb-1">{speaker.title}</p>
      <p className="text-gray-500 text-sm mb-3">{speaker.company}</p>

      {/* Topics */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {speaker.topics.slice(0, 2).map((topic) => (
          <span
            key={topic}
            className="badge bg-gray-800 text-gray-400 text-xs"
          >
            {topic}
          </span>
        ))}
        {speaker.topics.length > 2 && (
          <span className="badge bg-gray-800 text-gray-500 text-xs">+{speaker.topics.length - 2}</span>
        )}
      </div>

      {/* Sessions count */}
      <div className="flex items-center justify-between">
        <span className="text-gray-500 text-xs">{speaker.sessionCount} session{speaker.sessionCount !== 1 ? 's' : ''}</span>
        <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          {speaker.twitter && (
            <a
              href={speaker.twitter}
              onClick={(e) => e.stopPropagation()}
              className="text-gray-500 hover:text-sky-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="w-4 h-4" />
            </a>
          )}
          {speaker.linkedin && (
            <a
              href={speaker.linkedin}
              onClick={(e) => e.stopPropagation()}
              className="text-gray-500 hover:text-blue-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
          <ExternalLink className="w-4 h-4 text-gray-500 hover:text-brand-400 transition-colors" />
        </div>
      </div>
    </div>
  );
}
