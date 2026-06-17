import type { Testimonial } from '@/types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Ava Kim',
    role: 'Event producer',
    content: 'The agenda and chat experience make it easy for attendees to stay oriented all day long.',
    rating: 5,
    avatar: 'AK',
    avatarColor: 'bg-primary-500',
  },
  {
    id: '2',
    name: 'Jonah Reed',
    role: 'Community lead',
    content: 'Networking suggestions feel intentional instead of random, which is exactly what virtual events need.',
    rating: 5,
    avatar: 'JR',
    avatarColor: 'bg-accent-500',
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-shell">
      <div className="mb-6">
        <p className="eyebrow">Attendee feedback</p>
        <h2 className="mt-3 text-3xl font-bold text-white">A virtual event experience that feels organized and welcoming.</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <article key={testimonial.id} className="panel">
            <p className="text-sm leading-6 text-slate-200">“{testimonial.content}”</p>
            <div className="mt-4 flex items-center gap-3">
              <div className={`flex h-10 w-10 items-center justify-center rounded-full ${testimonial.avatarColor} text-sm font-bold text-white`}>
                {testimonial.avatar}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                <p className="text-xs text-slate-400">{testimonial.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
