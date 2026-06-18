import { ControlPlaneSection } from '@/components/ControlPlaneSection';
import { getCatalogData } from '@/lib/catalog';

export default function FeaturesPage() {
  const data = getCatalogData();

  return (
    <div className="pb-12">
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="max-w-4xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-300">Platform controls</p>
          <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">Activation, approvals, billing, and audit behavior</h1>
          <p className="text-base leading-8 text-slate-300">
            The requested platform is the control plane sitting above agents and skills. It decides what can run, who can run it,
            which credits are charged, and when a human approval gate must stop execution.
          </p>
        </div>
      </section>
      <ControlPlaneSection controls={data.activationControls} />
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              title: 'Routing dimensions',
              body: 'Route by department, industry, task type, risk tier, user role, and data classification.',
            },
            {
              title: 'Metering dimensions',
              body: 'Charge by credit value, skill complexity, tool usage, approvals required, and autonomous execution scope.',
            },
            {
              title: 'Enterprise assurances',
              body: 'Preserve auditable logs, quarantine unsafe skills, pin third-party commits, and gate risky writes.',
            },
          ].map((card) => (
            <article key={card.title} className="card border-slate-800 bg-slate-900/70">
              <h2 className="text-xl font-semibold text-white">{card.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{card.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
