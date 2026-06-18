interface ControlPlaneSectionProps {
  controls: string[];
}

export function ControlPlaneSection({ controls }: ControlPlaneSectionProps) {
  return (
    <section className="border-y border-slate-800 bg-slate-900/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-300">Governance</p>
          <h2 className="section-heading">A control plane, not just a catalog.</h2>
          <p className="section-subheading">
            The requested behavior emphasizes activation controls, human approvals, audit logging, and safe third-party
            skill onboarding. This section turns those requirements into an operator-facing checklist.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {controls.map((control) => (
            <article key={control} className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
              <p className="text-sm leading-7 text-slate-200">{control}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
