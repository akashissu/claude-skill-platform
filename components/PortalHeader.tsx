import { portalOverview } from '@/data/portalData';

export function PortalHeader() {
  return (
    <header className="overflow-hidden rounded-[32px] border border-cyan-400/20 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.24),_transparent_32%),linear-gradient(135deg,_rgba(15,23,42,0.98),_rgba(15,23,42,0.9)_42%,_rgba(17,24,39,0.96))] p-8 shadow-2xl shadow-cyan-950/30">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-300" />
            Secure session active · {portalOverview.securityStatus}
          </div>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Welcome back, {portalOverview.patientName}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            Manage appointments, review health updates, and stay connected with your care team from one protected patient portal.
          </p>
        </div>

        <div className="grid min-w-full gap-4 sm:grid-cols-2 lg:min-w-[360px]">
          <div className="rounded-2xl border border-white/12 bg-white/6 p-4">
            <p className="text-sm text-slate-400">Next visit</p>
            <p className="mt-2 text-lg font-semibold text-white">{portalOverview.nextVisit}</p>
            <p className="mt-1 text-sm text-slate-300">{portalOverview.careTeam}</p>
          </div>
          <div className="rounded-2xl border border-white/12 bg-white/6 p-4">
            <p className="text-sm text-slate-400">Plan</p>
            <p className="mt-2 text-lg font-semibold text-white">{portalOverview.plan}</p>
            <p className="mt-1 text-sm text-slate-300">Member ID {portalOverview.memberId}</p>
          </div>
        </div>
      </div>
    </header>
  );
}
