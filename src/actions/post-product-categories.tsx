import { ProductCategoriesType } from "@/types/types";
import api from "@/utils/api";

export const postProductCategories = async (data: ProductCategoriesType) => {
  const response = await api.post("/catalog/product-categories/", data);
  return response.data;
};
