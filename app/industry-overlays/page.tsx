import { IndustryOverlayGrid } from '@/components/IndustryOverlayGrid';
import { getCatalogData } from '@/lib/catalog';

export default function IndustryOverlaysPage() {
  const data = getCatalogData();

  return (
    <div className="pb-10">
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="max-w-4xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-300">Industry overlays</p>
          <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">Vertical suites layered on top of department capabilities</h1>
          <p className="text-base leading-8 text-slate-300">
            The ticket calls for 20 industry overlays with 24 skills each. This page packages those overlays as add-ons that bring
            sector-specific workflows, terminology, evidence packs, and compliance constraints into the control plane.
          </p>
        </div>
      </section>
      <IndustryOverlayGrid overlays={data.overlays} />
    </div>
  );
}
