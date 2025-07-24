import React from 'react';

interface UserTableHeaderProps {
    toggleSortOrder: () => void;
    sortOrder: "asc" | "desc";
}

const UserTableHeader: React.FC<UserTableHeaderProps> = ({toggleSortOrder, sortOrder}) => {
    return (
        <thead className="bg-white">
            <tr>
                <th onClick={toggleSortOrder} className="px-4 sm:px-6 py-3 text-gray-600 font-medium text-xs">
                    Full name
                    <span className="ml-1">
                        {sortOrder === "asc" ? "↑" : "↓"}
                    </span>
                </th>
                <th className="px-4 sm:px-6 py-3 text-gray-600 font-medium text-xs">
                    Email address
                </th>
                <th
                    className="px-4 sm:px-6 py-3 text-gray-600 font-medium text-xs"
                    style={{ width: "392px" }}
                >
                    Address
                </th>
            </tr>
        </thead>
    );
}

export default UserTableHeader;
