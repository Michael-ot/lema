import React from 'react';
import { useParams, } from 'react-router-dom';
import { PostModalProvider } from '../features/post/context/PostModalContext';
import CreatePostModal from '../components/post/CreatePost/CreatePostModal';
import PostPageContent from '../components/post/PostPageContent';



const PostPage: React.FC = () => {
    const { id } = useParams(); // assuming `id` is numeric
    const userId = parseInt(id!);
   
    return (
        <PostModalProvider>
            <PostPageContent userId={userId} />
            <CreatePostModal />
        </PostModalProvider>
    );
}

export default PostPage;
