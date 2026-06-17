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
      title: 'Simple Task Management',
      description: 'Add, complete, and delete tasks with ease. Our intuitive interface makes managing your to-do list a breeze.',
    },
    {
      icon: '🏷️',
      title: 'Priority Levels',
      description: 'Assign high, medium, or low priority to each task so you always know what needs your attention first.',
    },
    {
      icon: '📂',
      title: 'Categories',
      description: 'Organize tasks into categories like Work, Personal, Health, and Learning to keep everything structured.',
    },
    {
      icon: '🔍',
      title: 'Search & Filter',
      description: 'Quickly find any task with our powerful search and filter functionality. View all, active, or completed tasks.',
    },
    {
      icon: '💾',
      title: 'Local Storage',
      description: 'Your tasks are automatically saved to your browser so they persist between sessions without any account needed.',
    },
    {
      icon: '📊',
      title: 'Progress Tracking',
      description: 'See your productivity at a glance with real-time statistics showing completed vs. pending tasks.',
    },
  ];

  const techStack = [
    { name: 'Next.js 14', description: 'React framework with App Router' },
    { name: 'TypeScript', description: 'Type-safe JavaScript' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
    { name: 'React Hooks', description: 'useState, useEffect for state management' },
    { name: 'localStorage', description: 'Client-side data persistence' },
    { name: 'UUID', description: 'Unique ID generation for tasks' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About TodoMaster</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          TodoMaster is a modern, feature-rich task management application designed to help you
          stay organized, focused, and productive every single day.
        </p>
      </div>

      <div className="card mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          We believe that productivity starts with clarity. When you have a clear picture of what
          needs to be done, you can focus your energy on what truly matters. TodoMaster was built
          with this philosophy in mind — to give you a simple yet powerful tool to capture, organize,
          and complete your tasks.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Whether you're managing work projects, personal errands, fitness goals, or learning
          objectives, TodoMaster adapts to your workflow and helps you build the habit of getting
          things done.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Built With</h2>
        <div className="card">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {techStack.map((tech) => (
              <div key={tech.name} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{tech.name}</p>
                  <p className="text-gray-500 text-xs">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Organized?</h2>
        <p className="text-gray-600 mb-6">Start managing your tasks today — no sign-up required.</p>
        <Link href="/" className="btn-primary inline-block">
          Start Adding Tasks
        </Link>
      </div>
    </div>
  );
}
