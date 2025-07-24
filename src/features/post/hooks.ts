import { useQuery, useMutation, useQueryClient, keepPreviousData } from "@tanstack/react-query";
import { fetchUserPosts, deletePost, createPost } from "./api";

export const useUserPosts = (userId: number, page: number) => {
    return useQuery({
        queryKey: ["posts", userId, page],
        queryFn: () => fetchUserPosts(userId, page),
        placeholderData: keepPreviousData,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
};

export const useCreatePost = (userId: number) => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: createPost,
      onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ["posts", userId],refetchType: "active",});
        queryClient.invalidateQueries({queryKey: ["user", userId],refetchType: "active",});
      },
    });
};
  
export const useDeletePost = (userId: number) => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deletePost,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["posts"] });
            queryClient.invalidateQueries({queryKey: ["user", userId],refetchType: "active",});
        },
    });
  };