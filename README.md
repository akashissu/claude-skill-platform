# TodoMaster - Next.js 14 Todo Application

A complete, production-ready todo list application built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Features

- ✅ **Add Tasks** — Create new tasks with a title, priority level, and category
- ✔️ **Complete Tasks** — Toggle tasks between active and completed states
- ✏️ **Edit Tasks** — Inline editing by clicking the edit icon on any active task
- 🗑️ **Delete Tasks** — Remove individual tasks or clear all completed tasks at once
- 🏷️ **Priority Levels** — Assign High, Medium, or Low priority to each task
- 📂 **Categories** — Organize tasks into categories (Work, Personal, Shopping, Health, etc.)
- 🔍 **Filter Tasks** — View All, Active, or Completed tasks
- 📊 **Statistics** — Detailed stats page with progress bars and category breakdown
- 💾 **Persistent Storage** — Tasks are automatically saved to localStorage
- 📱 **Responsive Design** — Works on mobile, tablet, and desktop

## Pages

| Route | Description |
|-------|-------------|
| `/` | Main todo list with add form, filters, and stats |
| `/stats` | Detailed statistics and progress tracking |
| `/tips` | Productivity tips and strategies |
| `/about` | About the app and tech stack |

## Tech Stack

- **Next.js 14** — React framework with App Router
- **TypeScript** — Full type safety throughout
- **Tailwind CSS** — Utility-first styling
- **React Hooks** — useState, useEffect, useRef, useCallback
- **localStorage** — Browser-based data persistence
- **UUID** — Unique ID generation for tasks
- **clsx + tailwind-merge** — Conditional class merging

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles with Tailwind directives
│   ├── layout.tsx           # Root layout with Header and Footer
│   ├── page.tsx             # Homepage — main todo list
│   ├── about/page.tsx       # About page
│   ├── tips/page.tsx        # Productivity tips page
│   └── stats/page.tsx       # Statistics page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Site footer
│   ├── TodoItem.tsx         # Individual todo item with edit/delete
│   ├── TodoList.tsx         # List of todo items
│   ├── AddTodoForm.tsx      # Form to add new tasks
│   ├── TodoStats.tsx        # Stats summary widget
│   └── FilterBar.tsx        # Filter and clear controls
├── lib/
│   └── utils.ts             # Utility functions
├── types/
│   └── index.ts             # TypeScript type definitions
└── README.md
```
