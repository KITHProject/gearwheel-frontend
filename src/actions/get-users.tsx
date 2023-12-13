import { useAuthorizationStore } from "@/stores/useAuthorizationStore";
import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const getUsers = async (token: string | undefined) => {
  const response = await api.get("users/", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const useGetUsers = () => {
  const token = useAuthorizationStore((state) => state.accessToken);
  const queryFN = () => getUsers(token);
  return useQuery({
    queryKey: ["users"],
    queryFn: queryFN,
    refetchOnWindowFocus: false,
    retry: false,
    enabled: false,
  });
};
