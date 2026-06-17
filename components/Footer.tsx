import Link from 'next/link';
import { Zap, Twitter, Linkedin, Youtube, Github } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-white text-lg">
                Tech<span className="text-brand-400">Summit</span> 2024
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              The premier virtual technology conference connecting developers, designers, and tech leaders worldwide.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Twitter className="w-4 h-4" />, href: '#' },
                { icon: <Linkedin className="w-4 h-4" />, href: '#' },
                { icon: <Youtube className="w-4 h-4" />, href: '#' },
                { icon: <Github className="w-4 h-4" />, href: '#' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  className="w-8 h-8 bg-white/10 hover:bg-brand-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Event */}
          <div>
            <h3 className="text-white font-semibold mb-4">Event</h3>
            <ul className="space-y-2">
              {['Sessions', 'Speakers', 'Schedule', 'Workshops', 'Sponsors'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-brand-400 text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {['FAQ', 'Code of Conduct', 'Accessibility', 'Press Kit', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-brand-400 text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-4">Get notified about upcoming events and session recordings.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-500 transition-colors"
              />
              <button className="bg-brand-600 hover:bg-brand-500 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 TechSummit. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <Link key={item} href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
