import Link from 'next/link';

interface CatalogHeroProps {
  totalSkills: number;
  departmentCount: number;
  overlayCount: number;
}

export function CatalogHero({ totalSkills, departmentCount, overlayCount }: CatalogHeroProps) {
  return (
    <section className="border-b border-slate-800 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.32),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(168,85,247,0.22),_transparent_24%),linear-gradient(180deg,_#020617_0%,_#0f172a_100%)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-24">
        <div className="space-y-8">
          <div className="inline-flex rounded-full border border-primary-500/40 bg-primary-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.26em] text-primary-200">
            Control plane for licensable agent skills
          </div>
          <div className="space-y-4">
            <h1 className="max-w-4xl text-4xl font-black tracking-tight text-white md:text-6xl">
              Turn Claude Skills into a searchable, metered enterprise platform.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
              This implementation packages department suites, industry overlays, credit economics, approval gates,
              and source lineage into a single production-safe catalog for project-management orchestration teams.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/departments" className="btn-primary">
              Explore department suites
            </Link>
            <Link href="/pricing" className="btn-secondary">
              Review pricing model
            </Link>
          </div>
        </div>

        <div className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/60 backdrop-blur">
          <div className="grid grid-cols-3 gap-3">
            <Metric value={departmentCount.toString()} label="Department suites" />
            <Metric value={overlayCount.toString()} label="Overlay suites" />
            <Metric value={totalSkills.toLocaleString()} label="Catalog skills" />
          </div>
          <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">Core platform behavior</p>
            <ul className="mt-3 space-y-3 text-sm leading-6 text-emerald-50/90">
              <li>• License skills by department, industry, task type, and risk tier.</li>
              <li>• Route agents to approved skills with metering and approval gates.</li>
              <li>• Preserve audit trails for approvals, tool use, source files, and charged credits.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
      <div className="text-2xl font-bold text-white">{value}</div>
      <div className="mt-1 text-sm text-slate-400">{label}</div>
    </div>
  );
}
