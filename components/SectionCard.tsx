import { ReactNode } from 'react';

type SectionCardProps = {
  title: string;
  eyebrow?: string;
  action?: string;
  children: ReactNode;
  className?: string;
};

export function SectionCard({ title, eyebrow, action, children, className = '' }: SectionCardProps) {
  return (
    <section className={`section-card ${className}`.trim()}>
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">{eyebrow}</p> : null}
          <h2 className="mt-2 text-xl font-semibold text-white">{title}</h2>
        </div>
        {action ? (
          <button className="rounded-full border border-white/12 bg-white/5 px-3 py-1 text-sm font-medium text-slate-200 transition hover:bg-white/10">
            {action}
          </button>
        ) : null}
      </div>
      {children}
    </section>
  );
}
