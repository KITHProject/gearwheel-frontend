import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const getProductCategories = async () => {
  const response = await api.get("/catalog/product-categories/");
  return response.data;
};

export const useGetProductCategories = () => {
  const queryFN = () => getProductCategories();
  return useQuery({
    queryKey: ["product-categories"],
    queryFn: queryFN,
    refetchOnWindowFocus: false,
    retry: false,
    enabled: true,
  });
};
