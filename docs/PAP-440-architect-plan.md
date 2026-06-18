# PAP-440 Architect Plan — SaaS Admin Dashboard

## Phase scope
Architect-only deliverable. This phase defines the implementation plan for Grunt. No product functionality was implemented in this phase.

## Current repo assessment
- **Current stack in repo:** Next.js 14 App Router, React 18, TypeScript, Tailwind CSS.
- **Ticket-required stack:** Vite, React 18, TypeScript, Tailwind CSS, Recharts.
- **Mismatch:** the current repo is a content-heavy PAP-438 marketing/catalog app and does **not** match the PAP-440 dashboard architecture or routing model.
- **Implication for Grunt:** this is effectively a frontend replatform from Next.js App Router to a Vite SPA with React Router.

## Target product shape
A fully client-side SaaS admin dashboard with:
- persistent sidebar layout
- top bar with theme toggle
- `/dashboard` overview page with 4 KPI cards plus line/bar charts
- `/users` management page with searchable and sortable table
- `/settings` page with profile form and notification toggles
- localStorage persistence for theme and settings
- static mock data only; no backend and no API keys

## Required stack plan
### Keep
- React 18
- TypeScript
- Tailwind CSS

### Replace / add
- Replace **Next.js** app structure with **Vite** app structure
- Add **React Router** for client-side navigation
- Add **Recharts** for chart rendering

### Expected top-level project files after implementation
- `index.html`
- `src/main.tsx`
- `src/App.tsx`
- `src/index.css`
- `vite.config.ts`
- `postcss.config.js`
- `tailwind.config.js`
- `tsconfig.json`
- `package.json`

## Routing plan
### Routes
- `/` → redirect to `/dashboard`
- `/dashboard`
- `/users`
- `/settings`
- `*` → lightweight not-found redirect or fallback panel

### Layout behavior
Use a shared `AppLayout` wrapped around all dashboard routes so the following remain persistent across navigation:
- `Sidebar`
- `TopBar`
- content container

## Component plan
### Layout components
- `src/components/layout/AppLayout.tsx`
- `src/components/layout/Sidebar.tsx`
- `src/components/layout/TopBar.tsx`
- `src/components/layout/ThemeToggle.tsx`

### Dashboard page components
- `src/components/dashboard/StatCard.tsx`
- `src/components/dashboard/LineChartWidget.tsx`
- `src/components/dashboard/BarChartWidget.tsx`
- optional shared `ChartCard.tsx` wrapper if helpful

### Users page components
- `src/components/users/UserTable.tsx`
- `src/components/users/SearchInput.tsx`
- `src/components/users/SortableTableHeader.tsx`
- optional `StatusBadge.tsx`

### Settings page components
- `src/components/settings/SettingsForm.tsx`
- `src/components/settings/NotificationToggle.tsx`
- optional `SectionCard.tsx`

## Page plan
### `src/pages/DashboardPage.tsx`
Render:
- exactly 4 `StatCard` instances
- one line chart card
- one bar chart card
- responsive grid layout that collapses cleanly on smaller screens

### `src/pages/UsersPage.tsx`
Render:
- page heading + short description
- search input filtering by `name` or `email`
- table with columns: `Name`, `Email`, `Role`, `Status`, `Join Date`
- sortable headers on all 5 columns
- at least 20 mock users so AC comfortably exceeds the minimum 10

### `src/pages/SettingsPage.tsx`
Render:
- profile section with fields: `name`, `email`, `avatarUrl`
- save button
- notifications section with 3 toggles:
  - email notifications
  - product updates
  - security alerts
- saved confirmation state can be minimal but visible

## Data plan
### Mock data files
- `src/data/mockKpis.ts`
- `src/data/mockChartData.ts`
- `src/data/mockUsers.ts`

### Suggested types
- `KpiStat`
- `ChartDatum`
- `UserRecord`
- `ProfileSettings`
- `NotificationSettings`
- `AppSettings`

### Data expectations
- KPI file contains exactly 4 dashboard cards
- chart file contains 12 monthly entries so both charts satisfy the “at least 6 data points/bars” criteria
- users file contains 20+ records with stable ids and realistic roles/statuses

## State and persistence plan
### localStorage keys
Use explicit versioned keys to avoid collisions:
- `pap440-theme`
- `pap440-settings`

### Theme persistence
Implement a small theme provider/hook:
- `src/context/ThemeContext.tsx` or `src/hooks/useTheme.ts`
- store `light | dark`
- apply theme class on `document.documentElement`
- initialize from localStorage, fallback to light or system-default

