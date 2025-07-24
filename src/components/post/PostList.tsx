import React from 'react';
import type { Post } from '../../features/post/types';
import PostCard from './PostCard';
import NewPostCard from './NewPostCard';

interface PostListProps {
    posts: Post[]
}

const PostList: React.FC<PostListProps> = ({posts}) => {

    return (
        
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        <NewPostCard></NewPostCard>
        {
            posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))
        }
      </div>
    );
}

export default PostList;
