import { profileSettings } from '@/data/portalData';
import { SectionCard } from '@/components/SectionCard';

export function ProfileSettingsPanel() {
  return (
    <SectionCard title="Profile settings" eyebrow="Personal details" action="Edit profile">
      <div className="space-y-4">
        {profileSettings.map((setting) => (
          <div key={setting.label} className="rounded-3xl border border-white/10 bg-slate-950/35 p-4">
            <p className="text-sm uppercase tracking-[0.16em] text-slate-400">{setting.label}</p>
            <p className="mt-2 text-sm leading-6 text-white">{setting.value}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 rounded-3xl border border-cyan-400/20 bg-cyan-400/8 p-4">
        <p className="text-sm font-semibold text-cyan-100">Security center</p>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          Password reset, trusted devices, and two-step verification are managed through the protected account center.
        </p>
      </div>
    </SectionCard>
  );
}
