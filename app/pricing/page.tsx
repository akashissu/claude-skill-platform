import type { Metadata } from 'next';
import { AppDownloadSection } from '@/components/AppDownloadSection';
import type { PricingPlan } from '@/types';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Simple, transparent pricing for individuals and teams. Start free, upgrade when you need more.',
};

const plans: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    period: 'forever',
    description: 'Perfect for individuals getting started with task management.',
    features: [
      'Up to 50 tasks',
      '1 workspace',
      'Basic analytics',
      'Mobile app access',
      'Email support',
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 9,
    period: 'month',
    description: 'For power users who need unlimited tasks and advanced features.',
    features: [
      'Unlimited tasks',
      '5 workspaces',
      'Advanced analytics',
      'Focus mode & Pomodoro',
      'Calendar integration',
      'Offline mode',
      'Priority support',
    ],
    cta: 'Start Pro Trial',
    highlighted: true,
  },
  {
    id: 'team',
    name: 'Team',
    price: 19,
    period: 'month',
    description: 'Built for teams that need collaboration and admin controls.',
    features: [
      'Everything in Pro',
      'Unlimited workspaces',
      'Team collaboration',
      'Admin dashboard',
      'Custom workflows',
      'SSO & SAML',
      'Dedicated support',
      'SLA guarantee',
    ],
    cta: 'Start Team Trial',
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Page Hero */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-sm font-semibold rounded-full mb-4">
            Simple Pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Plans for Every{' '}
            <span className="gradient-text">Stage of Growth</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-2xl p-8 border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  plan.highlighted
                    ? 'border-primary-500 bg-primary-600 text-white shadow-xl shadow-primary-500/30 scale-105'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
                }`}
              >
                {plan.highlighted && (
                  <div className="text-center mb-4">
                    <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full uppercase tracking-wide">
                      Most Popular
                    </span>
                  </div>
                )}
                <h3
                  className={`text-2xl font-bold mb-2 ${
                    plan.highlighted ? 'text-white' : 'text-gray-900 dark:text-white'
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${
                    plan.highlighted ? 'text-primary-100' : 'text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {plan.description}
                </p>
                <div className="mb-6">
                  <span
                    className={`text-5xl font-black ${
                      plan.highlighted ? 'text-white' : 'text-gray-900 dark:text-white'
                    }`}
                  >
                    ${plan.price}
                  </span>
                  <span
                    className={`text-sm ml-1 ${
                      plan.highlighted ? 'text-primary-100' : 'text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    /{plan.period}
                  </span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span
                        className={`text-lg ${
                          plan.highlighted ? 'text-white' : 'text-primary-500'
                        }`}
                      >
                        ✓
                      </span>
                      <span
                        className={`text-sm ${
                          plan.highlighted ? 'text-primary-100' : 'text-gray-600 dark:text-gray-300'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                    plan.highlighted
                      ? 'bg-white text-primary-600 hover:bg-primary-50 shadow-lg'
                      : 'bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>

          <p className="text-center text-gray-500 dark:text-gray-400 mt-10 text-sm">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </section>

      <AppDownloadSection />
    </div>
  );
}