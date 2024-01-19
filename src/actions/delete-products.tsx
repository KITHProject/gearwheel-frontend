import api from "@/utils/api";

export const deleteProducts = async (id: number) => {
  const response = await api.delete(`/catalog/products/${id}`);
  return response.data;
};
