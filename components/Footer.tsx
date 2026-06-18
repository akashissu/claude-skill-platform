export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-medium text-slate-200">Enterprise Claude Skills Catalog</p>
          <p>Built for PAP-438 as a production-safe Next.js catalog experience.</p>
        </div>
        <div className="text-slate-500">Department suites, industry overlays, pricing, controls, and source appendix.</div>
      </div>
    </footer>
  );
}
