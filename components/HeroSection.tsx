import Link from 'next/link';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 px-4 bg-gradient-to-br from-gray-50 via-primary-50/30 to-accent-50/20 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100/50 dark:bg-primary-900/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-100/50 dark:bg-accent-900/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/40 border border-primary-200 dark:border-primary-800 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-primary-700 dark:text-primary-300 text-sm font-semibold">
              🎉 Version 3.0 is here — Smarter than ever
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
            Manage Tasks.
            <br />
            <span className="gradient-text">Achieve More.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            SwiftTask is the all-in-one productivity app that helps you organize your work,
            collaborate with your team, and stay focused on what truly matters.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/pricing" className="btn-primary text-base px-8 py-4">
              <span>Start for Free</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a href="#download" className="btn-secondary text-base px-8 py-4">
              <span>📱</span>
              <span>Download App</span>
            </a>
          </div>

          {/* Social proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {['bg-primary-400', 'bg-accent-400', 'bg-green-400', 'bg-orange-400', 'bg-red-400'].map(
                  (color, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 ${color} rounded-full border-2 border-white dark:border-gray-950 flex items-center justify-center text-white text-xs font-bold`}
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  )
                )}
              </div>
              <span>2M+ happy users</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-300 dark:bg-gray-700" />
            <div className="flex items-center gap-1">
              {'★★★★★'.split('').map((star, i) => (
                <span key={i} className="text-yellow-400">{star}</span>
              ))}
              <span className="ml-1">4.9/5 rating</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-300 dark:bg-gray-700" />
            <span>No credit card required</span>
          </div>
        </div>
      </div>
    </section>
  );
}