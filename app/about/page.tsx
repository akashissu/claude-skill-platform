import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About - TodoMaster',
  description: 'Learn about TodoMaster and how it helps you stay organized and productive.',
};

export default function AboutPage() {
  const features = [
    {
      icon: '✅',
      title: 'Easy Task Management',
      description: 'Add, complete, and delete tasks with a simple and intuitive interface. No learning curve required.',
    },
    {
      icon: '🏷️',
      title: 'Priority Levels',
      description: 'Assign high, medium, or low priority to each task so you always know what to focus on first.',
    },
    {
      icon: '📂',
      title: 'Categories',
      description: 'Organize your tasks into categories like Work, Personal, Shopping, and more for better clarity.',
    },
    {
      icon: '🔍',
      title: 'Smart Filtering',
      description: 'Filter tasks by status — view all tasks, only active ones, or completed ones at a glance.',
    },
    {
      icon: '💾',
      title: 'Persistent Storage',
      description: 'Your tasks are saved automatically in your browser. They will be there when you come back.',
    },
    {
      icon: '✏️',
      title: 'Inline Editing',
      description: 'Edit any task directly in the list without navigating away or opening a separate form.',
    },
  ];

  const techStack = [
    { name: 'Next.js 14', description: 'React framework with App Router' },
    { name: 'TypeScript', description: 'Type-safe JavaScript' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
    { name: 'React Hooks', description: 'useState, useEffect, useCallback' },
    { name: 'LocalStorage', description: 'Browser-based persistence' },
    { name: 'UUID', description: 'Unique ID generation' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About TodoMaster</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          TodoMaster is a clean, fast, and feature-rich task management application
          built to help you stay focused and productive every day.
        </p>
      </div>

      <div className="card mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We believe that productivity tools should be simple, fast, and get out of your way.
          TodoMaster was built with one goal in mind: give you the most efficient way to
          capture, organize, and complete your tasks without unnecessary complexity.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Whether you are managing work projects, personal errands, or daily habits,
          TodoMaster adapts to your workflow and helps you stay on top of everything
          that matters.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.title} className="card hover:shadow-md transition-shadow duration-200">
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Built With</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {techStack.map((tech) => (
            <div key={tech.name} className="bg-blue-50 border border-blue-100 rounded-lg p-4">
              <h3 className="font-semibold text-blue-800 mb-1">{tech.name}</h3>
              <p className="text-blue-600 text-sm">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <Link href="/" className="btn-primary inline-block">
          Start Managing Tasks
        </Link>
      </div>
    </div>
  );
}
