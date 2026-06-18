import { NotificationPreferences, ProfileSettings, SettingsState, ThemeMode } from '@/types/admin';

export const STORAGE_KEYS = {
  theme: 'pap-440-theme',
  settings: 'pap-440-settings',
} as const;

export const defaultProfile: ProfileSettings = {
  name: 'Jordan Reeves',
  email: 'jordan.reeves@northstar.io',
  avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80',
};

export const defaultNotifications: NotificationPreferences = {
  emailNotifications: true,
  productUpdates: true,
  securityAlerts: true,
};

export const defaultSettings: SettingsState = {
  profile: defaultProfile,
  notifications: defaultNotifications,
};

function isBrowser() {
  return typeof window !== 'undefined';
}

export function readStoredTheme(): ThemeMode {
  if (!isBrowser()) {
    return 'light';
  }

  const storedValue = window.localStorage.getItem(STORAGE_KEYS.theme);
  return storedValue === 'dark' ? 'dark' : 'light';
}

export function persistTheme(theme: ThemeMode) {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.setItem(STORAGE_KEYS.theme, theme);
}

export function readStoredSettings(): SettingsState {
  if (!isBrowser()) {
    return defaultSettings;
  }

  try {
    const storedValue = window.localStorage.getItem(STORAGE_KEYS.settings);
    if (!storedValue) {
      return defaultSettings;
    }

    const parsed = JSON.parse(storedValue) as Partial<SettingsState>;

    return {
      profile: {
        ...defaultProfile,
        ...parsed.profile,
      },
      notifications: {
        ...defaultNotifications,
        ...parsed.notifications,
      },
    };
  } catch {
    return defaultSettings;
  }
}

export function persistSettings(settings: SettingsState) {
  if (!isBrowser()) {
    return;
  }

  window.localStorage.setItem(STORAGE_KEYS.settings, JSON.stringify(settings));
}
