import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-400 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-sm">ST</span>
              </div>
              <span className="font-bold text-xl text-white">
                Swift<span className="gradient-text">Task</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              The smart productivity app that helps you manage tasks, collaborate with your team,
              and stay focused on what matters most.
            </p>
            <div className="flex gap-3">
              {/* Social Links */}
              {[
                { label: 'Twitter', icon: 'T', href: '#' },
                { label: 'LinkedIn', icon: 'in', href: '#' },
                { label: 'GitHub', icon: 'GH', href: '#' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center text-xs font-bold text-gray-400 hover:text-white transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {[
                { label: 'Features', href: '/features' },
                { label: 'Pricing', href: '/pricing' },
                { label: 'Changelog', href: '#' },
                { label: 'Roadmap', href: '#' },
                { label: 'Status', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Blog', href: '#' },
                { label: 'Careers', href: '#' },
                { label: 'Press Kit', href: '#' },
                { label: 'Contact', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Download */}
          <div>
            <h4 className="text-white font-semibold mb-4">Download</h4>
            <p className="text-sm mb-4">Get SwiftTask on your favorite platform.</p>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 rounded-xl px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 group"
              >
                <span className="text-2xl">🍎</span>
                <div>
                  <p className="text-xs text-gray-500">Download on the</p>
                  <p className="text-sm font-semibold text-white">App Store</p>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 bg-gray-800 hover:bg-gray-700 rounded-xl px-4 py-3 transition-all duration-200 hover:-translate-y-0.5 group"
              >
                <span className="text-2xl">▶️</span>
                <div>
                  <p className="text-xs text-gray-500">Get it on</p>
                  <p className="text-sm font-semibold text-white">Google Play</p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm">
            © {currentYear} SwiftTask, Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm hover:text-white transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}