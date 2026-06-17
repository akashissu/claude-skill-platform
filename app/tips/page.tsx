import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Productivity Tips - TodoMaster',
  description: 'Discover proven productivity tips and strategies to help you get more done with TodoMaster.',
};

const tips = [
  {
    id: 1,
    category: 'Getting Started',
    icon: '🚀',
    title: 'Start with a Brain Dump',
    content: 'Begin each week by writing down every task, idea, and obligation that comes to mind. Don\'t filter or prioritize yet — just get everything out of your head and into your task list. This clears mental clutter and ensures nothing falls through the cracks.',
    actionable: 'Set aside 10 minutes every Monday morning to do a complete brain dump into TodoMaster.',
  },
  {
    id: 2,
    category: 'Prioritization',
    icon: '🎯',
    title: 'Use the Priority System Effectively',
    content: 'Not all tasks are created equal. Use the High priority for tasks with deadlines or significant consequences. Medium priority for important but not urgent tasks. Low priority for nice-to-haves that can wait. Aim to complete all high-priority tasks before moving to medium ones.',
    actionable: 'Limit yourself to 3 high-priority tasks per day to avoid overwhelm.',
  },
  {
    id: 3,
    category: 'Organization',
    icon: '📂',
    title: 'Leverage Categories',
    content: 'Grouping tasks by category (Work, Personal, Health, Learning) helps you batch similar activities together. Context switching between different types of work is mentally taxing. By working on all your "Work" tasks in one block, you maintain focus and momentum.',
    actionable: 'Try time-blocking: dedicate specific hours to specific categories each day.',
  },
  {
    id: 4,
    category: 'Productivity',
    icon: '⏰',
    title: 'The Two-Minute Rule',
    content: 'If a task takes less than two minutes to complete, do it immediately rather than adding it to your list. This prevents small tasks from piling up and cluttering your todo list with trivial items that create mental overhead.',
    actionable: 'Before adding a task, ask yourself: "Can I do this right now in under 2 minutes?"',
  },
  {
    id: 5,
    category: 'Habits',
    icon: '🌅',
    title: 'Daily Review Ritual',
    content: 'Spend 5 minutes at the end of each day reviewing your task list. Mark completed items, reschedule anything that didn\'t get done, and set your top 3 priorities for tomorrow. This simple habit dramatically improves your follow-through rate.',
    actionable: 'Set a daily reminder at 5 PM for your end-of-day review.',
  },
  {
    id: 6,
    category: 'Mindset',
    icon: '🧠',
    title: 'Celebrate Small Wins',
    content: 'Every completed task is a victory. The act of checking off a task releases dopamine, which motivates you to keep going. Don\'t underestimate the power of momentum — completing small tasks builds the energy and confidence to tackle bigger ones.',
    actionable: 'Start each day with one easy task you can complete quickly to build momentum.',
  },
  {
    id: 7,
    category: 'Focus',
    icon: '🔕',
    title: 'Single-Tasking Over Multi-Tasking',
    content: 'Research consistently shows that multitasking reduces productivity by up to 40%. Instead, focus on one task at a time. Use the filter feature in TodoMaster to show only active tasks, reducing visual noise and helping you concentrate on what\'s in front of you.',
    actionable: 'Use the "Active" filter view when working to hide completed tasks and reduce distractions.',
  },
  {
    id: 8,
    category: 'Maintenance',
    icon: '🧹',
    title: 'Weekly Cleanup',
    content: 'Use the "Clear Completed" feature at the end of each week to archive finished tasks. A clean task list feels refreshing and motivating. Regularly removing completed items prevents your list from becoming overwhelming and keeps it focused on what still needs attention.',
    actionable: 'Every Friday, use the Clear Completed button to start the weekend with a clean slate.',
  },
];

const categories = ['All', 'Getting Started', 'Prioritization', 'Organization', 'Productivity', 'Habits', 'Mindset', 'Focus', 'Maintenance'];

export default function TipsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Productivity Tips</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Proven strategies to help you get more done, reduce stress, and build lasting productive habits.
        </p>
      </div>

      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {categories.map((cat) => (
          <span
            key={cat}
            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
          >
            {cat}
          </span>
        ))}
      </div>

      <div className="space-y-6">
        {tips.map((tip) => (
          <div key={tip.id} className="card hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start gap-4">
              <div className="text-4xl flex-shrink-0">{tip.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                    {tip.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{tip.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-4">{tip.content}</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm font-semibold text-green-800 mb-1">💡 Action Step</p>
                  <p className="text-sm text-green-700">{tip.actionable}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 card bg-blue-600 text-white text-center">
        <h2 className="text-2xl font-bold mb-3">Put These Tips Into Practice</h2>
        <p className="text-blue-100 mb-6">
          The best productivity system is the one you actually use. Start simple, stay consistent.
        </p>
        <Link
          href="/"
          className="inline-block bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-blue-50 transition-colors duration-200"
        >
          Go to My Tasks
        </Link>
      </div>
    </div>
  );
}
