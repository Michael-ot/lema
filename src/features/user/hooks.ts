import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { fetchUsers, fetchUser } from "./api";

export const useUsers = (page: number) => {
  return useQuery({
    queryKey: ["users", page],
    queryFn: () => fetchUsers(page),
    placeholderData: keepPreviousData,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useUser = (userId: number) => {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: () => fetchUser(userId),
  });
};
