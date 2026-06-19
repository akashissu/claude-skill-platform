# PAP-442 Architect Plan — Memory E2E / `MOVIES` export regression

## Phase scope
Architect-only deliverable. This phase defines the implementation plan for Grunt. No application code was changed in this phase.

## Current repo assessment
- **Stack:** Next.js 14 App Router, React 18, TypeScript, Tailwind CSS.
- **Build tooling:** `next build` via `npm run build`.
- **Current visible app surface in this checkout:** dashboard/catalog-style pages under `app/`, shared UI components under `components/`, static data under `data/`, and catalog helpers under `lib/catalog.ts`.
- **Important mismatch:** the ticket says the build fails on `Cannot resolve export MOVIES from lib/data.ts`, but this checkout at `HEAD` currently has **no `lib/data.ts` file** and **no visible `MOVIES` references** in tracked source.
- **Git history clue:** `lib/data.ts` existed in older commits, but it belonged to an unrelated virtual-event app and did not expose `MOVIES`.

## Diagnosis
Treat PAP-442 as a **module export contract regression**:
- some consumer in the intended memory E2E app expects a named export `MOVIES` from `lib/data.ts`
- the current branch/snapshot has either:
  1. deleted `lib/data.ts`,
  2. renamed the export,
  3. moved the movie dataset to another file without preserving a compatibility export, or
  4. changed the module path while a page/component/test still imports `lib/data.ts`

Because the acceptance criterion is only `npm run build` passes, the safest implementation is a **minimal compatibility-layer fix** in the data module boundary, not a UI rewrite.

## Scope for Grunt
### Primary target
Restore a stable `lib/data.ts` export surface that includes:
- `MOVIES` as a named export

### Secondary target
If the canonical movie dataset already lives elsewhere, make `lib/data.ts` a thin compatibility re-export rather than duplicating data.

## Expected code areas
### Data layer
- `lib/data.ts` — create or restore this file if missing
- possible canonical source if present elsewhere, e.g. another `data/` or `lib/` module containing movie records
- optional related type file if a `Movie` interface/type already exists or should be centralized

### Pages / components
No intentional product-surface changes are expected.
If a page/component currently imports the wrong symbol or wrong path, adjust imports only as needed after the data contract is restored.

### APIs
- **No backend/API work expected**
- **No route handlers/server actions expected**

## Concrete implementation plan
1. **Reproduce after dependencies exist**
   - Run `npm install` or `npm ci` if `node_modules` is absent.
   - Run `npm run build` to capture the exact import path and importer file causing the failure.

2. **Locate the canonical movie dataset**
   - Search for movie-shaped data, related types, or a lowercased/renamed export such as `movies`, `movieData`, `FILMS`, etc.
   - Search for import sites expecting `MOVIES` from `lib/data.ts`.

3. **Restore the export contract with the smallest viable change**
   - Preferred path: create/restore `lib/data.ts` and export:
     - `export const MOVIES = ...`
   - If the dataset already exists elsewhere, use re-exports, e.g. `export { movies as MOVIES } from '...'`.
   - Preserve any existing exports from that module so other consumers do not regress.

4. **Normalize naming only at the boundary**
   - Do **not** rename broad app internals unless necessary.
   - If the app internally uses `movies` but callers expect `MOVIES`, keep both temporarily if that avoids churn.

5. **Verify type safety**
   - If TypeScript complains, add or align the `Movie` type/interface where the dataset is defined.
   - Keep the data shape consistent with the consuming page/component props.

6. **Re-run build**
   - Run `npm run build` again.
   - Fix only adjacent issues surfaced by the build if they stem from the same data-module regression.

## Minimal-change strategy
Grunt should prefer this order:
1. re-export alias in `lib/data.ts`
2. restore missing file as compatibility shim
3. adjust one or two import sites only if the shim cannot satisfy the build
4. avoid unrelated route/component refactors

## Pages / components impact assessment
Based on the current checkout, there are no visible movie pages/components in tracked source. That suggests one of two things:
- the ticket refers to a hidden or newly introduced memory feature not represented in current `HEAD`, or
- the failure comes from an unmerged import contract expected by tests/build inputs

So the plan is intentionally **data-boundary-first** rather than page-first.

## Verification checklist for Grunt
- `node_modules` installed locally
- `npm run build` completes successfully
- `lib/data.ts` exists if the import path requires it
- `MOVIES` is exported as a named export from `lib/data.ts`
- no unrelated dashboard/catalog routes were modified unless required by the build

## Risks / cautions
- Do not overfit to the current checkout’s catalog/dashboard code; the ticket symptom is narrower than the repo history suggests.
- Do not rewrite pages/components unless the build proves they import the wrong path/symbol.
- Do not push or create PRs from the non-scribe role.

## Handoff summary for Grunt
This is most likely a **broken named-export/module-path compatibility issue**. Fix it at the data boundary first by restoring `lib/data.ts` and ensuring it exports `MOVIES`. Only touch importers if that compatibility layer is insufficient. Then verify with `npm run build`.

ARCHITECT_DONE: plan ready for Grunt.
