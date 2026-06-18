import { BarChartWidget } from '@/components/BarChartWidget';
import { LineChartWidget } from '@/components/LineChartWidget';
import { StatCard } from '@/components/StatCard';
import { mockChartData } from '@/data/mockChartData';
import { mockKpis } from '@/data/mockKpis';

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {mockKpis.map((kpi) => (
          <StatCard key={kpi.id} {...kpi} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-2">
        <LineChartWidget data={mockChartData} />
        <BarChartWidget data={mockChartData} />
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Operational Notes</h3>
        <p className="mt-2 max-w-3xl text-sm leading-7 text-slate-500 dark:text-slate-400">
          This dashboard is intentionally powered by static mock data so the entire experience runs client-side with zero API
          setup. Admins can review KPI snapshots, growth charts, and user operations without waiting on backend services.
        </p>
      </section>
    </div>
  );
}
