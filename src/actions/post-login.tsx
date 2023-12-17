import { LoginInput } from "@/types/authorization.types";

import api from "@/utils/api";

export const login = async (data: LoginInput) => {
  const response = await api.post("login/", data);
  const token = response.data.access;
  localStorage.setItem("token", token);
  return response.data;
};
