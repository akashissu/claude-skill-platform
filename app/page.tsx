import { CatalogHero } from '@/components/CatalogHero';
import { CatalogStats } from '@/components/CatalogStats';
import { ControlPlaneSection } from '@/components/ControlPlaneSection';
import { DepartmentGrid } from '@/components/DepartmentGrid';
import { IndustryOverlayGrid } from '@/components/IndustryOverlayGrid';
import { PricingOverview } from '@/components/PricingOverview';
import { SourceAppendix } from '@/components/SourceAppendix';
import { getCatalogData, getCatalogStats, getTopDepartments, getTopOverlays } from '@/lib/catalog';

export default function HomePage() {
  const data = getCatalogData();
  const stats = getCatalogStats();

  return (
    <div className="pb-8">
      <CatalogHero
        departmentCount={stats.departments}
        overlayCount={stats.overlays}
        totalSkills={stats.totalSkillCount}
      />
      <CatalogStats
        stats={[
          {
            label: 'Department modules',
            value: stats.moduleCount.toString(),
            description: 'Parsed licensable modules surfaced directly from the supplied department suite specification.',
          },
          {
            label: 'Department skill SKUs',
            value: stats.departmentSkillCount.toLocaleString(),
            description: 'Role-based skill inventory counted from the ticket-defined department package sizes.',
          },
          {
            label: 'Overlay skill SKUs',
            value: stats.overlaySkillCount.toLocaleString(),
            description: 'Industry overlays extend the base catalog with vertical playbooks, controls, and terminology.',
          },
          {
            label: 'Source URLs',
            value: data.sources.length.toString(),
            description: 'Research appendix entries preserved inside the app for implementation review and downstream QA.',
          },
        ]}
      />
      <PricingOverview packages={data.packages} tiers={data.tiers} creditBands={data.creditBands} />
      <DepartmentGrid
        departments={getTopDepartments(6)}
        title="Expanded department suites"
        description="The ticket prioritizes department-based packaging first, with each suite bundling reusable modules, explicit skill SKUs, and activation rules."
      />
      <IndustryOverlayGrid overlays={getTopOverlays(6)} />
      <ControlPlaneSection controls={data.activationControls} />
      <SourceAppendix sources={data.sources} limit={8} />
    </div>
  );
}
