import React from 'react';
import CreatePostForm from './CreatePostForm';
import type { CreatePostFormValues } from '../../../features/post/types';
import { useCreatePost } from '../../../features/post/hooks';
import { toast } from "react-toastify";
import Modal from '../../common/Modal';
import { usePostModalContext } from '../../../features/post/context/PostModalContext';


interface CreatePostModalProps {
    onPostCreated?: () => void;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({onPostCreated}) => {
    const { userId,isModalOpen, closeModal } = usePostModalContext();
    const { mutate: createPost, isPending } = useCreatePost(userId);
    

    const handleSubmit = (values: CreatePostFormValues) => {
        createPost(
          { userId, ...values },
          {
            onSuccess: () => {
                if (onPostCreated) {
                    onPostCreated();
                }
                toast.success("Post created!");
                closeModal();
            },
            onError: () => {
                toast.error("Something went wrong!");
            },
          }
        );
    };

    

    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <h2 className="text-4xl font-medium mb-6 text-[#181D27]">New Post</h2>
            <CreatePostForm
                onSubmit={handleSubmit}
                onCancel={closeModal}
                isSubmitting={isPending}
            />
        </Modal>
    );
}

export default CreatePostModal;
