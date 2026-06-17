# TechSummit 2024 — Virtual Event Platform

A production-ready virtual event platform built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Features

- 🎯 **Session Cards** — Browse and filter sessions by track, day, and keyword
- 🎤 **Speaker Profiles** — Detailed speaker bios with social links and session info
- 📅 **Event Agenda** — Full 3-day schedule with expandable session details and save functionality
- 💬 **Live Chat Panel** — Real-time chat with emoji reactions and multiple channels
- 🤝 **Networking Area** — Connect with attendees, filter by online status or speakers
- 📝 **Registration Summary** — Multi-step registration with ticket selection and form validation
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- 🌙 **Dark Theme** — Polished dark UI with glassmorphism effects

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Icons**: Lucide React
- **Utilities**: clsx + tailwind-merge

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
│   ├── globals.css          # Global styles + Tailwind directives
│   ├── layout.tsx           # Root layout with Header/Footer
│   ├── page.tsx             # Homepage with hero, sessions, speakers
│   ├── sessions/page.tsx    # All sessions with filtering
│   ├── speakers/page.tsx    # Speaker directory with modal
│   └── schedule/page.tsx    # Full 3-day schedule
├── components/
│   ├── Header.tsx           # Sticky navigation header
│   ├── Footer.tsx           # Site footer with links
│   ├── SessionCard.tsx      # Session display card
│   ├── SpeakerCard.tsx      # Speaker profile card
│   ├── AgendaPanel.tsx      # Agenda timeline component
│   ├── LiveChatPanel.tsx    # Real-time chat interface
│   ├── NetworkingArea.tsx   # Attendee networking grid
│   └── RegistrationSummary.tsx  # Multi-step registration
├── lib/
│   ├── utils.ts             # Utility functions (cn, formatDate, etc.)
│   └── data.ts              # Mock data (sessions, speakers, agenda)
└── types/
    └── index.ts             # All TypeScript type definitions
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, featured sessions, speakers, live chat |
| `/sessions` | All sessions with search and track filtering |
| `/speakers` | Speaker directory with detail modal |
| `/schedule` | Full 3-day agenda with save functionality |

## Design System

The app uses a custom design system built on Tailwind CSS:

- **Colors**: Brand indigo (`brand-*`) + accent orange (`accent-*`)
- **Components**: `.glass-card`, `.btn-primary`, `.btn-secondary`, `.live-badge`, `.tag`
- **Animations**: `fade-in`, `slide-up`, `pulse-slow`
- **Typography**: Inter font family
