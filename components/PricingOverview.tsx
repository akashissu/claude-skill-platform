import type { CreditBand, PackageModel, SubscriptionTier } from '@/types';

interface PricingOverviewProps {
  packages: PackageModel[];
  tiers: SubscriptionTier[];
  creditBands: CreditBand[];
}

export function PricingOverview({ packages, tiers, creditBands }: PricingOverviewProps) {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-300">Packaging and monetization</p>
        <h2 className="section-heading">Sell capability modules, not one-off prompts.</h2>
        <p className="section-subheading">
          The platform commercial model combines suite licensing, industry overlays, skill-credit metering, and
          regulated controls. This keeps procurement simple while preserving granular billing and approval policies.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-5">
        {packages.map((item) => (
          <article key={item.name} className="card h-full border-slate-800 bg-slate-900/70">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-300">{item.name}</p>
            <p className="mt-4 text-lg font-semibold text-white">{item.unlocks}</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.monetization}</p>
          </article>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="card border-slate-800 bg-slate-900/70 p-0 overflow-hidden">
          <div className="border-b border-slate-800 px-6 py-5">
            <h3 className="text-xl font-semibold text-white">Suggested subscription tiers</h3>
          </div>
          <div className="divide-y divide-slate-800">
            {tiers.map((tier) => (
              <div key={tier.name} className="grid gap-3 px-6 py-5 md:grid-cols-4 md:items-start">
                <div>
                  <p className="font-semibold text-white">{tier.name}</p>
                  <p className="mt-1 text-sm text-slate-400">{tier.targetBuyer}</p>
                </div>
                <p className="text-sm leading-6 text-slate-300">{tier.includedSuites}</p>
                <p className="text-sm leading-6 text-slate-300">{tier.creditLogic}</p>
                <p className="text-sm leading-6 text-slate-300">{tier.controls}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card border-slate-800 bg-slate-900/70">
          <h3 className="text-xl font-semibold text-white">Credit guide</h3>
          <div className="mt-5 space-y-4">
            {creditBands.map((band) => (
              <div key={band.credits} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
                <p className="font-semibold text-primary-200">{band.credits}</p>
                <p className="mt-1 text-sm leading-6 text-slate-300">{band.workload}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
