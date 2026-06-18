import Link from 'next/link';
import type { DepartmentSuite } from '@/types';

interface DepartmentGridProps {
  departments: DepartmentSuite[];
  title?: string;
  description?: string;
}

export function DepartmentGrid({ departments, title = 'Department suites', description }: DepartmentGridProps) {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16">
      <div className="max-w-4xl space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-300">Department catalog</p>
        <h2 className="section-heading">{title}</h2>
        <p className="section-subheading">
          {description ??
            'Every suite exposes role-ready modules, activation rules, add-ons, and reusable skill SKUs tuned for a specific operational domain.'}
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
        {departments.map((department) => (
          <article key={department.slug} className="card flex h-full flex-col border-slate-800 bg-slate-900/70">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-300">{department.code}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{department.name}</h3>
              </div>
              <div className="rounded-full border border-primary-400/30 bg-primary-500/10 px-3 py-1 text-sm font-semibold text-primary-100">
                {department.skillCount} skills
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-300">{department.summary}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {department.buyers.slice(0, 4).map((buyer) => (
                <span key={buyer} className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs text-slate-300">
                  {buyer}
                </span>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Modules surfaced</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-200">
                {department.modules.slice(0, 3).map((module) => (
                  <li key={module.name}>• {module.name}</li>
                ))}
              </ul>
            </div>
            <div className="mt-6 flex items-center justify-between text-sm">
              <span className="text-slate-500">{department.modules.length} parsed modules</span>
              <Link href={`/departments/${department.slug}`} className="font-semibold text-primary-300 hover:text-primary-200">
                View suite →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
