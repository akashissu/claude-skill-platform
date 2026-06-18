import { KpiRecord } from '@/types/admin';

export const mockKpis: KpiRecord[] = [
  {
    id: 'total-users',
    label: 'Total Users',
    value: '24,128',
    delta: '+8.2%',
    trend: 'up',
    description: 'Compared with the previous 30-day window.',
  },
  {
    id: 'mrr',
    label: 'MRR',
    value: '$128,400',
    delta: '+5.4%',
    trend: 'up',
    description: 'Recurring revenue from active subscriptions.',
  },
  {
    id: 'churn-rate',
    label: 'Churn Rate',
    value: '2.1%',
    delta: '-0.6%',
    trend: 'down',
    description: 'Net churn decreased after onboarding improvements.',
  },
  {
    id: 'active-sessions',
    label: 'Active Sessions',
    value: '1,482',
    delta: '+12.9%',
    trend: 'up',
    description: 'Live product usage measured over the last hour.',
  },
];
