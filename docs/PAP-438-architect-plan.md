# PAP-438 Architect Plan — Claude Skill Platform

## Phase scope
Architect-only deliverable. This document defines the implementation plan for Grunt. No product code was changed in this phase.

## Current repo assessment
- **Stack:** Next.js 14 App Router, React 18, TypeScript, Tailwind CSS.
- **Current state:** repo is a partially built `SwiftTask` landing-page template, not a Claude Skill platform.
- **Existing assets worth reusing:** basic App Router layout, Tailwind theme tokens, generic section/component patterns.
- **Current blockers observed during inspection:**
  - `components/AppDownloadSection.tsx` contains duplicate imports / duplicate `PhoneMockup` declarations and will not compile as-is.
  - Header/footer link to `/features`, `/pricing`, `/about`, but those routes do not exist.
  - README is effectively empty.
  - `npm run build` cannot run in the current sandbox without installed deps (`next: not found`), so baseline runtime verification is pending implementation environment setup.

## Product interpretation
The spec reads like a **single-page or multi-page enterprise catalog site** for a “Claude Skill Platform” / “AI control plane” product, not a mobile app. The implementation should convert the starter template into a content-rich, filterable B2B catalog experience covering:
- department suites
- industry overlay suites
- packaging/subscription tiers
- skill credits and activation controls
- source URL appendix

Because user stories / acceptance criteria were not fully extracted, the safest interpretation is a **marketing + catalog web app** whose content is sourced from typed local data and rendered across discoverable routes.

## Recommended implementation shape
Use **static local data + server-rendered App Router pages**. Avoid external APIs. No env vars required unless analytics are later added.

### Core architecture decision
Build the site around a normalized content model in `lib/` and render all catalog views from that source of truth.

## Proposed information architecture
### Routes
1. `/` — landing page
   - hero for enterprise Claude skill platform
   - commercial model summary
   - featured department suites
   - featured industry overlays
   - controls / governance section
   - CTA to browse full catalog

2. `/departments`
   - overview of all department suites
   - counts, buyers, add-ons, activation summary
   - cards with links to detail pages

3. `/departments/[slug]`
   - suite overview
   - buyer personas
   - modules list
   - 6 skills per module rendered as SKU cards
   - suggested credit values
   - source URLs for that suite

4. `/industries`
   - industry overlay overview page
   - 20 overlay cards
   - overlay positioning and pricing rationale

5. `/industries/[slug]`
   - overlay summary
   - 24 overlay skills grouped into modules/capabilities
   - terminology/compliance/workflow notes
   - suggested combination with department suites

6. `/pricing`
   - subscription tiers table/cards
   - included suites, overlays, credits, controls
   - hybrid monetization explanation

7. `/credits-controls`
   - skill credit ladder
   - activation controls
   - risk tiers
   - audit/approval logging model
   - third-party skill review lifecycle

8. `/sources`
   - complete URL appendix grouped by source family (`S`, `A`, `D`)
   - optional anchor links for each suite to referenced sources

9. `/about` or `/platform`
   - concise product explanation of routing, licensing, metering, and governance
   - can absorb generic “about” nav destination already present

## Data model plan
Create typed content files under `lib/catalog/`.

### Files
- `lib/catalog/types.ts`
- `lib/catalog/department-suites.ts`
- `lib/catalog/industry-overlays.ts`
- `lib/catalog/pricing.ts`
- `lib/catalog/controls.ts`
- `lib/catalog/sources.ts`
- `lib/catalog/index.ts`

### Key types
- `SourceLink`
- `SkillSku`
- `SuiteModule`
- `DepartmentSuite`
- `IndustryOverlay`
- `SubscriptionTier`
- `CreditBand`
- `ActivationRule`

### Suggested schema
```ts
interface SkillSku {
  slug: string;
  name: string;
  taskSummary: string;
  creditRange: string;
  riskNotes?: string[];
}

interface SuiteModule {
  name: string;
  code: string;
  serviceTasks: string[];
  skills: SkillSku[];
}

interface DepartmentSuite {
  code: string;
  slug: string;
  name: string;
  skillCount: number;
  buyers: string[];
  addOns: string[];
  summary: string;
  activationRules: string[];
  modules: SuiteModule[];
  sourceIds: string[];
}
```

## Content scope plan
### Departments
Implement all department suites listed in the spec as typed data entries.
- Marketing and Growth = 72 skills / 12 modules
- Remaining suites = 48 skills / 8 modules each

### Industry overlays
The prompt references **20 vertical overlay suites with 24 skills each**, but the excerpt does not enumerate them in detail. Grunt should:
- create 20 overlay entries from the source document if the full list exists elsewhere in repo/context, or
- if only the count is available, build complete overlay content from the named industries implied by the research basis and department table, using clearly labeled, internally consistent overlay modules.

