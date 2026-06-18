interface NotificationToggleProps {
  label: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function NotificationToggle({ label, description, checked, onChange }: NotificationToggleProps) {
  return (
    <label className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 dark:border-slate-800 dark:bg-slate-950/60">
      <div>
        <p className="text-sm font-semibold text-slate-900 dark:text-white">{label}</p>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{description}</p>
      </div>
      <span className="relative inline-flex items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
          className="peer sr-only"
        />
        <span className="h-7 w-12 rounded-full bg-slate-300 transition peer-checked:bg-sky-500 dark:bg-slate-700" />
        <span className="pointer-events-none absolute left-1 h-5 w-5 rounded-full bg-white shadow transition peer-checked:translate-x-5" />
      </span>
    </label>
  );
}
