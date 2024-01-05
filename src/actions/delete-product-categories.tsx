import api from "@/utils/api";

export const deleteProductCategories = async (id: number) => {
  const response = await api.delete(`product-categories/${id}`);
  return response.data;
};
