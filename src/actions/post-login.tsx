import { LoginInput } from "@/types/authorization.types";
import {
  setAccessToken,
  setRefreshToken,
} from "@/stores/useAuthorizationStore";

import api from "@/utils/api";

export const login = async (data: LoginInput) => {
  const response = await api.post("login/", data);
  const accessToken = response.data.access;
  const refreshToken = response.data.refresh;
  setAccessToken(accessToken);
  setRefreshToken(refreshToken);
  return response.data;
};
