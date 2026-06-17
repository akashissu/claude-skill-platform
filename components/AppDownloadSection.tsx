import { DownloadButton } from '@/components/DownloadButton';
import { PhoneMockup } from '@/components/PhoneMockup';

export function AppDownloadSection() {
  return (
    <section
      id="download"
      className="relative overflow-hidden py-24 px-4"
      aria-labelledby="download-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Now Available on All Platforms</span>
            </div>

            <h2
              id="download-heading"
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
            >
              Take Your
              <br />
              <span className="text-yellow-300">Productivity</span>
              <br />
              Everywhere
            </h2>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
              Download SwiftTask on iOS or Android and experience the power of smart task
              management in your pocket. Sync across all your devices, work offline, and
              never miss a deadline again.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10">
              {[
                { value: '4.9★', label: 'App Store Rating' },
                { value: '2M+', label: 'Active Users' },
                { value: '50M+', label: 'Tasks Completed' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-white/60 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <DownloadButton
                platform="ios"
                href="#"
              />
              <DownloadButton
                platform="android"
                href="#"
              />
            </div>

            {/* QR Code hint */}
            <p className="mt-6 text-white/50 text-sm">
              Or scan the QR code on your phone to download instantly
            </p>
          </div>

          {/* Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}