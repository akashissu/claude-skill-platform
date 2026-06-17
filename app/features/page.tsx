import type { Metadata } from 'next';
import { FeaturesSection } from '@/components/FeaturesSection';
import { AppDownloadSection } from '@/components/AppDownloadSection';
import type { Feature } from '@/types';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Explore all the powerful features SwiftTask offers to boost your productivity and team collaboration.',
};

const detailedFeatures: Feature[] = [
  {
    id: '1',
    title: 'Smart Task Management',
    description:
      'Create, assign, and track tasks with intelligent prioritization. Set deadlines, add subtasks, and never miss a beat.',
    icon: '✅',
    color: 'blue',
  },
  {
    id: '2',
    title: 'Real-Time Collaboration',
    description:
      'Work together seamlessly with your team. Comment, mention teammates, share files, and see updates instantly.',
    icon: '👥',
    color: 'purple',
  },
  {
    id: '3',
    title: 'Focus Mode & Pomodoro Timer',
    description:
      'Eliminate distractions with our built-in focus mode. Use the Pomodoro technique to maximize deep work sessions.',
    icon: '🎯',
    color: 'green',
  },
  {
    id: '4',
    title: 'Advanced Analytics',
    description:
      'Gain insights into your productivity patterns. Track completion rates, time spent, and team performance metrics.',
    icon: '📊',
    color: 'orange',
  },
  {
    id: '5',
    title: 'Calendar Integration',
    description:
      'Sync with Google Calendar, Outlook, and Apple Calendar. View all your tasks and events in one unified timeline.',
    icon: '📅',
    color: 'red',
  },
  {
    id: '6',
    title: 'Offline Mode',
    description:
      'Keep working even without internet. All changes sync automatically when you reconnect.',
    icon: '📡',
    color: 'teal',
  },
  {
    id: '7',
    title: 'Custom Workflows',
    description:
      'Build workflows that match your process. Use templates or create your own from scratch with drag-and-drop ease.',
    icon: '⚙️',
    color: 'indigo',
  },
  {
    id: '8',
    title: 'End-to-End Encryption',
    description:
      'Your data is always secure. We use military-grade encryption to protect your tasks and communications.',
    icon: '🔒',
    color: 'gray',
  },
];

export default function FeaturesPage() {
  return (
    <div className="flex flex-col">
      {/* Page Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-sm font-semibold rounded-full mb-4">
            Everything You Need
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Powerful Features for{' '}
            <span className="gradient-text">Modern Teams</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            SwiftTask is packed with tools designed to help individuals and teams achieve more,
            stress less, and collaborate better — all from one beautiful app.
          </p>
        </div>
      </section>

      {/* Detailed Features Grid */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {detailedFeatures.map((feature) => (
              <div
                key={feature.id}
                className="card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AppDownloadSection />
    </div>
  );
}