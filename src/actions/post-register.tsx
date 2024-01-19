import { RegisterInput } from "@/types/authorization.types";
import api from "@/utils/api";

export const register = async (data: RegisterInput) => {
  const response = await api.post("/users/register/", data);
  return response.data;
};
