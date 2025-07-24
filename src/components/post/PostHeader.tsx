import React from 'react';
import type { UserSummary } from '../../features/post/types';

interface PostHeaderProps {
    user: UserSummary;
}

const PostHeader: React.FC<PostHeaderProps> = ({user}) => {

    return (
        <div className="">
            
            <h2 className="text-4xl font-medium text-gray-900">{user.name}</h2>
            <p className="text-gray-[#535862] text-sm fonnt-medium mt-4">
                <span className="text-[#535862]">{user.email} </span> • {user.postCount} Posts
            </p>
        </div>
    );
}

export default PostHeader;
