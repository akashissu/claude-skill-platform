import type { Feature } from '@/types';

const features: Feature[] = [
  {
    id: '1',
    title: 'Smart Task Management',
    description:
      'Organize tasks with intelligent prioritization, deadlines, and subtasks. Never lose track of what matters.',
    icon: '✅',
    color: 'blue',
  },
  {
    id: '2',
    title: 'Team Collaboration',
    description:
      'Assign tasks, leave comments, share files, and get real-time updates from your entire team.',
    icon: '👥',
    color: 'purple',
  },
  {
    id: '3',
    title: 'Focus Mode',
    description:
      'Block distractions and enter deep work mode with our built-in Pomodoro timer and focus sessions.',
    icon: '🎯',
    color: 'green',
  },
  {
    id: '4',
    title: 'Powerful Analytics',
    description:
      'Track your productivity trends, completion rates, and team performance with beautiful dashboards.',
    icon: '📊',
    color: 'orange',
  },
  {
    id: '5',
    title: 'Cross-Platform Sync',
    description:
      'Seamlessly sync across iOS, Android, web, and desktop. Your data is always up to date.',
    icon: '🔄',
    color: 'teal',
  },
  {
    id: '6',
    title: 'Secure & Private',
    description:
      'End-to-end encryption keeps your data safe. We never sell your information to third parties.',
    icon: '🔒',
    color: 'red',
  },
];

const colorMap: Record<string, string> = {
  blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
  purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
  green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
  orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
  teal: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400',
  red: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
};

export function FeaturesSection() {
  return (
    <section className="py-24 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-sm font-semibold rounded-full mb-4">
            Why SwiftTask?
          </span>
          <h2 className="section-heading mb-4">
            Everything You Need to{' '}
            <span className="gradient-text">Stay Productive</span>
          </h2>
          <p className="section-subheading">
            From solo freelancers to enterprise teams, SwiftTask adapts to your workflow and
            helps you get more done in less time.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 ${colorMap[feature.color]} group-hover:scale-110 transition-transform duration-200`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}