# TaskFlow - Smart Todo List App

A modern, full-featured todo list application built with **Next.js 14 (App Router)**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Features

- **Task Management** — Create, edit, delete, and complete tasks
- **Priorities** — Assign High, Medium, or Low priority to each task
- **Categories** — Organize tasks by category (Work, Personal, Shopping, etc.)
- **Due Dates** — Set due dates and get visual overdue indicators
- **Search & Filter** — Real-time search and filter by status or priority
- **Statistics** — Visual insights into your productivity and completion rates
- **Settings** — Customize categories, default priority, and display preferences
- **Local Storage** — All data persists in your browser — no backend required
- **Responsive Design** — Works on desktop, tablet, and mobile

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **State**: React useState + useEffect
- **Persistence**: Browser localStorage

## 📦 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/taskflow.git
cd taskflow

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
taskflow/
├── app/
│   ├── globals.css          # Global styles + Tailwind directives
│   ├── layout.tsx           # Root layout with Header & Footer
│   ├── page.tsx             # Homepage — main task board
│   ├── stats/
│   │   └── page.tsx         # Statistics & productivity insights
│   ├── settings/
│   │   └── page.tsx         # App settings & customization
│   └── about/
│       └── page.tsx         # About page & feature overview
├── components/
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Site footer
│   ├── TodoList.tsx         # List of todo items
│   ├── TodoItem.tsx         # Individual todo item with edit mode
│   ├── AddTodoForm.tsx      # Form to create new tasks
│   ├── TodoStats.tsx        # Stats summary cards
│   ├── FilterBar.tsx        # Search + filter controls
│   └── StatsChart.tsx       # Priority breakdown chart
├── lib/
│   └── utils.ts             # Utility functions
├── types/
│   └── index.ts             # TypeScript type definitions
└── README.md
```

## 🎨 Pages

| Route | Description |
|-------|-------------|
| `/` | Main task board with add form, filters, and task list |
| `/stats` | Productivity statistics and visual charts |
| `/settings` | Customize categories, priorities, and preferences |
| `/about` | App overview, features, and productivity tips |

## 💡 Usage Tips

1. **Add a task** — Type in the input field and press Enter or click "Add Task"
2. **Expand form** — Click the input to reveal description, priority, category, and due date fields
3. **Edit a task** — Click the pencil icon on any task to edit it inline
4. **Complete a task** — Click the checkbox to mark it as done
5. **Filter tasks** — Use the filter buttons to view All, Active, Completed, or by priority
6. **Search** — Type in the search bar to find tasks by title or description
7. **Clear completed** — Use the "Clear X completed" button to remove finished tasks
8. **View stats** — Navigate to /stats to see your productivity breakdown

## 📄 License

MIT License — feel free to use this project for personal or commercial purposes.
