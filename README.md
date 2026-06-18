# Cloude Skill Platform

A Next.js catalog experience for PAP-438 that turns the expanded Enterprise Claude Skills Catalog research into a browsable product surface for a project-manager / orchestration platform.

## What was built

This implementation presents the Cloude Skill platform as a commercial control plane for licensed AI skills:

- enterprise positioning for department suites, industry overlays, subscriptions, and skill credits
- a homepage with hero, control-plane framing, catalog stats, pricing context, and source-backed narrative sections
- dedicated pages for:
  - department suites
  - industry overlays
  - pricing and packaging
  - platform features
  - about / research framing
- data-driven catalog rendering sourced from the PAP-438 issue spec
- a source appendix that ties the experience back to the research URLs in the brief

## Product scope covered

The app documents and visualizes:

- 22 department suites parsed from the research brief
- 22 industry overlay suites with paired departments and compliance focus
- subscription packaging tiers from Starter through Regulated / partner plans
- skill-credit bands from simple drafting through high-risk regulated workflows
- activation and governance controls for approvals, auditing, and third-party skill review

## Tech stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS

## Setup

Install dependencies:

```bash
npm install
```

## Run locally

Start the development server:

```bash
npm run dev
```

Then open <http://localhost:3000>.

## Production build

Create a production build:

```bash
npm run build
```

Run the production server:

```bash
npm run start
```

## Key implementation notes

- `lib/catalog.ts` parses the PAP-438 source brief from `.zero-human/ISSUE_SPEC.md` and builds the department catalog at runtime.
- Industry overlays, pricing tiers, credit bands, and source references are modeled as structured data and rendered through reusable UI components.
- The app is intentionally content-heavy and research-driven, optimized for PM / GTM review rather than transactional workflows.

## Project structure

- `app/` — Next.js app router pages
- `components/` — reusable catalog and landing-page sections
- `lib/` — catalog parsing and helper utilities
- `types/` — shared TypeScript types
- `docs/` — handoff and implementation documentation

## Release-readiness checklist

Before automated PR completion or deployment handoff, verify:

- `npm install` succeeds
- `npm run dev` starts without runtime errors
- `npm run build` completes successfully
- primary routes render:
  - `/`
  - `/departments`
  - `/industry-overlays`
  - `/pricing`
  - `/features`
  - `/about`

## Ticket

- PAP-438 — Cloude Skill platform
