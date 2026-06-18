# SaaS Admin Dashboard

A client-side SaaS admin dashboard built with Next.js 14, React 18, TypeScript, Tailwind CSS, and Recharts. PAP-441 resolves the deployment build failure by documenting the release-ready build configuration and confirming the app now builds with the default Next.js output expected by Vercel.

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

## What was built for PAP-441

PAP-441 addresses the failed deployment described in the Vercel logs:

- production builds now use the default Next.js output directory expected by Vercel
- the release artifact once again includes `.next/routes-manifest.json`
- documentation now captures the deployment symptom, the fix intent, and the verification path for PR/release review
- the existing dashboard functionality from PAP-440 remains the deployable product surface

In the failing build, Next.js compilation and static page generation completed successfully, but Vercel could not find `.next/routes-manifest.json` during final packaging. The implementation commit for PAP-441 restores the default Next.js build output so the platform can package the app correctly.

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
- the Next.js build output is emitted to `.next/`
- `.next/routes-manifest.json` exists after the build
- Vercel is configured to use the default Next.js output directory unless explicitly overridden elsewhere
- the following routes still render correctly:
  - `/`
  - `/dashboard`
  - `/users`
  - `/settings`
  - content routes under `/departments/[slug]`

## Key implementation notes

- KPI, chart, and user data are sourced from static files in `data/`
- settings and theme preferences persist in browser `localStorage`
- shared layout/navigation components live in `components/`
- application routes are composed through the current app-router structure in `app/`
- PAP-441 is a deployment-fix ticket focused on build output compatibility rather than new end-user features

## Important files

- `README.md` — feature overview and deployment-facing setup/run guidance
- `CHANGELOG.md` — ticket-level release notes
- `docs/IMPLEMENTATION_NOTES.md` — deployment and PR handoff summary

## Tickets

- PAP-440 — SaaS Admin Dashboard
- PAP-441 — Build failed fix / restore default Next.js build output for deployment
