// Navigation
export interface NavItem {
  label: string;
  href: string;
}

// Event platform types
export interface EventSession {
  id: string;
  title: string;
  track: string;
  startTime: string;
  endTime: string;
  duration: string;
  speaker: string;
  summary: string;
  room: string;
  tags: string[];
  capacity: string;
  attendees: number;
  status: 'Live now' | 'Starting soon' | 'On demand';
  saved?: boolean;
}

export interface SpeakerProfile {
  id: string;
  name: string;
  role: string;
  company: string;
  bio: string;
  topic: string;
  sessionId: string;
  initials: string;
  color: string;
  tags: string[];
}

export interface ChatMessage {
  id: string;
  author: string;
  role: string;
  time: string;
  message: string;
  highlighted?: boolean;
}

export interface NetworkingMatch {
  id: string;
  name: string;
  role: string;
  company: string;
  location: string;
  availability: string;
  matchReason: string;
  interests: string[];
}

export interface RegistrationSummary {
  attendeeName: string;
  ticketType: string;
  checkInStatus: string;
  timezone: string;
  savedSessions: number;
  networkingMatches: number;
  loungeAccess: string;
  helpDesk: string;
}

export interface EventStat {
  id: string;
  value: string;
  label: string;
  description: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
  avatarColor: string;
}

export interface Stat {
  id: string;
  value: string;
  label: string;
  description: string;
  icon: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  color: string;
}

export interface DownloadButtonProps {
  platform: 'ios' | 'android';
  href: string;
}

export interface AppStoreInfo {
  platform: 'ios' | 'android';
  rating: number;
  reviews: string;
  url: string;
}

export type ClassValue = string | undefined | null | false | ClassValue[];
export type Theme = 'light' | 'dark' | 'system';
export type Platform = 'ios' | 'android' | 'web' | 'desktop';
