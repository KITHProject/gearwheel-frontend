import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const getDashboard = async () => {
  const response = await api.get("/catalog/dashboard/");
  return response.data;
};

export const useGetDashboard = () => {
  const queryFN = () => getDashboard();
  return useQuery({
    queryKey: ["dashboard"],
    queryFn: queryFN,
    refetchOnWindowFocus: false,
    retry: false,
    enabled: true,
  });
};
