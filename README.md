# TodoMaster — Next.js 14 Todo Application

A complete, production-ready todo list application built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Features

- ✅ **Add Tasks** — Quick-add with Enter key or expanded form with full details
- ✏️ **Edit Tasks** — Inline editing for title, description, priority, and category
- ✔️ **Complete Tasks** — Toggle completion with a satisfying checkmark animation
- 🗑️ **Delete Tasks** — Delete with confirmation to prevent accidents
- 🏷️ **Priority Levels** — High, Medium, Low with color-coded badges
- 📂 **Categories** — Work, Personal, Health, Learning, Finance, Shopping, or custom
- 🔍 **Search** — Real-time search across title, description, and category
- 🔽 **Filter** — View All, Active, or Completed tasks
- 📊 **Statistics** — Live stats showing total, active, completed, and high-priority counts
- 📈 **Progress Bar** — Visual completion percentage tracker
- 💾 **Persistence** — Automatic localStorage sync (no account needed)
- 🧹 **Clear Completed** — Bulk remove all completed tasks
- 📱 **Responsive** — Works beautifully on mobile, tablet, and desktop

## Pages

| Route | Description |
|-------|-------------|
| `/` | Main task management page |
| `/categories` | View tasks organized by category with progress bars |
| `/tips` | 8 actionable productivity tips |
| `/about` | App features, tech stack, and mission |

## Tech Stack

- **Next.js 14** — React framework with App Router
- **TypeScript** — Full type safety throughout
- **Tailwind CSS** — Utility-first styling
- **React Hooks** — useState, useEffect for state management
- **localStorage** — Client-side data persistence
- **UUID** — Unique ID generation
- **clsx + tailwind-merge** — Conditional class utilities
