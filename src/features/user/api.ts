import apiClient from "../../services/apiClient";
import type { User } from "./types";

export const fetchUsers = async (page: number) => {
  const response = await apiClient.get(`/users?page=${page}`);
  return response.data;
};

export const fetchUser = async (userId: number)=> {
  const response = await apiClient.get(`/users/${userId}`);
  return response.data;
};