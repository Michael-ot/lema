import React,{ useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import type { Post } from '../../features/post/types';
import PostHeader from '../../components/post/PostHeader';
import PostList from '../../components/post/PostList';
import Loader from '../../components/common/Loader';
import ErrorState from '../../components/common/ErrorState';
import Pagination from '../../components/common/Pagination';
import { useUserPosts } from '../../features/post/hooks';
import { useUser } from '../../features/user/hooks';
import { usePostModalContext } from '../../features/post/context/PostModalContext';

interface PostPageProps {
    userId: number;
}

const PostPageContent: React.FC<PostPageProps> = ({userId}) => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();
    const { setUserId } = usePostModalContext();

    const { data: userData, isLoading: isUserLoading, isError: isUserError, refetch: refetchUser, } = useUser(userId); const [totalPages, setTotalPages] = useState(1);

    const { data: userPosts, isLoading: isUserPostsLoading, isError: isUserPostsError, refetch: refetchUserPosts, } = useUserPosts(userId, currentPage);
    
    useEffect(() => {
        setUserId(userId);
    }, [userId]);

    useEffect(() => {
        setTotalPages(userPosts?.last_page || 1);
        setPosts((userPosts?.data || []) as Post[]);        
    }, [userPosts]);

    const goToHome = () => {
        navigate("/");
    };

    const refreshAll = () => {
        refetchUser();
        refetchUserPosts();
    };

    return (
        <div className="min-h-screen bg-white px-10 md:px-24 xl:px-[292px] py-16 lg:pt-[172px]">
            <button
                onClick={() => goToHome()}
                className="text-sm text-[#535862] font-semibold mb-4 hover:underline"
            >
                ← Back to Users
            </button>

            {isUserLoading || isUserPostsLoading   ? (
                <Loader />
            ) : isUserError || isUserPostsError ? (
                <ErrorState onRetry={() => refreshAll()} />
            ) : (
                <>
                    <PostHeader user={{...userData?.user, postCount:userData?.post_count}} />
                    <PostList posts={posts} />
                    <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />       
                </>
            )}
        </div>
    )
}

export default PostPageContent;
