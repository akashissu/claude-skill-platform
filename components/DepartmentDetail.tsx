import type { DepartmentSuite, SourceLink } from '@/types';

interface DepartmentDetailProps {
  department: DepartmentSuite;
  sources: SourceLink[];
}

export function DepartmentDetail({ department, sources }: DepartmentDetailProps) {
  return (
    <section className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="card border-slate-800 bg-slate-900/70">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary-300">{department.code}</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-white">{department.name}</h1>
          <p className="mt-5 text-base leading-8 text-slate-300">{department.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {department.buyers.map((buyer) => (
              <span key={buyer} className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs text-slate-300">
                {buyer}
              </span>
            ))}
          </div>
        </div>

        <div className="card border-slate-800 bg-slate-900/70">
          <dl className="grid gap-4 sm:grid-cols-2">
            <Info label="Skill count" value={department.skillCount.toString()} />
            <Info label="Parsed modules" value={department.modules.length.toString()} />
            <Info label="Common add-ons" value={department.addOns.length.toString()} />
            <Info label="Sources linked" value={sources.length.toString()} />
          </dl>
          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Activation rules</p>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
              {department.activationRules.map((rule) => (
                <li key={rule}>• {rule}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="card border-slate-800 bg-slate-900/70 p-0 overflow-hidden">
        <div className="border-b border-slate-800 px-6 py-5">
          <h2 className="text-2xl font-semibold text-white">Licensable modules and skill SKUs</h2>
        </div>
        <div className="divide-y divide-slate-800">
          {department.modules.map((module) => (
            <article key={module.name} className="grid gap-4 px-6 py-6 lg:grid-cols-[0.4fr_0.6fr]">
              <div>
                <h3 className="text-xl font-semibold text-white">{module.name}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{module.serviceTasks}</p>
                <p className="mt-4 text-sm text-primary-200">{module.creditGuidance}</p>
              </div>
              <div className="flex flex-wrap content-start gap-2">
                {module.skills.map((skill) => (
                  <span key={skill} className="rounded-full border border-primary-500/20 bg-primary-500/10 px-3 py-2 text-sm text-primary-50">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="card border-slate-800 bg-slate-900/70">
        <h2 className="text-2xl font-semibold text-white">Referenced sources</h2>
        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          {sources.map((source) => (
            <article key={source.id} className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-300">{source.id}</p>
              <h3 className="mt-2 font-semibold text-white">{source.title}</h3>
              <a href={source.url} className="mt-3 block break-all text-sm text-primary-200 hover:text-primary-100">
                {source.url}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4">
      <dt className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</dt>
      <dd className="mt-2 text-2xl font-semibold text-white">{value}</dd>
    </div>
  );
}
