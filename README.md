# TechSummit 2024 — Virtual Event Platform

A production-ready virtual event platform built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Features

- **Session Cards** — Browse 50+ sessions with filtering by track, search, and grid/list view toggle
- **Speaker Profiles** — Detailed speaker cards with bios, topics, and social links
- **Event Agenda** — Multi-day agenda with expandable session details and live indicators
- **Live Chat Panel** — Real-time chat with reactions, Q&A tab, and message history
- **Networking Area** — Connect with attendees, view online status, and join video rooms
- **Registration Summary** — Multi-step registration form with success state
- **Responsive Design** — Fully responsive across mobile, tablet, and desktop
- **Dark Theme** — Polished dark UI with brand colors and smooth animations

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Utilities**: clsx, tailwind-merge

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles with Tailwind directives
│   ├── layout.tsx           # Root layout with Header and Footer
│   ├── page.tsx             # Homepage with all sections
│   ├── sessions/
│   │   └── page.tsx         # Sessions listing with filters
│   ├── speakers/
│   │   └── page.tsx         # Speakers grid with modal
│   └── networking/
│       └── page.tsx         # Networking lounge with video rooms
├── components/
│   ├── Header.tsx           # Sticky navigation header
│   ├── Footer.tsx           # Site footer
│   ├── SessionCard.tsx      # Session card (grid + list modes)
│   ├── SpeakerCard.tsx      # Speaker profile card
│   ├── AgendaSection.tsx    # Multi-day agenda with timeline
│   ├── LiveChatPanel.tsx    # Floating live chat panel
│   ├── NetworkingArea.tsx   # Attendee networking grid
│   └── RegistrationSummary.tsx  # Registration form
├── lib/
│   ├── utils.ts             # Utility functions
│   └── data.ts              # Mock data
└── types/
    └── index.ts             # TypeScript type definitions
```

## Pages

- `/` — Homepage with hero, featured sessions, speakers, agenda, and networking
- `/sessions` — Full sessions listing with search and track filters
- `/speakers` — Speaker directory with detail modal
- `/networking` — Networking lounge with video rooms and attendee list

## Key Components

### SessionCard
Displays session information in grid or list mode. Features bookmark toggle, live indicator, speaker info, and metadata.

### AgendaSection
Tabbed multi-day agenda with timeline layout. Items expand to show full details including room, duration, and attendee count.

### LiveChatPanel
Floating chat panel with message history, emoji reactions, and Q&A tab. Supports sending new messages.

### NetworkingArea
Searchable attendee grid with online status indicators, interest tags, and connect/message actions.

### RegistrationSummary
Two-step registration form with loading state and success confirmation.
