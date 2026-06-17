import type {
  ChatMessage,
  EventSession,
  EventStat,
  NetworkingMatch,
  RegistrationSummary,
  SpeakerProfile,
} from '@/types';

export const registrationSummary: RegistrationSummary = {
  attendeeName: 'Jordan Lee',
  ticketType: 'All-access digital pass',
  checkInStatus: 'Checked in · Ready to join',
  timezone: 'UTC · Agenda converted automatically',
  savedSessions: 4,
  networkingMatches: 12,
  loungeAccess: '5 sponsor lounges unlocked',
  helpDesk: 'Priority concierge + captioning enabled',
};

export const eventStats: EventStat[] = [
  {
    id: 'attendees',
    value: '8.4K',
    label: 'Attendees online',
    description: 'Leaders from product, engineering, and community teams.',
  },
  {
    id: 'countries',
    value: '42',
    label: 'Countries represented',
    description: 'Every major time zone covered with replay-ready sessions.',
  },
  {
    id: 'tracks',
    value: '6',
    label: 'Live content tracks',
    description: 'Keynotes, workshops, AMAs, product labs, and more.',
  },
  {
    id: 'lounges',
    value: '14',
    label: 'Networking lounges',
    description: 'Themed spaces for mentors, founders, operators, and sponsors.',
  },
];

export const agendaSessions: EventSession[] = [
  {
    id: 'session-1',
    title: 'Opening keynote: Designing memorable digital-first events',
    track: 'Main Stage',
    startTime: '09:00',
    endTime: '09:45',
    duration: '45 min',
    speaker: 'Maya Chen',
    summary:
      'A tactical keynote on experience design, pacing, and attendee energy for distributed audiences.',
    room: 'Aurora Hall',
    tags: ['Keynote', 'Experience'],
    capacity: 'Unlimited',
    attendees: 5120,
    status: 'Live now',
    saved: true,
  },
  {
    id: 'session-2',
    title: 'From breakout rooms to outcomes: facilitation for hybrid teams',
    track: 'Operations',
    startTime: '10:00',
    endTime: '10:40',
    duration: '40 min',
    speaker: 'Rafael Gomez',
    summary:
      'Learn moderator cues, run-of-show templates, and participation loops that keep chat active.',
    room: 'Studio B',
    tags: ['Workshop', 'Moderation'],
    capacity: '1,200 seats',
    attendees: 864,
    status: 'Starting soon',
  },
  {
    id: 'session-3',
    title: 'Sponsor ROI dashboard clinic',
    track: 'Growth',
    startTime: '11:00',
    endTime: '11:30',
    duration: '30 min',
    speaker: 'Nadia Okafor',
    summary:
      'A practical teardown of sponsor reporting, booth engagement signals, and follow-up automation.',
    room: 'Insights Lab',
    tags: ['Analytics', 'Sponsors'],
    capacity: '750 seats',
    attendees: 421,
    status: 'Starting soon',
  },
  {
    id: 'session-4',
    title: 'Community AMA: scaling global networking without losing serendipity',
    track: 'Community',
    startTime: '13:00',
    endTime: '13:50',
    duration: '50 min',
    speaker: 'Elena Brooks',
    summary:
      'An audience-led AMA on AI matchmaking, hallway tracks, and making virtual intros feel human.',
    room: 'Circle Forum',
    tags: ['AMA', 'Community'],
    capacity: '900 seats',
    attendees: 0,
    status: 'On demand',
  },
];

