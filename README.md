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

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone or download the project
cd todo-app-nextjs

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

## Usage

1. **Adding a Task** — Type in the input field and press Enter or click "Add Task". Click the input to expand priority and category options.
2. **Completing a Task** — Click the circle checkbox on the left of any task.
3. **Editing a Task** — Hover over an active task and click the pencil icon. Press Enter to save or Escape to cancel.
4. **Deleting a Task** — Hover over a task and click the trash icon.
5. **Filtering** — Use the All / Active / Completed buttons to filter the list.
6. **Clear Completed** — Click "Clear completed" to remove all done tasks at once.
7. **Statistics** — Visit the Statistics page to see your productivity metrics.

## License

MIT License — feel free to use and modify for your own projects.
