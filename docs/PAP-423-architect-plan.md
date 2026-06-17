# PAP-423 — Architect Plan

## Goal
Transform the current SwiftTask marketing site into a polished, interactive, responsive React/Next.js virtual event platform experience. This phase defines implementation only; no app code changes are included here.

## Current Stack Assessment
- **Framework:** Next.js 14 App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS with reusable utility/component classes in `app/globals.css`
- **Existing patterns:** Section-based homepage, sticky header, dark mode toggle, card-based content, typed content models in `types/index.ts`
- **Constraint:** No data/backend stack exists today, so interactivity should be built with local typed mock data and client-side state only unless scope expands later.

## Product Direction
Build a single polished event experience centered on one flagship virtual conference landing page, with supporting detail pages or section anchors as needed. The UI should feel like a premium event hub rather than a generic SaaS page.

Suggested event concept for implementation consistency:
- **Brand:** `Pulse Summit 2026`
- **Theme:** design + engineering + product leadership virtual conference
- **Primary CTA:** Register / Save Seat / Join Networking

## Recommended Information Architecture
### Primary routes
1. `/` — Event homepage / overview
   - hero
   - featured session cards
   - event agenda preview
   - speaker spotlight strip
   - registration summary CTA
2. `/agenda` — Full agenda view
   - timeline by day/track
   - filters/tabs for track or format
3. `/speakers` — Speaker directory
   - speaker profile cards
   - optional featured keynote section
4. `/networking` — Networking area page
   - topic lounges
   - attendee match cards
   - community guidelines / how it works

### Header nav update
Replace current SaaS nav with:
- Overview
- Agenda
- Speakers
- Networking
- Register

`Register` should anchor to the registration summary/CTA section on the homepage or route to `/` with hash.

## Component Plan
### New/repurposed layout components
- **Header**
  - update branding from SwiftTask to event brand
  - update nav items to event IA
  - preserve dark mode toggle and sticky behavior
- **Footer**
  - replace app download/footer links with event resources, FAQ, code of conduct, contact

### Homepage sections/components
1. **EventHeroSection**
   - event title, date, virtual badge, concise value prop
   - CTAs: `Register Now`, `Explore Agenda`
   - compact event stats: attendees, speakers, tracks, countries
   - visual background accents using current gradient system

2. **SessionCardsSection**
   - grid of 4–6 featured sessions
   - each card: title, time, track, format, speaker, difficulty/tag, save/bookmark affordance (client-state only)
   - interaction: hover elevation and optional featured badge

3. **SpeakerProfilesSection**
   - spotlight speaker cards with avatar initials/gradients
   - fields: name, role, company, short bio, topic focus, social-style chips

4. **AgendaPreviewSection**
   - timeline or segmented schedule blocks
   - tabs for Day 1 / Day 2 or tracks like Keynotes / Workshops / Panels
   - interaction handled with local state only

5. **LiveChatPanel**
   - client component mockup of active event chat
   - shows message list, online count, topic chips, composer UI (non-persistent)
   - behavior: allow local draft/send to append temporary messages in-memory only

6. **NetworkingAreaSection**
   - lounge cards (e.g. AI Builders, Product Leaders, Startup Founders)
   - attendee match suggestions / roundtable highlights
   - CTA buttons such as `Join Lounge`, `Book 1:1`

7. **RegistrationSummarySection**
   - registration tier/summary card
   - included benefits checklist
   - date/time/timezone reminder
   - CTA panel with urgency copy and trust indicators

## Supporting Page Component Breakdown
### `/agenda`
- `AgendaPageHero`
- `AgendaFilterBar`
- `AgendaTimeline`
- `AgendaSessionRow`

### `/speakers`
- `SpeakersPageHero`
- `SpeakerGrid`
- `SpeakerProfileCard`

### `/networking`
- `NetworkingHero`
- `LoungeGrid`
- `MatchCard`
- `NetworkingTipsCard`

## Data / Types Plan
Extend `types/index.ts` with event-specific interfaces:
- `EventStat`
- `Session`
- `Speaker`
- `AgendaDay`
- `AgendaTrack`
- `ChatMessage`
- `NetworkingLounge`
- `AttendeeMatch`
- `RegistrationBenefit`

Create a single mock data source, recommended path:
- `lib/event-data.ts`

This file should hold structured data arrays for sessions, speakers, agenda, chat seed messages, networking lounges, and registration benefits.

## API / State Strategy
No real external APIs are necessary for this ticket.

Use local React state for lightweight interactions:
- agenda tab switching
- session bookmark toggles
- chat draft/send simulation
- networking lounge highlight/selection

If the implementer wants cleaner composition, client-only state can live inside the interactive sections rather than introducing a global store.

## File-Level Implementation Map for Grunt
### Files likely to update
- `app/page.tsx`
- `app/layout.tsx` (metadata/branding copy)
- `components/Header.tsx`
- `components/Footer.tsx`
- `types/index.ts`
- `README.md` (optional product description refresh if desired after UI completion)

### New pages
- `app/agenda/page.tsx`
- `app/speakers/page.tsx`
- `app/networking/page.tsx`

### New components
- `components/EventHeroSection.tsx`
- `components/SessionCardsSection.tsx`
- `components/SpeakerProfilesSection.tsx`
- `components/AgendaPreviewSection.tsx`
- `components/LiveChatPanel.tsx`
- `components/NetworkingAreaSection.tsx`
- `components/RegistrationSummarySection.tsx`
- optional page-scoped helpers:
  - `components/AgendaTimeline.tsx`
  - `components/SpeakerProfileCard.tsx`
  - `components/LoungeCard.tsx`

### New data module
- `lib/event-data.ts`

## Styling Guidance
- Keep current Tailwind token palette (`primary`, `accent`) and dark mode support
- Lean into glassmorphism/gradient accents already present in the codebase
- Favor consistent card radii/shadows from `.card`
- Use responsive breakpoints already established in existing components
- Maintain strong CTA hierarchy and generous spacing for a premium event feel

## Accessibility / UX Requirements
- Ensure all buttons/links have clear labels
- Preserve contrast in dark mode
- Use semantic section headings
- Make agenda controls keyboard reachable
- Keep mobile layout stacked with readable card density

## Out of Scope for This Ticket Phase
- Real auth/registration flows
- WebSocket/live backend chat
- Calendar sync
- Ticket checkout/payment integration
- Real attendee matching algorithms

## Suggested Implementation Order for Grunt
1. Create event data/types
2. Rebrand header/footer/layout metadata
3. Build homepage event sections
4. Add agenda/speakers/networking pages
5. Wire simple client interactions
6. Run responsive polish pass

## Acceptance Target
The finished app should clearly present:
- session cards
- speaker profiles
- event agenda
- live chat panel
- networking area
- registration summary

It should feel cohesive, interactive, and responsive across mobile and desktop while staying within the current Next.js + Tailwind stack.
