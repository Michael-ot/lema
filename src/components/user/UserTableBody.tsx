import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { User } from '../../features/user/types';

interface UserTableBodyProps {
    users: User[];
}

const UserTableBody: React.FC<UserTableBodyProps> = ({users}) => {
    const navigate = useNavigate();

    const goToProfile = (id: number) => {
        navigate(`/${id}/posts`);
    };

    return (
      <tbody>
        {users.map((user, idx) => (
          <tr
            key={idx}
            className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
            onClick={() => goToProfile(user.id)}
          >
            <td className="px-4 sm:px-6 py-3 sm:py-4 md:py-[26px] text-[13px] sm:text-[14px] text-gray-600 font-medium whitespace-nowrap">
              {user.name}
            </td>
            <td className="px-4 sm:px-6 py-3 sm:py-4 md:py-[26px] text-[13px] sm:text-[14px] text-gray-600 font-normal max-w-[180px] truncate">
              {user.email}
            </td>
            <td
              className="px-4 sm:px-6 py-3 sm:py-4 md:py-[26px] text-[13px] sm:text-[14px] text-gray-600 font-normal truncate"
              style={{ maxWidth: "392px" }}
            >
              <p className='truncate'>{user.address?.street} {user.address?.state} {user.address?.city} {user.address?.zipcode}</p>
            </td>
          </tr>
        ))}
      </tbody>
    );
}

export default UserTableBody;
