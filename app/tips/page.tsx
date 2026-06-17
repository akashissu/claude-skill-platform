import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Productivity Tips - TodoMaster',
  description: 'Discover proven productivity tips and strategies to help you get more done with TodoMaster.',
};

export default function TipsPage() {
  const tips = [
    {
      number: '01',
      title: 'Use the Two-Minute Rule',
      description:
        'If a task takes less than two minutes to complete, do it immediately instead of adding it to your list. This prevents small tasks from piling up and cluttering your todo list.',
      category: 'Time Management',
      color: 'bg-blue-50 border-blue-200',
      textColor: 'text-blue-700',
    },
    {
      number: '02',
      title: 'Prioritize with the Eisenhower Matrix',
      description:
        'Categorize tasks by urgency and importance. Focus on tasks that are both urgent and important first. Delegate or schedule tasks that are important but not urgent.',
      category: 'Prioritization',
      color: 'bg-green-50 border-green-200',
      textColor: 'text-green-700',
    },
    {
      number: '03',
      title: 'Break Large Tasks into Smaller Steps',
      description:
        'Overwhelming tasks are often left undone. Break them into specific, actionable steps. Instead of "Write report", try "Outline report sections", "Write introduction", etc.',
      category: 'Task Planning',
      color: 'bg-purple-50 border-purple-200',
      textColor: 'text-purple-700',
    },
    {
      number: '04',
      title: 'Set Realistic Daily Goals',
      description:
        'Limit your daily task list to 3-5 high-priority items. Overloading your list leads to frustration. Focus on completing fewer tasks well rather than starting many tasks.',
      category: 'Goal Setting',
      color: 'bg-orange-50 border-orange-200',
      textColor: 'text-orange-700',
    },
    {
      number: '05',
      title: 'Review and Plan Each Morning',
      description:
        'Spend 5-10 minutes each morning reviewing your task list. Identify your top priorities for the day and make sure your list reflects your current goals and deadlines.',
      category: 'Daily Habits',
      color: 'bg-yellow-50 border-yellow-200',
      textColor: 'text-yellow-700',
    },
    {
      number: '06',
      title: 'Celebrate Completed Tasks',
      description:
        'Acknowledge your progress by reviewing completed tasks. This builds momentum and motivation. Do not delete completed tasks immediately — let them remind you of your achievements.',
      category: 'Motivation',
      color: 'bg-pink-50 border-pink-200',
      textColor: 'text-pink-700',
    },
    {
      number: '07',
      title: 'Use Categories to Stay Organized',
      description:
        'Group related tasks by category such as Work, Personal, Health, or Finance. This helps you batch similar tasks together and switch contexts less frequently during your day.',
      category: 'Organization',
      color: 'bg-teal-50 border-teal-200',
      textColor: 'text-teal-700',
    },
    {
      number: '08',
      title: 'Do Not Multitask',
      description:
        'Focus on one task at a time. Multitasking reduces quality and increases the time needed to complete tasks. Use your todo list to stay focused on the current task.',
      category: 'Focus',
      color: 'bg-red-50 border-red-200',
      textColor: 'text-red-700',
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Productivity Tips</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Proven strategies to help you work smarter, stay focused, and accomplish more
          with your todo list.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {tips.map((tip) => (
          <div
            key={tip.number}
            className={`border rounded-xl p-6 ${tip.color} transition-transform duration-200 hover:-translate-y-1`}
          >
            <div className="flex items-start gap-4">
              <span className={`text-3xl font-bold ${tip.textColor} opacity-40`}>{tip.number}</span>
              <div>
                <span className={`text-xs font-semibold uppercase tracking-wide ${tip.textColor} mb-2 block`}>
                  {tip.category}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-3">Ready to Be More Productive?</h2>
        <p className="text-gray-600 mb-6">
          Apply these tips with TodoMaster and start accomplishing your goals today.
        </p>
        <Link href="/" className="btn-primary inline-block">
          Go to My Tasks
        </Link>
      </div>
    </div>
  );
}
