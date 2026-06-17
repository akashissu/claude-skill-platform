import Link from 'next/link';
import { Zap, Twitter, Linkedin, Youtube, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold text-lg">
                Tech<span className="text-brand-400">Summit</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              The world&apos;s premier virtual technology conference, connecting innovators globally.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Youtube, href: '#', label: 'YouTube' },
                { icon: Github, href: '#', label: 'GitHub' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-200 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: 'Event',
              links: ['Sessions', 'Speakers', 'Agenda', 'Networking', 'Sponsors'],
            },
            {
              title: 'Resources',
              links: ['Blog', 'Podcast', 'Newsletter', 'Community', 'Help Center'],
            },
            {
              title: 'Company',
              links: ['About', 'Careers', 'Press', 'Privacy Policy', 'Terms of Service'],
            },
          ].map(({ title, links }) => (
            <div key={title}>
              <h3 className="text-white font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">
            © 2024 TechSummit. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="live-indicator">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              Event Live Now
            </span>
            <span className="text-gray-600 text-sm">June 10–12, 2024</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