Recommended overlay set if reconstruction is required:
- healthcare
- financial-services
- government
- education
- nonprofit
- retail
- construction
- manufacturing
- media
- life-sciences
- professional-services
- real-estate
- hospitality
- logistics
- energy
- telecom
- insurance
- technology
- consumer-packaged-goods
- automotive

Each overlay should expose 24 skills grouped as 4 modules x 6 skills to keep the UI consistent.

## Component plan
### Layout / shell
- `components/site/SiteHeader.tsx`
- `components/site/SiteFooter.tsx`
- `components/site/PageHero.tsx`
- `components/site/SectionHeading.tsx`

### Catalog browsing
- `components/catalog/SuiteCard.tsx`
- `components/catalog/SuiteStatPill.tsx`
- `components/catalog/ModuleAccordion.tsx`
- `components/catalog/SkillTable.tsx`
- `components/catalog/SkillCard.tsx`
- `components/catalog/BuyerList.tsx`
- `components/catalog/SourceList.tsx`
- `components/catalog/OverlayCard.tsx`
- `components/catalog/PricingTierCard.tsx`
- `components/catalog/CreditBandList.tsx`
- `components/catalog/ActivationRuleList.tsx`

### Optional UX enhancers
- `components/catalog/CatalogSearch.tsx`
- `components/catalog/FilterBar.tsx`
- `components/catalog/StickyOnPageNav.tsx`

## Styling / UX direction
- Replace mobile-app visuals with enterprise SaaS styling.
- Preserve Tailwind token palette if convenient, but shift copy and imagery toward governance/catalog/orchestration.
- Use cards, comparison tables, badges, anchors, and accordions for large content density.
- Keep everything text-first and deterministic; no dependence on images or remote APIs.

## Navigation plan
Replace current nav with route-valid items:
- Home
- Departments
- Industries
- Pricing
- Controls
- Sources

Footer should mirror the new IA and remove dead placeholder links.

## Metadata / SEO plan
Update `app/layout.tsx` metadata to match the Claude Skill Platform brand:
- title template for enterprise catalog
- description focused on licensing/activation/metering/routing
- OG/Twitter metadata aligned to catalog site

## Build strategy for Grunt
1. Remove/replace SwiftTask-specific components.
2. Create normalized data layer in `lib/catalog`.
3. Rebuild shared shell/header/footer.
4. Implement route pages in this order:
   - `/`
   - `/pricing`
   - `/credits-controls`
   - `/departments`
   - `/departments/[slug]`
   - `/industries`
   - `/industries/[slug]`
   - `/sources`
5. Add lightweight filtering/search only after core rendering is stable.
6. Run build and fix type/static issues.

## Quality expectations for Pedant
Pedant should verify:
- all nav links resolve
- all routes build statically without runtime errors
- all department pages render correct suite counts and module counts
- marketing suite uniquely renders 12 modules / 72 skills
- non-marketing suites render 8 modules / 48 skills
- industry page renders 20 overlays
- pricing page reflects all subscription tiers in the spec
- controls page reflects credit bands and approval rules
- sources page exposes reference URLs
- no residual SwiftTask branding remains

## Derived acceptance criteria for implementation
Since explicit ACs are missing, Grunt should satisfy these practical criteria:
1. App presents an enterprise Claude Skill Platform catalog instead of the current SwiftTask app template.
2. Users can browse all department suites and open detail pages for each.
3. Users can browse all industry overlays and open detail pages for each.
4. Packaging, pricing tiers, credit values, and activation controls are explained in dedicated sections/pages.
5. Source URLs are visible in a dedicated appendix page and on relevant suite pages.
6. The site is responsive across mobile, tablet, and desktop widths.
7. `npm run dev` and `npm run build` complete successfully once dependencies are installed.

## Risks / implementation notes
- The prompt is extremely content-heavy; Grunt should prefer **data-driven rendering** over bespoke handwritten JSX per suite.
- Missing explicit overlay details may require structured reconstruction from the prompt’s industry list.
- Avoid overengineering search/state management; server components plus light client filtering are sufficient.
- No backend/API is required unless Grunt decides to add a local JSON endpoint for convenience; direct import is preferable.

## Handoff summary for Grunt
- Treat this as a **full re-theme and content-model rewrite** of the starter site.
- Build a **typed static catalog app** with App Router pages and reusable content components.
- Prioritize correctness of structure/counts and elimination of dead template code.
- Do not preserve SwiftTask-specific copy, nav, or download sections.

ARCHITECT_DONE: plan ready for Grunt.
