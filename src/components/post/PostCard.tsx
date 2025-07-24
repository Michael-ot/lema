import React from 'react';
import type { Post } from '../../features/post/types';
import { FiTrash } from "react-icons/fi";
import { useDeletePost } from '../../features/post/hooks';


interface PostCardProps {
    post: Post;
}

const PostCard: React.FC<PostCardProps> = ({post}) => {
    const { mutate: deletePost } = useDeletePost(post?.userId);

    return (
      <div
        key={post.id}
        className="bg-white shadow-sm border border-gray-200 rounded-xl p-6 text-gray-700 text-sm h-[293px] w-full hover:shadow-md transition flex flex-col relative"
      >
        <button
          onClick={() => deletePost(post.id)}
          className="absolute top-3 right-3 text-red-400 hover:text-red-600"
        //   disabled={isLoading}
          title="Delete Post"
          aria-label="Delete Post"
        >
          <FiTrash className="text-base" />
        </button>

        <h2 className="text-lg text-gray-600 mt-1 break-words">
          {post.title}
        </h2>
        <p className="text-gray-500 text-sm font-thin mt-4 overflow-hidden">
          {post.body}
        </p>
      </div>
    );
}

export default PostCard;
