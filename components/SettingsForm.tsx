'use client';

import { useEffect, useState } from 'react';
import { NotificationToggle } from '@/components/NotificationToggle';
import { defaultSettings, persistSettings, readStoredSettings } from '@/src/lib/storage';
import { SettingsState } from '@/types/admin';

const preferenceLabels = [
  {
    key: 'emailNotifications' as const,
    label: 'Email notifications',
    description: 'Receive a digest for account activity, daily changes, and new team invites.',
  },
  {
    key: 'productUpdates' as const,
    label: 'Product updates',
    description: 'Get notified when new dashboard capabilities and rollout notes are available.',
  },
  {
    key: 'securityAlerts' as const,
    label: 'Security alerts',
    description: 'Stay informed about suspicious sign-ins, permission changes, and compliance notices.',
  },
];

export function SettingsForm() {
  const [settings, setSettings] = useState<SettingsState>(defaultSettings);
  const [savedMessage, setSavedMessage] = useState('');

  useEffect(() => {
    setSettings(readStoredSettings());
  }, []);

  const updateProfile = (field: keyof SettingsState['profile'], value: string) => {
    setSettings((currentSettings) => ({
      ...currentSettings,
      profile: {
        ...currentSettings.profile,
        [field]: value,
      },
    }));
  };

  const updateNotification = (field: keyof SettingsState['notifications'], value: boolean) => {
    setSettings((currentSettings) => ({
      ...currentSettings,
      notifications: {
        ...currentSettings.notifications,
        [field]: value,
      },
    }));
  };

  const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    persistSettings(settings);
    setSavedMessage('Settings saved to localStorage. Reload the page to verify persistence.');
  };

  return (
    <form onSubmit={handleSave} className="grid gap-6 xl:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)]">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Profile</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Update your displayed admin contact information and avatar link.</p>
        </div>

        <div className="mt-6 grid gap-5">
          <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
            Name
            <input
              type="text"
              value={settings.profile.name}
              onChange={(event) => updateProfile('name', event.target.value)}
              className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
            Email
            <input
              type="email"
              value={settings.profile.email}
              onChange={(event) => updateProfile('email', event.target.value)}
              className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </label>

          <label className="grid gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
            Avatar URL
            <input
              type="url"
              value={settings.profile.avatarUrl}
              onChange={(event) => updateProfile('avatarUrl', event.target.value)}
              className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none transition focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
            />
          </label>
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-slate-200 pt-6 dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div
              className="h-14 w-14 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 dark:border-slate-700 dark:bg-slate-800"
              style={{ backgroundImage: `url(${settings.profile.avatarUrl})`, backgroundPosition: 'center', backgroundSize: 'cover' }}
              aria-hidden="true"
            />
            <div>
              <p className="font-semibold text-slate-900 dark:text-white">Preview avatar</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Image preview updates live as the URL changes.</p>
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-500"
          >
            Save
          </button>
        </div>

        {savedMessage ? <p className="mt-4 text-sm font-medium text-emerald-600 dark:text-emerald-400">{savedMessage}</p> : null}
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Notification Preferences</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Choose which admin updates should reach you between sign-ins.</p>
        </div>

        <div className="mt-6 grid gap-4">
          {preferenceLabels.map((preference) => (
            <NotificationToggle
              key={preference.key}
              label={preference.label}
              description={preference.description}
              checked={settings.notifications[preference.key]}
              onChange={(checked) => updateNotification(preference.key, checked)}
            />
          ))}
        </div>
      </section>
    </form>
  );
}
