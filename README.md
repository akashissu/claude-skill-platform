# SaaS Admin Dashboard

A client-side SaaS admin dashboard built with Next.js 14, React 18, TypeScript, Tailwind CSS, and Recharts. PAP-442 resolves the Memory E2E build failure by documenting the `MOVIES` export fix in `lib/data.ts` and clarifying how to install, run, and verify the app builds successfully.

## Feature overview

The application delivers a three-route admin dashboard experience:

- `/dashboard` — overview page with four KPI stat cards, a line chart, and a bar chart backed by static mock data
- `/users` — searchable and sortable user management table with role, status, and join-date visibility
- `/settings` — profile editing form and notification preference toggles persisted to `localStorage`

Shared UI across the experience includes:

- persistent `Sidebar` navigation
- persistent `TopBar`
- `ThemeToggle` with persisted light/dark mode preference
- reusable chart, table, and form components for dashboard administration workflows

## What was built for PAP-442

PAP-442 addresses the Memory E2E build failure caused by an unresolved `MOVIES` export from `lib/data.ts`.

This ticket’s implementation restores and exposes the expected movie dataset export so code that imports `MOVIES` can resolve correctly during production compilation.

Specifically, the release-ready behavior for PAP-442 is:

- `lib/data.ts` exports `MOVIES` as a named export
- the existing movie dataset remains available through the existing module surface
- build-time imports that depend on `MOVIES` now resolve successfully
- `npm run build` completes without the previous export-resolution failure

This is a compatibility and release-readiness fix for the Memory E2E path, not a new end-user feature.

## Tech stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Recharts

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

The current project is configured to run on:

- <http://localhost:5173>

## Production build

Create a production build:

```bash
npm run build
```

Run the production server:

```bash
npm run start
```

## Release and verification notes

For deployment or PR review, verify:

- `npm install` succeeds cleanly
- `npm run build` completes successfully
- imports that reference `MOVIES` from `lib/data.ts` resolve without errors
- the movie data helpers remain available to the app after the export fix
- the following routes still render correctly:
  - `/`
  - `/dashboard`
  - `/users`
  - `/settings`
  - content routes under `/departments/[slug]`

## Key implementation notes

- the fix is centered on the module export surface in `lib/data.ts`
- the dataset now exposes `MOVIES` as the expected named export for build-time consumers
- the existing movie data shape and helper access patterns remain intact
- PAP-442 is a build-fix ticket focused on export compatibility for Memory E2E verification

## Important files

- `README.md` — feature overview and build/release-facing setup and verification guidance
- `CHANGELOG.md` — ticket-level release notes
- `docs/IMPLEMENTATION_NOTES.md` — handoff summary for automated PR completion

## Tickets

- PAP-440 — SaaS Admin Dashboard
- PAP-441 — Build failed fix / restore default Next.js build output for deployment
- PAP-442 — Memory E2E — fix `MOVIES` export in `lib/data.ts`
