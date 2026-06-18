import { UserTable } from '@/components/UserTable';
import { mockUsers } from '@/data/mockUsers';

export default function UsersPage() {
  return <UserTable users={mockUsers} />;
}
