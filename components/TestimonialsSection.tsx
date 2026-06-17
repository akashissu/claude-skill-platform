import type { Testimonial } from '@/types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Emily Rodriguez',
    role: 'Product Manager at Stripe',
    content:
      'SwiftTask completely transformed how our team manages projects. The real-time collaboration features are incredible, and the mobile app is buttery smooth. I recommend it to every PM I know.',
    rating: 5,
    avatar: 'ER',
    avatarColor: 'bg-primary-500',
  },
  {
    id: '2',
    name: 'James Liu',
    role: 'Freelance Designer',
    content:
      "As a freelancer juggling multiple clients, SwiftTask keeps me sane. The focus mode is a game-changer — I've doubled my output since switching. The iOS app is gorgeous too.",
    rating: 5,
    avatar: 'JL',
    avatarColor: 'bg-accent-500',
  },
  {
    id: '3',
    name: 'Aisha Thompson',
    role: 'Engineering Lead at Airbnb',
    content:
      'We migrated our entire engineering team to SwiftTask 6 months ago. The analytics dashboard gives us visibility we never had before. Deployment velocity is up 30% since then.',
    rating: 5,
    avatar: 'AT',
    avatarColor: 'bg-green-500',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-sm font-semibold rounded-full mb-4">
            Loved by Thousands
          </span>
          <h2 className="section-heading mb-4">
            What Our Users{' '}
            <span className="gradient-text">Are Saying</span>
          </h2>
          <p className="section-subheading">
            Join over 2 million people who trust SwiftTask to manage their work every day.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="card hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">
                    ★
                  </span>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 ${testimonial.avatarColor} rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}