# PAP-424 Architect Plan — React Virtual Event Platform

## Phase Scope
Architect-only phase. No product code implemented.

## Current Stack Assessment
- Framework: Next.js 14 App Router (`app/`)
- UI: React 18 + TypeScript
- Styling: Tailwind CSS with existing `primary` and `accent` tokens
- Current structure: marketing-style single-page homepage assembled from reusable components
- Existing interactive pattern: client-side header with dark mode toggle; no external state or data libraries installed

## Recommended Product Direction
Re-theme the current SwiftTask marketing site into a polished single-event virtual conference experience with responsive dashboard-style sections on the homepage. Keep the existing Next.js/Tailwind stack and avoid adding dependencies unless implementation reveals a hard need.

## Planned Information Architecture
### Primary page
- `/` — virtual event landing experience composed of:
  1. Hero / event overview
  2. Registration summary strip
  3. Agenda and session cards
  4. Featured speaker profiles
  5. Live chat panel
  6. Networking area
  7. Closing CTA / event support footer

### Optional secondary anchors (same page)
- `#agenda`
- `#speakers`
- `#chat`
- `#networking`
- `#registration`

### Metadata refresh
- Update layout metadata, title, description, and social tags to reflect the event platform instead of SwiftTask.

## Planned Component Map
### Layout-level updates
- `components/Header.tsx`
  - Replace current product nav with event anchors
  - Keep dark mode toggle
  - Add prominent CTA like “Join Now” or “View Agenda”
- `components/Footer.tsx`
  - Rework footer copy for event help, code of conduct, FAQ, and contact/support

### New homepage sections/components
- `components/EventHeroSection.tsx`
  - Event branding, date/time, attendee count, primary CTA, secondary CTA
  - Visual status chips (Live now / Multi-track / Global streaming)
- `components/RegistrationSummary.tsx`
  - Ticket type, check-in status, timezone, saved sessions, networking matches
  - Compact summary cards for quick scan on mobile
- `components/AgendaSection.tsx`
  - Section wrapper for agenda overview
- `components/SessionCard.tsx`
  - Reusable card for each session with title, track, speaker, time, duration, capacity/live badge, CTA
  - Hover emphasis and optional “saved” state
- `components/SpeakerSection.tsx`
  - Grid of featured speakers
- `components/SpeakerCard.tsx`
  - Headshot placeholder, role, company, expertise tags, short bio, session link
- `components/LiveChatPanel.tsx`
  - Client component with seeded mock messages and composer UI
  - Local-only interactions (append message in state; no backend dependency)
- `components/NetworkingSection.tsx`
  - Split layout for attendee matches, topic tags, and quick meetup CTA
- `components/NetworkingCard.tsx`
  - Suggested contact card with role, interests, availability, match reason
- `components/EventStatsBar.tsx` or reuse current stats section
  - Replace product metrics with event-specific metrics (attendees, countries, live sessions, sponsor lounges)

## Planned Data / Type Layer
### New typed models in `types/index.ts`
Add interfaces for:
- `EventSession`
- `SpeakerProfile`
- `ChatMessage`
- `NetworkingMatch`
- `RegistrationSummary`
- `EventStat`

### New data source file
- `lib/event-data.ts`
  - Export typed mock data arrays/objects for sessions, speakers, chat messages, networking matches, and registration summary
  - Keep all content centralized to simplify later visual iteration

## Interaction Plan
- Use server components for static content sections
- Use client components only where interaction is real:
  - header mobile menu / dark mode (already client)
  - live chat input + message append
  - optional “save session” toggles
  - optional networking filter chips
- Keep interactions local-state only for this ticket unless downstream requirements introduce persistence

## Visual / UX Direction
- Shift from app-download marketing tone to premium conference dashboard aesthetic
- Keep Tailwind theme tokens but use more layered surfaces:
  - glassy panels
  - gradient spotlights
  - subtle borders and shadows
  - dense but readable card layouts
- Responsive behavior:
  - mobile: stacked cards, chat below agenda, compact summary tiles
  - tablet: two-column content blocks
  - desktop: dashboard composition with agenda/chat/networking side-by-side where appropriate

## API / Backend Plan
No true backend is required for the initial implementation.

### Planned API stance
- Phase implementation should use in-repo mock data only
- Live chat should be simulated in client state, not connected to a server
- If the Grunt wants clean future extension points, optional route handlers can be deferred until needed rather than added prematurely

## Suggested Implementation Sequence for Grunt
1. Update metadata and global copy direction from SwiftTask to event branding
2. Create new event-specific typed data in `lib/event-data.ts`
3. Extend `types/index.ts` with event platform interfaces
4. Replace homepage composition in `app/page.tsx` with event-oriented sections
5. Rework header/footer navigation and CTA copy
6. Build agenda/session components
7. Build speaker components
8. Build registration summary section
9. Build live chat mock interaction
10. Build networking section and final responsive polish
11. Run build/lint checks and fix layout regressions

## Risks / Notes
- README describes pages that do not currently exist; implementation should rely on actual filesystem, not README assumptions
- `next lint` may depend on local Next.js behavior/config; validate before treating lint as authoritative
- No image assets are present, so implementation should use gradients, initials, or emoji/avatar placeholders unless new assets are explicitly introduced
- Keep dependency footprint minimal to avoid unnecessary package churn in a design-heavy ticket

## Handoff Notes for Next Role
- Prefer a single polished homepage rather than inventing multiple incomplete subpages
- Preserve existing Tailwind token system and dark mode behavior
- Prioritize component reusability: `SessionCard`, `SpeakerCard`, and `NetworkingCard` should be data-driven
- Keep mock content realistic and event-specific so the UI feels production-like without backend work
