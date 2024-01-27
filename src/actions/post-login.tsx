import { LoginInput } from "@/types/authorization.types";

import api from "@/utils/api";

export const login = async (data: LoginInput) => {
  const response = await api.post("/users/login/", data);
  localStorage.setItem("token", response.data.access);
  localStorage.setItem("user", response.data.user.username);
  return response.data;
};
