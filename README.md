# Northside Clinic Portal

A modern React and Next.js patient portal experience for PAP-425. The application presents a secure-looking clinic dashboard with key patient workflows gathered into a single polished interface.

## Feature Overview

This ticket delivers a clinic patient portal with:

- **Appointment cards** for upcoming and active visits
- **Medical records summary** for conditions, allergies, vitals, and shared records
- **Prescription panel** for medication status and refill awareness
- **Doctor messages** in a secure inbox-style layout
- **Lab results section** for recent diagnostics and trend visibility
- **Profile settings** with a security-oriented account summary
- **Modern healthcare styling** using a dark, high-contrast, professional UI

## Tech Stack

- **Next.js 14**
- **React 18**
- **TypeScript**
- **Tailwind CSS**

## Setup

### Prerequisites

- Node.js 18+
- npm

### Install dependencies

```bash
npm install
```

## Run Locally

Start the development server:

```bash
npm run dev
```

Then open:

- <http://localhost:3000>

## Production Build

Build and run the production app:

```bash
npm run build
npm start
```

## What Was Built for PAP-425

The home page was repurposed into a patient portal dashboard and organized into dedicated portal sections:

- **Portal header** with healthcare-focused branding and context
- **Appointments** area showing visit status, provider, location, date, and actions
- **Medical summary** blocks that surface chart highlights and recent patient information
- **Prescriptions** area for medication tracking and refill-related states
- **Doctor messages** panel for secure communication previews
- **Lab results** cards for latest measurements, references, and status trends
- **Profile settings** panel with account details and a security center callout

## Project Notes

- The app is structured as a Next.js App Router project.
- Styling emphasizes a trustworthy, secure-looking clinic experience.
- Content is currently represented through UI-focused sample portal data for the implemented experience.

## Scripts

```bash
npm run dev
npm run build
npm start
npm run lint
```
