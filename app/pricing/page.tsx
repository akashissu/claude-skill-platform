import { PricingOverview } from '@/components/PricingOverview';
import { getCatalogData } from '@/lib/catalog';

export default function PricingPage() {
  const data = getCatalogData();

  return (
    <div className="mx-auto max-w-7xl px-6 py-14">
      <div className="max-w-3xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-300">Pricing architecture</p>
        <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">Subscription tiers and skill-credit economics</h1>
        <p className="text-base leading-8 text-slate-300">
          The platform pricing page makes the ticket’s commercial model explicit: base control-plane access, suite licenses,
          overlay licenses, and metered skill execution with approval-aware credit values.
        </p>
      </div>
      <PricingOverview packages={data.packages} tiers={data.tiers} creditBands={data.creditBands} />
    </div>
  );
}
