import api from "@/utils/api";

export const tokenVerify = async (token: string | null) => {
  const response = await api.post("tokenverify/", token);
  return response.data;
};
