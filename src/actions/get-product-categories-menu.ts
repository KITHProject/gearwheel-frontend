import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const getProductCategoriesMenu = async () => {
  const response = await api.get("/catalog/product-categories/menu/");
  return response.data;
};

export const useGetProductCategoriesMenu = () => {
  const queryFN = () => getProductCategoriesMenu();
  return useQuery({
    queryKey: ["product-categories-menu"],
    queryFn: queryFN,
    refetchOnWindowFocus: false,
    retry: false,
    enabled: true,
    placeholderData: [],
  });
};
