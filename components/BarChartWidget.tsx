'use client';

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ChartPoint } from '@/types/admin';

interface BarChartWidgetProps {
  data: ChartPoint[];
}

export function BarChartWidget({ data }: BarChartWidgetProps) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Monthly Signups</h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">New account creation volume by month, sourced from static mock data.</p>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 16, right: 18, left: 8, bottom: 16 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.25)" />
            <XAxis
              dataKey="month"
              stroke="currentColor"
              tick={{ fill: 'currentColor', fontSize: 12 }}
              label={{ value: 'Month', position: 'insideBottom', offset: -8, fill: 'currentColor' }}
            />
            <YAxis
              stroke="currentColor"
              tick={{ fill: 'currentColor', fontSize: 12 }}
              label={{ value: 'Signups', angle: -90, position: 'insideLeft', fill: 'currentColor' }}
            />
            <Tooltip formatter={(value: number) => [value.toLocaleString(), 'Signups']} />
            <Bar dataKey="signups" fill="#8b5cf6" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
