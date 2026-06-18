import { DepartmentGrid } from '@/components/DepartmentGrid';
import { getCatalogData } from '@/lib/catalog';

export default function DepartmentsPage() {
  const data = getCatalogData();

  return (
    <div className="pb-10">
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="max-w-4xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-300">Department suites</p>
          <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">Expanded enterprise catalog by department</h1>
          <p className="text-base leading-8 text-slate-300">
            Most department suites package 48 productizable skills across eight modules. Marketing expands to 72 skills across
            twelve modules. Use these suite pages to review buyers, source links, modules, and skill SKU structure.
          </p>
        </div>
      </section>
      <DepartmentGrid departments={data.departments} />
    </div>
  );
}
