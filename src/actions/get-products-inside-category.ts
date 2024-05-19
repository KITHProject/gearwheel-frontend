import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const getProductsInsideCategory = async (id: number) => {
  const response = await api.get(`/catalog/product-categories/${id}/products`);
  return response.data;
};

export const useGetProductsInsideCategory = (id: number) => {
  const queryFN = () => getProductsInsideCategory(id);
  return useQuery({
    queryKey: ["products"],
    queryFn: queryFN,
    refetchOnWindowFocus: false,
    retry: false,
    enabled: true,
  });
};
