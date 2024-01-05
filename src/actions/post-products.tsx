import { Products } from "@/types/types";
import api from "@/utils/api";

export const postProducts = async (data: Products) => {
  const response = await api.post("products/", data);
  return response.data;
};
