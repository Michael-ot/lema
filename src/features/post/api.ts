import apiClient from "../../services/apiClient";
import type { Post } from "./types";


export const fetchUserPosts = async (userId: number, page = 1)=> {
    const response = await apiClient.get(`/users/${userId}/posts?page=${page}`);
    return response.data;
};

export const createPost = async ({ userId, title, body, }: { userId: number; title: string; body: string; }): Promise<Post> => {
    const { data } = await apiClient.post(`/users/${userId}/posts`, { title, body });
    return data;
  };

export const deletePost = async (postId: number): Promise<void> => {
    const response = await apiClient.delete(`/posts/${postId}`);
    return response.data;
};
  