import api from "@/utils/api";
import { useQuery } from "@tanstack/react-query";

export const deleteProductCategories = async (id: number) => {
  const response = await api.delete(`product-categories/${id}`);
  return response.data;
};
