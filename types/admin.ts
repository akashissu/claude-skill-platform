export type KpiTrend = 'up' | 'down' | 'steady';

export interface KpiRecord {
  id: string;
  label: string;
  value: string;
  delta: string;
  trend: KpiTrend;
  description: string;
}

export interface ChartPoint {
  month: string;
  revenue: number;
  signups: number;
  activeUsers: number;
}

export type UserRole = 'Owner' | 'Admin' | 'Manager' | 'Support' | 'Analyst';
export type UserStatus = 'Active' | 'Invited' | 'Suspended';

export interface UserRecord {
  id: number;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  joinDate: string;
}

export interface ProfileSettings {
  name: string;
  email: string;
  avatarUrl: string;
}

export interface NotificationPreferences {
  emailNotifications: boolean;
  productUpdates: boolean;
  securityAlerts: boolean;
}

export interface SettingsState {
  profile: ProfileSettings;
  notifications: NotificationPreferences;
}

export type ThemeMode = 'light' | 'dark';
export type SortDirection = 'asc' | 'desc';

export interface SortState {
  key: keyof UserRecord;
  direction: SortDirection;
}