export const speakers: SpeakerProfile[] = [
  {
    id: 'speaker-1',
    name: 'Maya Chen',
    role: 'VP of Experience Design',
    company: 'Northstar Live',
    bio:
      'Maya has produced global launches for B2B and consumer audiences, blending editorial pacing with immersive digital moments.',
    topic: 'Designing keynote moments that keep remote audiences engaged from the first minute.',
    sessionId: 'session-1',
    initials: 'MC',
    color: 'from-violet-500 to-fuchsia-500',
    tags: ['Keynote design', 'Storytelling', 'Audience energy'],
  },
  {
    id: 'speaker-2',
    name: 'Rafael Gomez',
    role: 'Head of Event Operations',
    company: 'Loop Forum',
    bio:
      'Rafael leads multi-track event programs and facilitator training for distributed enterprise teams across EMEA and LATAM.',
    topic: 'Operational systems for breakouts, moderator handoffs, and resilient live programming.',
    sessionId: 'session-2',
    initials: 'RG',
    color: 'from-sky-500 to-cyan-500',
    tags: ['Operations', 'Facilitation', 'Hybrid events'],
  },
  {
    id: 'speaker-3',
    name: 'Nadia Okafor',
    role: 'Director of Partnerships',
    company: 'Signal Stack',
    bio:
      'Nadia helps event teams connect sponsor spend to measurable demand signals without sacrificing attendee trust.',
    topic: 'Turning sponsor booth traffic into actionable reporting and repeatable revenue.',
    sessionId: 'session-3',
    initials: 'NO',
    color: 'from-emerald-500 to-teal-500',
    tags: ['Sponsorships', 'Revenue', 'Analytics'],
  },
  {
    id: 'speaker-4',
    name: 'Elena Brooks',
    role: 'Community Strategist',
    company: 'People Mesh',
    bio:
      'Elena designs global member communities and networking systems that preserve warmth at scale.',
    topic: 'How to build structured, serendipitous networking journeys in virtual spaces.',
    sessionId: 'session-4',
    initials: 'EB',
    color: 'from-amber-500 to-orange-500',
    tags: ['Networking', 'Community', 'Retention'],
  },
];

export const initialChatMessages: ChatMessage[] = [
  {
    id: 'chat-1',
    author: 'Host Team',
    role: 'Moderator',
    time: '08:58',
    message: 'Welcome in! Drop your city in chat and let us know which track you are excited about today.',
    highlighted: true,
  },
  {
    id: 'chat-2',
    author: 'Priya S.',
    role: 'Attendee',
    time: '09:01',
    message: 'Joining from Singapore — very excited for the sponsor ROI clinic later today.',
  },
  {
    id: 'chat-3',
    author: 'Marco T.',
    role: 'Speaker',
    time: '09:03',
    message: 'The facilitation workshop will include templates. I will share them in the resources panel afterward.',
  },
  {
    id: 'chat-4',
    author: 'Amina K.',
    role: 'Attendee',
    time: '09:05',
    message: 'Love the session bookmarking flow. Already built my shortlist for this afternoon.',
  },
];

export const networkingTopics = ['All', 'AI Ops', 'Community', 'Sponsors', 'Product', 'Founder Stories'];

export const networkingMatches: NetworkingMatch[] = [
  {
    id: 'match-1',
    name: 'Haruto Sato',
    role: 'Product Marketing Lead',
    company: 'Cloud Current',
    location: 'Tokyo, Japan',
    availability: 'Available in 25 minutes',
    matchReason: 'You both saved sessions on sponsor analytics and audience segmentation.',
    interests: ['Sponsors', 'Product'],
  },
  {
    id: 'match-2',
    name: 'Lena Foster',
    role: 'Community Builder',
    company: 'Gather Atlas',
    location: 'Austin, USA',
    availability: 'Open for quick intros now',
    matchReason: 'Shared focus on networking programs for scaled virtual communities.',
    interests: ['Community', 'Founder Stories'],
  },
  {
    id: 'match-3',
    name: 'Omar Haddad',
    role: 'AI Experience Consultant',
    company: 'Relay Labs',
    location: 'Dubai, UAE',
    availability: 'Book a 15 min slot this afternoon',
    matchReason: 'Similar agenda choices around AI-powered facilitation and operational tooling.',
    interests: ['AI Ops', 'Product'],
  },
];
