import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const getUsers = async () => {
  const response = await api.get("/users");
  return response.data;
};

export const useGetUsers = () => {
  const queryFN = () => getUsers();
  return useQuery({
    queryKey: ["users"],
    queryFn: queryFN,
    refetchOnWindowFocus: false,
    retry: false,
    enabled: true,
  });
};
