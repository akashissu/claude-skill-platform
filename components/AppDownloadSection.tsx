import { DownloadButton } from '@/components/DownloadButton';
import { PhoneMockup } from '@/components/PhoneMockup';

export function AppDownloadSection() {
  return (
    <section id="download" className="relative overflow-hidden px-4 py-24" aria-labelledby="download-heading">
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute inset-0 bg-black/15" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90">
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            Available for iOS and Android
          </div>

          <h2 id="download-heading" className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
            Keep your care plan
            <br />
            <span className="text-cyan-200">close at hand</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-white/80 lg:mx-0 mx-auto">
            Access appointments, prescriptions, and secure care updates anywhere with the Northside Clinic mobile experience.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <DownloadButton platform="ios" href="#" />
            <DownloadButton platform="android" href="#" />
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
