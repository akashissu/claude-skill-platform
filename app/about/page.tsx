import Link from "next/link";

export default function AboutPage() {
  const features = [
    {
      icon: "✅",
      title: "Smart Task Management",
      description:
        "Create, organize, and track your tasks with ease. Set priorities, categories, and due dates to stay on top of everything.",
    },
    {
      icon: "📊",
      title: "Productivity Insights",
      description:
        "Visualize your progress with detailed statistics. Track completion rates, priority breakdowns, and category distributions.",
    },
    {
      icon: "🔍",
      title: "Powerful Filtering",
      description:
        "Quickly find any task with real-time search and filter by status (active/completed) or priority level.",
    },
    {
      icon: "💾",
      title: "Local Storage Persistence",
      description:
        "Your tasks are automatically saved to your browser's local storage — no account required, no data sent to servers.",
    },
    {
      icon: "⚙️",
      title: "Customizable Settings",
      description:
        "Personalize your experience with custom categories, default priorities, and display preferences.",
    },
    {
      icon: "📱",
      title: "Responsive Design",
      description:
        "TaskFlow works beautifully on all devices — desktop, tablet, and mobile — so you can manage tasks anywhere.",
    },
  ];

  const tips = [
    "Break large tasks into smaller, manageable subtasks.",
    "Assign priorities to focus on what matters most.",
    "Use categories to group related tasks together.",
    "Set due dates to avoid missing important deadlines.",
    "Review your Stats page regularly to track your progress.",
    "Clear completed tasks periodically to keep your list clean.",
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About TaskFlow</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          TaskFlow is a modern, lightweight task management application designed to help you stay
          organized and productive without the complexity of enterprise tools.
        </p>
      </div>

      <div className="card mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h2>
        <p className="text-gray-600 leading-relaxed">
          We believe that productivity tools should be simple, fast, and respectful of your privacy.
          TaskFlow was built with a single goal: to give you a clean, distraction-free space to
          manage your daily tasks. No subscriptions, no data collection, no bloat — just a powerful
          todo app that works right in your browser.
        </p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature) => (
            <div key={feature.title} className="card hover:shadow-md transition-shadow duration-200">
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card mb-10 bg-blue-50 border-blue-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">💡 Productivity Tips</h2>
        <ul className="space-y-2">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start gap-2 text-gray-700">
              <span className="text-blue-500 font-bold mt-0.5">→</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Ready to get started?</h2>
        <p className="text-gray-500 mb-6">Start managing your tasks today — it only takes a few seconds.</p>
        <Link href="/" className="btn-primary inline-block text-lg px-8 py-3">
          Go to My Tasks →
        </Link>
      </div>
    </div>
  );
}
