import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const getProducts = async () => {
  const response = await api.get("/catalog/products");
  return response.data;
};

export const useGetProducts = () => {
  const queryFN = () => getProducts();
  return useQuery({
    queryKey: ["products"],
    queryFn: queryFN,
    refetchOnWindowFocus: false,
    retry: false,
    enabled: true,
  });
};
