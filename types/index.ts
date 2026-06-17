export type SessionTrack = 'All' | 'AI & ML' | 'Web Dev' | 'Cloud' | 'Security' | 'DevOps' | 'Product' | 'Leadership';

export type SessionLevel = 'Beginner' | 'Intermediate' | 'Advanced';

export type AgendaItemType = 'keynote' | 'session' | 'break' | 'workshop' | 'panel';

export interface SpeakerSummary {
  id: string;
  name: string;
  title: string;
  avatar: string;
}

export interface Speaker {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  bio: string;
  topics: string[];
  sessionCount: number;
  twitter?: string;
  linkedin?: string;
}

export interface Session {
  id: string;
  title: string;
  description: string;
  speaker: SpeakerSummary;
  track: SessionTrack;
  level?: SessionLevel;
  duration: number;
  time: string;
  attendeeCount: number;
  rating: number;
  isLive: boolean;
  tags: string[];
}

export interface AgendaItem {
  id: string;
  time: string;
  title: string;
  speaker?: string;
  type: AgendaItemType;
  description?: string;
  duration?: number;
  room?: string;
  attendeeCount?: number;
  isLive?: boolean;
}

export interface AgendaDay {
  label: string;
  date: string;
  items: AgendaItem[];
}

export interface ChatUser {
  name: string;
  avatar: string;
  isHost: boolean;
}

export interface ChatMessage {
  id: string;
  user: ChatUser;
  content: string;
  timestamp: string;
  reactions: string[];
  isReaction?: boolean;
}

export interface Attendee {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  location?: string;
  interests: string[];
  isOnline: boolean;
}

export interface RegistrationFormData {
  name: string;
  email: string;
  company: string;
  role: string;
}

export interface EventStats {
  totalAttendees: number;
  countries: number;
  sessions: number;
  speakers: number;
  days: number;
}
