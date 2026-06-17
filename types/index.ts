export type SessionTrack = 'All' | 'AI & ML' | 'Web Dev' | 'DevOps' | 'Security' | 'Cloud' | 'Mobile';

export type SessionType = 'Keynote' | 'Talk' | 'Workshop' | 'Panel';

export type AgendaItemType = 'keynote' | 'talk' | 'workshop' | 'panel' | 'break';

export interface SpeakerRef {
  id: string;
  name: string;
  role: string;
  company: string;
}

export interface Session {
  id: string;
  title: string;
  description: string;
  speaker: SpeakerRef;
  track: SessionTrack;
  type: SessionType;
  time: string;
  duration: string;
  day: string;
  dayId: string;
  room: string;
  attendeeCount: number;
  isLive: boolean;
  featured: boolean;
  tags: string[];
}

export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  topics: string[];
  sessions: string[];
  isKeynote: boolean;
  twitter?: string;
  linkedin?: string;
  website?: string;
}

export interface AgendaItem {
  id: string;
  title: string;
  type: AgendaItemType;
  timeSlot: string;
  duration: string;
  room: string;
  speaker?: string;
  track?: string;
  dayId: string;
  isLive?: boolean;
  description?: string;
}

export interface Attendee {
  id: string;
  name: string;
  role: string;
  company: string;
  country: string;
  interests: string[];
  isOnline: boolean;
  isSpeaker: boolean;
}

export interface ChatMessage {
  id: string;
  user: string;
  message: string;
  timestamp: string;
  isOwn: boolean;
  avatar: string;
}

export interface RegistrationData {
  name: string;
  email: string;
  company: string;
  country: string;
  role: string;
  ticketType: 'free' | 'pro' | 'vip';
}

export interface TicketType {
  id: 'free' | 'pro' | 'vip';
  label: string;
  price: number;
  features: string[];
}

export interface NavLink {
  href: string;
  label: string;
}
