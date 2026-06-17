# PAP-422 — Architect Plan

## Objective
Transform the current SwiftTask marketing site into a polished, responsive **virtual event platform** experience. This phase is planning only; no production UI code should be changed yet.

## Current Stack Inspection
- **Framework:** Next.js 14 App Router
- **UI:** React 18 + TypeScript
- **Styling:** Tailwind CSS with reusable utility classes in `app/globals.css`
- **Current shape:** multi-page marketing site with shared `Header` / `Footer` and section-based homepage
- **Existing strengths to reuse:** gradient visuals, glass/card styles, dark mode toggle, responsive grid patterns

## Recommended Delivery Shape
Build the ticket as a **single primary event experience on `/`** using composed sections and lightweight client-side interactivity. Reuse the existing shell, but retheme the product from "SwiftTask" to an event brand/context.

This is the lowest-risk path because it:
1. Fits the current section-based homepage architecture
2. Avoids introducing routing complexity for a mostly presentational ticket
3. Keeps the experience responsive and easy to QA in one place

## Planned Information Architecture
### Primary page
- `/` → virtual event landing + in-event experience

### Section order
1. **Event hero / welcome**
2. **Registration summary**
3. **Agenda timeline**
4. **Featured sessions grid**
5. **Speaker profiles**
6. **Live chat panel**
7. **Networking lounge**
8. **Closing CTA / footer**

## Planned Components
### New components
- `components/EventHero.tsx`
  - Event title, date, format badge, headline CTA, attendee stats
- `components/RegistrationSummary.tsx`
  - Ticket tier, attendee name, join status, saved sessions count, quick actions
- `components/AgendaSection.tsx`
  - Day/time timeline with active state styling
- `components/SessionCard.tsx`
  - Session title, speaker, time, track, status, CTA
- `components/SessionsSection.tsx`
  - Filterable grid for keynote/workshop/networking sessions
- `components/SpeakersSection.tsx`
  - Speaker cards with role, topic, company, social-style badges
- `components/LiveChatPanel.tsx`
  - Mock live chat feed, online count, pinned topic, message composer shell
- `components/NetworkingSection.tsx`
  - Small-group rooms, matchmaking cards, topic chips, availability status
- `components/SectionHeader.tsx`
  - Shared heading/subheading pattern for consistency

### Existing components likely to replace or retire from homepage composition
- `HeroSection`
- `StatsSection`
- `FeaturesSection`
- `TestimonialsSection`
- `AppDownloadSection`

### Existing shared shell components to update
- `Header`
  - Rename nav items to event anchors/sections
  - Update logo/brand text to event identity
  - Replace pricing CTA with “Register” / “Join event” action
- `Footer`
  - Update copy to event-focused resources/support/community links

## Planned Types and Data Model
### Extend `types/index.ts` or split into event-specific types
Add types for:
- `EventStat`
- `AgendaItem`
- `Session`
- `Speaker`
- `ChatMessage`
- `NetworkingRoom`
- `RegistrationSummary`

### Add structured seed data
Create `lib/event-data.ts` with typed mock data for:
- event summary
- attendee registration summary
- agenda entries
- session catalog
- speakers
- live chat messages
- networking rooms

This keeps UI components dumb/presentational and makes later copy/design iteration easier.

## Interaction Plan
Use **light client-side state only where it improves polish**:
- selected agenda day or track filter
- session category filter
- active networking topic chip
- optional faux chat composer input state

No real-time backend or persistence is required for this ticket unless scope expands.

## Styling / UX Direction
- Continue using current Tailwind design language: gradients, rounded cards, subtle shadows, dark mode
- Shift visual tone from app marketing to **premium digital conference**
- Use a **dashboard-like layout** on desktop:
  - main content column for agenda/sessions/speakers
  - side rail or summary cards for registration/chat/networking highlights where helpful
- Mobile behavior:
  - stacked sections
  - horizontally scrollable pills/filters if needed
  - chat/networking cards collapse naturally into vertical blocks

## Page Composition Plan
### 1. Event Hero
Purpose:
- establish theme and event identity immediately
- communicate date, attendee count, streaming status, CTA

Content:
- event name and tagline
- date/time/location format (virtual)
- CTA buttons: `Join Main Stage`, `View Agenda`
- small live metrics strip

### 2. Registration Summary
Purpose:
- satisfy the ticket requirement for registration summary
- give the page an “in-product” feel instead of pure marketing

Content:
- attendee name/avatar initials
- pass tier
- sessions bookmarked
- networking credits or meetings scheduled
- confirmation number/status pill

### 3. Agenda
Purpose:
- provide structured schedule visibility

Content:
- morning/afternoon groupings or day tabs
- session blocks with start/end time, track label, live/upcoming status
- highlight the current or featured session visually

### 4. Session Cards
Purpose:
- showcase featured sessions as discoverable content cards

Content:
- title
- speaker
- duration
- track
- capacity/status badge
- short summary
- CTA such as `Add to Schedule` / `Watch Now`

### 5. Speaker Profiles
Purpose:
- establish credibility and depth

Content:
- headshot placeholder/avatar
- name, role, company
- expertise tags
- short bio
- linked featured session reference

### 6. Live Chat Panel
Purpose:
- make the experience feel active and interactive

Content:
- channel header and participant count
- pinned discussion prompt
- sample rolling messages
- non-functional composer shell for polish

### 7. Networking Area
Purpose:
- satisfy networking requirement with clear affordances

Content:
- topic-based rooms
- attendee match cards
- “open seats” / availability indicators
- CTA buttons like `Join Room`, `Book Intro`

## Metadata / Content Updates
Planned updates:
- `app/layout.tsx` metadata changed from SwiftTask/productivity language to event platform language
- `README.md` should remain untouched in this phase; implementation may optionally refresh it later if requested

## API / Backend Plan
For this ticket, use **no external APIs**.
Implementation should rely on local mock data only.

If realism is desired, structure data so future integration is easy:
- agenda data can later come from CMS/API
- chat messages can later be swapped for websocket-backed data
- registration summary can later be sourced from authenticated attendee state

## Grunt Handoff: Concrete Build Steps
1. Update homepage composition in `app/page.tsx` to the new event sections
2. Add event-focused types and seed data
3. Create the new event components listed above
4. Retheme `Header` and `Footer` for event navigation/copy
5. Update `app/layout.tsx` metadata/title/description
6. Reuse existing utility classes; add only minimal new utilities if needed
7. Validate responsive behavior at mobile, tablet, and desktop widths
8. Run `npm run build` (and lint if available in environment) during implementation/testing phases

## Pedant Handoff: Expected QA Focus
- all required sections present:
  - session cards
  - speaker profiles
  - event agenda
  - live chat panel
  - networking area
  - registration summary
- responsive layout works cleanly at small and large breakpoints
- dark mode remains coherent
- no broken imports after homepage refactor
- metadata no longer references SwiftTask/productivity copy

## Scope Guardrails
- Do **not** add backend services
- Do **not** add authentication flows
- Do **not** introduce complex state libraries
- Do **not** create PRs or push branches from non-scribe roles

## Artifact Produced In This Phase
- `docs/PAP-422-architect-plan.md` (this plan)
