# SaaS Admin Dashboard

A client-side SaaS admin dashboard for PAP-440 built with React 18, TypeScript, Tailwind CSS, Recharts, and a persistent application shell. The implementation delivers an admin-facing dashboard experience with KPI reporting, user management, settings persistence, and light/dark theme support.

## What was built

This ticket implements a three-route admin dashboard experience:

- `/dashboard` — overview page with four KPI stat cards, a line chart, and a bar chart backed by static mock data
- `/users` — searchable and sortable user management table with role, status, and join-date visibility
- `/settings` — profile editing form and notification preference toggles persisted to `localStorage`

Shared UI delivered across the app includes:

- persistent `Sidebar` navigation
- persistent `TopBar`
- `ThemeToggle` with persisted light/dark mode preference
- reusable chart, table, and form components for dashboard administration workflows

## Product coverage for PAP-440

The current implementation covers the ticket acceptance criteria by providing:

- exactly 4 KPI stat cards on the dashboard
- chart visualizations rendered with Recharts using static monthly mock data
- a user table populated with multi-row mock admin/user records
- client-side text filtering by user name and email
- ascending/descending sorting on all required table columns
- profile and notification settings saved to and restored from `localStorage`
- route-to-route navigation inside the shared app shell without requiring backend services

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

## Key implementation notes

- KPI, chart, and user data are sourced from static files in `data/`
- settings and theme preferences persist in browser `localStorage`
- shared layout/navigation components live in `components/`
- application routes are composed through the current app-router structure in `app/`

## Important files

- `app/` — route structure and page composition
- `components/` — shared dashboard UI components
- `data/` — static mock KPI, chart, and user datasets
- `docs/IMPLEMENTATION_NOTES.md` — release handoff summary for deployment/PR review

## Release-readiness checklist

Before automated PR completion or deployment handoff, verify:

- `npm install` succeeds
- `npm run dev` starts without runtime errors on port `5173`
- `npm run build` completes successfully
- the following routes render correctly:
  - `/dashboard`
  - `/users`
  - `/settings`
- theme toggling and settings persistence behave correctly after reload
- user search and column sorting behave as expected in the rendered table

## Ticket

- PAP-440 — SaaS Admin Dashboard
