# SwiftTask — The Smart Productivity App

A modern, responsive Next.js 14 web application showcasing SwiftTask, a productivity app with a beautiful app download section, features overview, pricing plans, and more.

## 🚀 Features

- **Responsive App Download Section** — Beautiful hero section with iOS App Store and Google Play download buttons
- **Animated Phone Mockup** — CSS-animated phone mockup showing the app UI
- **Dark Mode Support** — Full dark mode with system preference detection and manual toggle
- **Multiple Pages** — Home, Features, Pricing, and About pages
- **Hover Effects** — Smooth transitions and hover animations throughout
- **TypeScript** — Fully typed with a centralized type system
- **Tailwind CSS** — Utility-first styling with custom design tokens

## 📦 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React 18**

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/swifttask-web.git
cd swifttask-web

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles + Tailwind directives
│   ├── layout.tsx           # Root layout with Header/Footer
│   ├── page.tsx             # Homepage
│   ├── features/
│   │   └── page.tsx         # Features page
│   ├── pricing/
│   │   └── page.tsx         # Pricing page
│   └── about/
│       └── page.tsx         # About page
├── components/
│   ├── Header.tsx           # Sticky header with dark mode toggle
│   ├── Footer.tsx           # Footer with download links
│   ├── AppDownloadSection.tsx  # Main download CTA section
│   ├── DownloadButton.tsx   # iOS/Android download buttons
│   ├── PhoneMockup.tsx      # Animated phone mockup
│   ├── HeroSection.tsx      # Homepage hero
│   ├── FeaturesSection.tsx  # Features grid
│   ├── TestimonialsSection.tsx # User testimonials
│   └── StatsSection.tsx     # Key metrics
├── lib/
│   └── utils.ts             # Utility functions
├── types/
│   └── index.ts             # Centralized TypeScript types
└── public/                  # Static assets
```

## 🎨 Design System

### Colors
- **Primary**: Blue (`primary-*`) — Main brand color
- **Accent**: Purple (`accent-*`) — Secondary brand color
- **Neutral**: Gray scale for text and backgrounds

### Components
- `.btn-primary` — Primary CTA button with hover effects
- `.btn-secondary` — Secondary outlined button
- `.card` — Elevated card component
- `.gradient-text` — Blue-to-purple gradient text
- `.gradient-bg` — Blue-to-purple gradient background
- `.glass` — Glassmorphism effect

## 📱 App Download Section

The `AppDownloadSection` component features:
- Gradient background with decorative elements
- Animated phone mockup showing the app UI
- iOS App Store and Google Play download buttons
- Key stats (rating, users, tasks completed)
- Responsive layout (stacked on mobile, side-by-side on desktop)
- Dark mode compatible styling

## 🌙 Dark Mode

Dark mode is implemented using Tailwind's `class` strategy:
- Detects system preference on first load
- Persists user preference in `localStorage`
- Toggle button in the header

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.
