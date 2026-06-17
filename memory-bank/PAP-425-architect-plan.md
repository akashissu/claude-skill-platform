# PAP-425 Architect Plan — React Clinic Patient Portal

## Phase Scope
Architect-only deliverable. No product code changes in this phase.

## Current Stack Assessment
- Framework: Next.js 14 App Router
- Language: TypeScript
- Styling: Tailwind CSS with custom `primary` and `accent` palettes
- Current state: repository is a marketing-style SwiftTask app with reusable layout/components but unrelated copy and page structure
- Reuse opportunity: Tailwind tokens, global layout shell, utility helpers, and responsive card styling conventions
- Refactor need: replace marketing homepage/content with a portal dashboard experience and healthcare-focused metadata/navigation

## Product Direction
Build a single secure-looking, modern patient portal landing/dashboard experience that highlights:
1. Appointment cards
2. Medical records summary
3. Prescription panel
4. Doctor messages
5. Lab results section
6. Profile settings

## Recommended Information Architecture
### Primary route
- `/` → patient portal dashboard

### Optional follow-up routes if Grunt has time after the dashboard is stable
- `/appointments` → full appointments list
- `/records` → records and visit history
- `/messages` → doctor communication center
- `/settings` → profile, insurance, contact preferences

For PAP-425, the dashboard route alone can satisfy scope if all required sections are present and visually distinct.

## Proposed UI Composition
### Layout changes
- Replace current marketing shell behavior with a portal shell
- Header should become a healthcare portal top bar with:
  - clinic brand/name
  - patient greeting
  - search or quick action placeholder
  - notification bell/avatar placeholders
- Footer should be minimized or replaced with a light compliance footer:
  - Privacy
  - Terms
  - HIPAA-style trust language (visual only, not legal claims beyond copy)

### Dashboard sections on `/`
1. **Hero / patient overview strip**
   - greeting
   - next appointment timestamp
   - quick status chips: insurance active, primary care physician, outstanding balance or “no balance”
   - CTA buttons like “Book follow-up” and “View records”

2. **Appointment cards**
   - upcoming appointment card with doctor, specialty, time, location, prep note
   - secondary cards for follow-up / past appointment snapshot
   - status badges: Confirmed, Check-in ready, Completed

3. **Medical records summary**
   - compact summary tiles:
     - allergies
     - conditions
     - immunizations
     - last visit
   - “View full chart” CTA placeholder

4. **Prescription panel**
   - list current medications with dosage, refill date, prescribing doctor
   - highlight one urgent refill state
   - action buttons: Request refill / Message pharmacy (UI only)

5. **Doctor messages**
   - thread preview cards with sender, subject, timestamp, unread badge
   - one prominent unread clinical follow-up message

6. **Lab results section**
   - table/card list of recent tests
   - status chips: Normal, Review, Action needed
   - trend-friendly visual hierarchy using subtle color coding

7. **Profile settings**
   - mini settings card for contact info, password/security, notification preferences, insurance
   - toggles can be static UI in this ticket unless there is existing interactivity support

## Component Plan
Create or refactor toward the following components:
- `components/portal/PortalHeader.tsx`
- `components/portal/PatientOverview.tsx`
- `components/portal/AppointmentsSection.tsx`
- `components/portal/AppointmentCard.tsx`
- `components/portal/MedicalSummarySection.tsx`
- `components/portal/PrescriptionPanel.tsx`
- `components/portal/DoctorMessagesSection.tsx`
- `components/portal/LabResultsSection.tsx`
- `components/portal/ProfileSettingsPanel.tsx`
- `components/portal/StatusBadge.tsx`
- optional shared primitives:
  - `SectionCard.tsx`
  - `MetricTile.tsx`

## Data / Types Plan
Add portal-specific typed mock data so implementation stays structured:
- `types/portal.ts`
  - `Appointment`
  - `MedicalSummaryItem`
  - `Prescription`
  - `DoctorMessage`
  - `LabResult`
  - `ProfileSettingItem`
- `lib/portal-data.ts`
  - mock patient profile
  - appointments array
  - records summary array
  - prescriptions array
  - messages array
  - lab results array
  - settings array

Keep all data local and static for this ticket; no backend dependency is required.

## Styling / UX Direction
- Keep Tailwind and existing blue/purple tokens, but shift visual tone toward healthcare trust:
  - more whites, slate backgrounds, subtle blue accents, restrained gradients
- Design cues for “secure-looking and modern”:
  - soft shadows
  - rounded 2xl cards
  - badge chips and thin borders
  - calm blue/emerald semantic accents
  - lock/shield/check visuals used sparingly
- Ensure responsive layout:
  - mobile: stacked cards
  - tablet/desktop: 12-column dashboard grid with varied spans

## Metadata / Copy Updates
Update metadata and brand language from SwiftTask to clinic portal branding:
- page title
- description
- Open Graph/Twitter copy
- header/footer labels

Suggested neutral brand placeholders:
- “Northstar Clinic Portal”
- “Your care, appointments, and results in one secure place”

## API / Integration Posture
No live APIs are needed for PAP-425.
Implementation should mimic future integration seams only:
- `getUpcomingAppointments()`
- `getMedicalSummary()`
- `getPrescriptions()`
- `getDoctorMessages()`
- `getLabResults()`
- `getProfileSettings()`

These can remain local mock exports for now.

## Execution Checklist for Grunt
1. Replace marketing homepage composition with portal dashboard composition.
2. Swap marketing header/footer content for clinic portal shell.
3. Add portal-specific types and mock data files.
4. Build the six required portal sections as modular components.
5. Update metadata/copy/branding from SwiftTask to clinic portal language.
6. Preserve responsiveness and dark mode compatibility where reasonable.
7. Keep implementation static/mock-based; do not introduce backend/auth complexity.

## Acceptance Target
The final UI should clearly read as a modern clinic patient portal and visibly include all required sections without placeholder marketing content.

## Handoff Notes
- Existing repo already supports Next.js + TypeScript + Tailwind; no dependency additions are necessary for the first pass.
- This ticket is primarily a structured UI refactor, not a data integration task.
- Prefer small composable components over one oversized page component.
