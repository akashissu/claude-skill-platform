import type { Stat } from '@/types';

const stats: Stat[] = [
  {
    id: '1',
    value: '2M+',
    label: 'Active Users',
    description: 'Professionals worldwide',
    icon: '👥',
  },
  {
    id: '2',
    value: '50M+',
    label: 'Tasks Completed',
    description: 'Every single month',
    icon: '✅',
  },
  {
    id: '3',
    value: '4.9★',
    label: 'App Store Rating',
    description: 'From 180K+ reviews',
    icon: '⭐',
  },
  {
    id: '4',
    value: '99.9%',
    label: 'Uptime SLA',
    description: 'Always available',
    icon: '🚀',
  },
];

export function StatsSection() {
  return (
    <section className="py-16 px-4 bg-white dark:bg-gray-950 border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="text-center group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-200">
                {stat.icon}
              </div>
              <div className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-1">
                {stat.value}
              </div>
              <div className="text-base font-semibold text-primary-600 dark:text-primary-400 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}