### Settings persistence
Implement helper utilities:
- `src/lib/storage.ts`
- functions for safe read/write with JSON parsing fallback

Settings page should:
- load defaults if localStorage empty
- update form state locally
- persist on Save
- restore values on refresh

## Users table behavior plan
### Search
- case-insensitive filter
- match against `name` and `email`
- run in real time on input change

### Sorting
Maintain state:
- `sortKey`
- `sortDirection`

Supported sort keys:
- `name`
- `email`
- `role`
- `status`
- `joinDate`

Implementation note:
- sort derived array, never mutate source mock data
- parse `joinDate` as comparable date values rather than raw string sort if formatted display differs from ISO source value

## Chart plan
### Recharts usage
- `ResponsiveContainer` for both charts
- `LineChart` for revenue/user growth trend
- `BarChart` for monthly signups/usage
- include `XAxis`, `YAxis`, `Tooltip`, and grid styling
- ensure axis labels remain visible in both themes

### Data suggestion
Use one consistent monthly dataset:
- `month`
- `revenue`
- `signups`
- optional `activeUsers`

This allows both charts to share the same base dataset.

## Styling plan
### Layout
- sidebar fixed on desktop, collapses naturally into top/stacked layout on smaller screens if needed
- main content area padded and max-width constrained
- cards use consistent rounded borders/shadows

### Theme handling
Tailwind should support dark mode via `class` strategy.
Required work:
- set `darkMode: 'class'` in Tailwind config
- define dashboard-friendly neutral palette and accent colors
- verify readable chart text/background contrast in both modes

## File structure plan
```text
src/
  components/
    dashboard/
    layout/
    settings/
    users/
  context/
  data/
  hooks/
  lib/
  pages/
  routes/
  types/
  App.tsx
  main.tsx
  index.css
```

### Suggested route composition
- `src/routes/AppRouter.tsx`
- `App.tsx` mounts providers + router

## Package/dependency plan
### Dependencies Grunt should ensure exist
- `react`
- `react-dom`
- `react-router-dom`
- `recharts`

### Dev dependencies
- `vite`
- `@vitejs/plugin-react`
- `typescript`
- `tailwindcss`
- `postcss`
- `autoprefixer`
- relevant `@types/*`

## Migration plan from current repo
1. Remove the current Next.js-specific app/router structure from active use.
2. Replace scripts in `package.json` with Vite commands.
3. Remove Next-only dependencies and files that would conflict with Vite runtime assumptions.
4. Preserve only reusable Tailwind/PostCSS config if compatible; otherwise simplify and rebuild config cleanly.
5. Rebuild the UI around `src/` SPA structure.

## Implementation sequence for Grunt
1. Convert project scaffold from Next.js to Vite.
2. Add router, Tailwind dark-mode config, and base app shell.
3. Add mock data and shared types.
4. Build `Sidebar`, `TopBar`, and `ThemeToggle`.
5. Build `/dashboard` with 4 KPI cards and 2 charts.
6. Build `/users` with search + reusable sorting behavior.
7. Build `/settings` with form + toggle persistence.
8. Verify localStorage restore behavior.
9. Run `npm install`, `npm run dev`, and `npm run build`.
10. Leave implementation notes for Pedant only if verification reveals edge cases.

## Validation checklist for Pedant
- `npm install` completes
- `npm run dev` serves on Vite default port `5173`
- `npm run build` succeeds and emits `dist/`
- `/dashboard` shows exactly 4 KPI cards
- line chart has at least 6 points and visible axes
- bar chart has at least 6 bars and visible axes
- `/users` table has required columns and 10+ rows
- search filters live by name/email
- every column sorts ascending/descending
- `/settings` restores saved profile + toggle values after reload
- sidebar visible on all routes
- top bar visible on all routes
- theme toggle persists across reloads
- navigation uses client-side routing without full refresh

## Risks / notes
- Biggest scope item is the **stack migration**, not the UI itself.
- Avoid overengineering global state; context + local component state is enough.
- Do not add a backend, API routes, or environment-variable requirements.
- `.env.example` is not required unless Grunt introduces optional env-driven behavior, which should be avoided.

## Handoff summary for Grunt
Build PAP-440 as a clean Vite SPA, not as an extension of the existing Next.js page model. Prioritize acceptance-criteria correctness over reuse of the current PAP-438 catalog code.

ARCHITECT_DONE: plan ready for Grunt.
