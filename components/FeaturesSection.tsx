import type { Feature } from '@/types';

const features: Feature[] = [
  {
    id: '1',
    title: 'Agenda clarity',
    description: 'Readable session cards with timing, rooms, speakers, and saved-state feedback.',
    icon: '🗓️',
    color: 'blue',
  },
  {
    id: '2',
    title: 'Live participation',
    description: 'Attendees can jump into chat and keep the conversation moving without leaving the page.',
    icon: '💬',
    color: 'purple',
  },
  {
    id: '3',
    title: 'Networking momentum',
    description: 'Suggested introductions and topic filters make it easier to find the right people.',
    icon: '🤝',
    color: 'green',
  },
];

export function FeaturesSection() {
  return (
    <section className="section-shell">
      <div className="mb-6">
        <p className="eyebrow">Platform highlights</p>
        <h2 className="mt-3 text-3xl font-bold text-white">Key capabilities that support a virtual event day.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.id} className="panel">
            <div className="text-3xl">{feature.icon}</div>
            <h3 className="mt-4 text-xl font-bold text-white">{feature.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
