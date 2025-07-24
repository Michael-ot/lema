import { createContext, useContext, useState } from "react";

type PostModalContextType = {
  isModalOpen: boolean;
  userId: number;
  setUserId: (userId: number) => void;
  openModal: () => void;
  closeModal: () => void;
};

const PostModalContext = createContext<PostModalContextType | undefined>(
  undefined
);

export const PostModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [userId, setUserId] = useState<number>(10); // Default userId, can be changed as needed
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <PostModalContext.Provider
      value={{ isModalOpen, userId, setUserId, openModal, closeModal }}
    >
      {children}
    </PostModalContext.Provider>
  );
};

export const usePostModalContext = () => {
  const context = useContext(PostModalContext);
  if (!context) {
    throw new Error("usePostModal must be used within a PostModalProvider");
  }
  return context;
};
