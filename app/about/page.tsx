import type { Metadata } from 'next';
import { AppDownloadSection } from '@/components/AppDownloadSection';
import type { TeamMember } from '@/types';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about the team behind SwiftTask and our mission to make productivity accessible to everyone.',
};

const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'CEO & Co-Founder',
    bio: 'Former product lead at Notion. Passionate about building tools that help people do their best work.',
    avatar: 'SC',
    color: 'bg-primary-500',
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    role: 'CTO & Co-Founder',
    bio: 'Ex-Google engineer with 12 years of experience building scalable mobile and web applications.',
    avatar: 'MJ',
    color: 'bg-accent-500',
  },
  {
    id: '3',
    name: 'Priya Patel',
    role: 'Head of Design',
    bio: 'Award-winning UX designer who believes great design should be invisible and intuitive.',
    avatar: 'PP',
    color: 'bg-green-500',
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Head of Growth',
    bio: 'Growth expert who scaled three startups from 0 to 1M users. Loves data and experiments.',
    avatar: 'DK',
    color: 'bg-orange-500',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Mission Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary-50 to-accent-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-sm font-semibold rounded-full mb-4">
            Our Story
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Built by Makers,{' '}
            <span className="gradient-text">for Makers</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            SwiftTask was born out of frustration. We were tired of switching between five different
            apps just to manage our daily work. In 2022, we set out to build the one app that does
            it all — beautifully, simply, and powerfully.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            Today, over 2 million people trust SwiftTask to manage their work, collaborate with
            their teams, and achieve their goals. We&apos;re just getting started.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What We Believe In
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '💡',
                title: 'Simplicity First',
                desc: 'Complexity is the enemy of productivity. We obsess over making every feature feel effortless.',
              },
              {
                icon: '🤝',
                title: 'People Over Process',
                desc: 'Tools should adapt to how people work, not the other way around. We build for humans.',
              },
              {
                icon: '🚀',
                title: 'Continuous Improvement',
                desc: 'We ship fast, learn from our users, and iterate relentlessly. Good enough is never enough.',
              },
            ].map((value, idx) => (
              <div key={idx} className="card text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">
            Meet the Team
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            A small, passionate team on a big mission.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="card text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 ${member.color} rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4`}
                >
                  {member.avatar}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1">{member.name}</h3>
                <p className="text-primary-600 dark:text-primary-400 text-sm font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {member.bio}
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