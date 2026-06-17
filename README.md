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

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
todo-app-nextjs/
├── app/
│   ├── globals.css          # Tailwind directives + custom components
│   ├── layout.tsx           # Root layout with Header & Footer
│   ├── page.tsx             # Main todo page
│   ├── about/
│   │   └── page.tsx         # About page
│   ├── categories/
│   │   └── page.tsx         # Categories overview page
│   └── tips/
│       └── page.tsx         # Productivity tips page
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Site footer
│   ├── TodoItem.tsx         # Individual todo item with edit/delete
│   ├── TodoList.tsx         # List of todos grouped by status
│   ├── AddTodoForm.tsx      # Form to add new todos
│   ├── TodoStats.tsx        # Statistics dashboard
│   └── FilterBar.tsx        # Search and filter controls
├── lib/
│   └── utils.ts             # Utility functions
├── types/
│   └── index.ts             # TypeScript type definitions
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Component Architecture

### Data Flow

```
page.tsx (state owner)
  ├── TodoStats (reads todos)
  ├── AddTodoForm (calls onAdd)
  ├── FilterBar (controls filter/search)
  └── TodoList (renders filtered todos)
        └── TodoItem (toggle/edit/delete)
```

### Types

```typescript
type Priority = 'high' | 'medium' | 'low';
type FilterType = 'all' | 'active' | 'completed';

interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: Priority;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}
```

## License

MIT — feel free to use this project as a template or learning resource.
