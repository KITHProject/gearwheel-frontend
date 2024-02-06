import { LoginInput } from "@/types/authorization.types";

import api from "@/utils/api";

export const login = async (data: LoginInput) => {
  const response = await api.post("/users/login/", data);
  localStorage.setItem("token", response.data.access);
  localStorage.setItem("user", response.data.user.username);
  localStorage.setItem("staff", response.data.user.is_staff);
  return response.data;
};
