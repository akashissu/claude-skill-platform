# PAP-441 Architect Plan — Vercel Build Failure

## Phase scope
Architect-only deliverable. This phase documents the concrete implementation plan for Grunt. No product code was changed in this phase.

## Executive diagnosis
The application build itself is healthy. The Vercel deployment fails **after** `next build` completes because the repo config sends Next.js output to `dist/`, while the Vercel Next runtime is looking for the default `.next/routes-manifest.json`.

### Confirmed evidence
- `next.config.js` contains `distDir: 'dist'`.
- Local build succeeds with `npm run build`.
- Build artifacts are written to `dist/`, including `dist/routes-manifest.json`.
- There is **no** `.next/` directory after the build.
- Vercel error: `The file "/vercel/path1/.next/routes-manifest.json" couldn't be found.`

## Current stack assessment
- **Framework:** Next.js 14.2.5 App Router
- **UI:** React 18
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Charts:** Recharts
- **Persistence:** browser `localStorage`
- **Data model:** static mock data imports; no backend/API integration

## Product surface confirmed in repo
### Pages/routes already implemented
- `/` → redirects to `/dashboard`
- `/dashboard`
- `/users`
- `/settings`
- additional catalog/marketing routes from earlier ticket work remain present:
  - `/about`
  - `/features`
  - `/pricing`
  - `/departments`
  - `/departments/[slug]`
  - `/industry-overlays`

### Shared dashboard shell/components already present
- `components/AppShell.tsx`
- `components/Sidebar.tsx`
- `components/TopBar.tsx`
- `components/ThemeProvider.tsx`
- `components/ThemeToggle.tsx`

### Feature components already present
- Dashboard: `StatCard`, `LineChartWidget`, `BarChartWidget`
- Users: `UserTable`, `SearchInput`, `SortableTableHeader`
- Settings: `SettingsForm`, `NotificationToggle`

### Data / persistence
- static data: `data/mockKpis.ts`, `data/mockChartData.ts`, `data/mockUsers.ts`
- persistence helpers: `src/lib/storage.ts`

## Root cause
`next.config.js` overrides Next’s output directory:

```js
const nextConfig = {
  distDir: 'dist',
};
```

That output shape is incompatible with the current Vercel project/runtime expectation shown in the failing logs, which attempts to read build manifests from `.next/`.

## Implementation plan for Grunt
### Primary fix
1. **Edit `next.config.js`** to stop overriding `distDir`.
2. Restore default Next.js build output so artifacts are emitted to `.next/`.
3. Keep the rest of the dashboard app intact; this is a deployment/build-output fix, not a UI rewrite.

### Expected code change scope
- **Required file:** `next.config.js`
- **Likely change:** remove `distDir: 'dist'` entirely, leaving either an empty config object or only future-safe Next config fields.

### Secondary cleanup (only if needed, still minimal)
If Grunt finds ticket-specific docs or notes still claiming the project should emit `dist/`, update those docs so future roles do not reintroduce the mismatch.

## What Grunt should NOT do
- Do **not** migrate the app to Vite.
- Do **not** rewrite routes/components/pages unless unrelated issues are discovered during verification.
- Do **not** touch dashboard behavior for KPI cards, charts, user sorting, or settings persistence unless the build check exposes a real defect.
- Do **not** add APIs, env vars, or server actions.

## Verification plan
### Local verification steps
1. Run `npm install`.
2. Run `npm run build`.
3. Confirm build succeeds.
4. Confirm `.next/routes-manifest.json` exists after the build.
5. Confirm `dist/` is no longer being used as the Next build directory.

### Deployment-oriented verification
- Re-run the Vercel build after the config change.
- Confirm the previous missing-file error disappears.
- Confirm no project-level Output Directory override is forcing an incompatible path.

## Vercel configuration note
The code-side fix should be sufficient, but if deployment still fails after restoring `.next/`, Pedant/Scribe should verify the Vercel project does **not** have a manual Output Directory override set to `dist`. For a standard Next.js deployment, it should be unset/default.

## Pedant checklist
- `next.config.js` no longer overrides `distDir`
- `npm run build` succeeds locally
- `.next/routes-manifest.json` exists
- dashboard routes still render: `/dashboard`, `/users`, `/settings`
- theme persistence still works
- settings persistence still works
- no regressions introduced in existing catalog routes
- Vercel deployment no longer errors on missing `routes-manifest.json`

## Handoff summary for Grunt
This ticket is a **build-output alignment fix**. The app is already implemented on Next.js and compiles successfully. Grunt should make the smallest possible config change in `next.config.js`, verify `.next/` artifacts are restored, and avoid any unnecessary platform migration or UI churn.

ARCHITECT_DONE: plan ready for Grunt.
