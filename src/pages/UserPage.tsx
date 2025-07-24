import React from 'react';
import UserTable from '../components/user/UserTable';

const UserPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white px-4 sm:px-12 md:px-24 xl:px-[292px] py-16 sm:py-[130px]">
            <h1 className="text-4xl sm:text-[60px] font-medium text-gray-900 mb-6">Users</h1>
            <UserTable />
        </div>
    );
}

export default UserPage;
