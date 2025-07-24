import React, { useEffect, useState } from 'react';
import { useUsers } from '../../features/user/hooks';
import type { User } from '../../features/user/types';
import Loader from '../common/Loader';
import Pagination from '../common/Pagination';
import EmptyState from '../common/EmptyState';
import ErrorState from '../common/ErrorState';
import UserTableBody from './UserTableBody';
import UserTableHeader from './UserTableHeader';
import { sortUsersByName } from '../../features/user/utils';



const UserTable: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { data: data, isLoading, isError, refetch } = useUsers(currentPage);
    const [users, setUsers] = useState<User[]>([]);
    const [totalPages, setTotalPages] = useState(1);
    const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");

    useEffect(() => {
        setTotalPages(data?.last_page || 1);
    }, [data]);

    useEffect(() => {
        setTotalPages(data?.last_page || 1);

        const sorted = sortUsersByName((data?.data || []) as User[], sortOrder);
        setUsers(sorted);
    }, [data, sortOrder]);

    const toggleSortOrder = () => {
        setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    };

    return (
        <>
        <div className="w-full overflow-x-auto">
          <div className="w-full mx-auto border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full text-sm text-left">
              <UserTableHeader toggleSortOrder={toggleSortOrder} sortOrder={sortOrder} />
              {isLoading ? (
                    <tbody>
                        <tr>
                            <td colSpan={3}>
                                <Loader />
                            </td>
                        </tr>
                    </tbody>
                ) : isError ? (
                    <tbody>
                        <tr>
                            <td colSpan={3}>
                                <ErrorState onRetry={refetch} />
                            </td>
                        </tr>
                    </tbody>
                ) : users.length === 0 ? (
                    <tbody>
                        <tr>
                            <td colSpan={3}>
                                <EmptyState message="No users found." />
                            </td>
                        </tr>
                    </tbody>
                ) : (
                    <UserTableBody users={users} />
                )}

            </table>
          </div>
        </div>  
  
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </>
    );
}

export default UserTable;
