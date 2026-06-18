'use client';

import { useMemo, useState } from 'react';
import { SearchInput } from '@/components/SearchInput';
import { SortableTableHeader } from '@/components/SortableTableHeader';
import { SortState, UserRecord } from '@/types/admin';

interface UserTableProps {
  users: UserRecord[];
}

const initialSort: SortState = {
  key: 'name',
  direction: 'asc',
};

const statusStyles: Record<UserRecord['status'], string> = {
  Active: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',
  Invited: 'bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300',
  Suspended: 'bg-rose-100 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300',
};

function compareValues(left: UserRecord, right: UserRecord, key: keyof UserRecord) {
  if (key === 'id') {
    return left.id - right.id;
  }

  if (key === 'joinDate') {
    return new Date(left.joinDate).getTime() - new Date(right.joinDate).getTime();
  }

  return String(left[key]).localeCompare(String(right[key]));
}

function formatJoinDate(joinDate: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(joinDate));
}

export function UserTable({ users }: UserTableProps) {
  const [search, setSearch] = useState('');
  const [sortState, setSortState] = useState<SortState>(initialSort);

  const filteredUsers = useMemo(() => {
    const query = search.trim().toLowerCase();
    const baseUsers = query
      ? users.filter((user) => user.name.toLowerCase().includes(query) || user.email.toLowerCase().includes(query))
      : users;

    const sortedUsers = [...baseUsers].sort((left, right) => {
      const result = compareValues(left, right, sortState.key);
      return sortState.direction === 'asc' ? result : result * -1;
    });

    return sortedUsers;
  }, [search, sortState, users]);

  const toggleSort = (key: keyof UserRecord) => {
    setSortState((currentSort) => {
      if (currentSort.key === key) {
        return {
          key,
          direction: currentSort.direction === 'asc' ? 'desc' : 'asc',
        };
      }

      return {
        key,
        direction: 'asc',
      };
    });
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Team directory</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Search by user name or email, then sort any column client-side.</p>
        </div>
        <div className="w-full max-w-md">
          <SearchInput value={search} onChange={setSearch} />
        </div>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
            <thead className="bg-slate-50 dark:bg-slate-950/70">
              <tr>
                {(
                  [
                    ['name', 'Name'],
                    ['email', 'Email'],
                    ['role', 'Role'],
                    ['status', 'Status'],
                    ['joinDate', 'Join Date'],
                  ] as [keyof UserRecord, string][]
                ).map(([key, label]) => (
                  <th key={key} className="px-5 py-4">
                    <SortableTableHeader
                      label={label}
                      active={sortState.key === key}
                      direction={sortState.direction}
                      onClick={() => toggleSort(key)}
                    />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-white dark:divide-slate-800 dark:bg-slate-900">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="transition hover:bg-slate-50 dark:hover:bg-slate-950/50">
                  <td className="px-5 py-4 text-sm font-medium text-slate-900 dark:text-white">{user.name}</td>
                  <td className="px-5 py-4 text-sm text-slate-600 dark:text-slate-300">{user.email}</td>
                  <td className="px-5 py-4 text-sm text-slate-600 dark:text-slate-300">{user.role}</td>
                  <td className="px-5 py-4 text-sm text-slate-600 dark:text-slate-300">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[user.status]}`}>{user.status}</span>
                  </td>
                  <td className="px-5 py-4 text-sm text-slate-600 dark:text-slate-300">{formatJoinDate(user.joinDate)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
        Showing <span className="font-semibold text-slate-900 dark:text-white">{filteredUsers.length}</span> of{' '}
        <span className="font-semibold text-slate-900 dark:text-white">{users.length}</span> users.
      </p>
    </section>
  );
}
