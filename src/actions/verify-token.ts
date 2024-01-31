import { setAuthorized } from "@/stores/useAuthorizationStore";
import api from "@/utils/api";
type Token = {
  token: string | null;
};

export const verifyToken = async (token: Token) => {
  try {
    const response = await api.post("/token/verify/", token);
    if (response.status === 200) {
      setAuthorized(true);
      console.log(response);
      console.log("token is valid");
    } else {
      setAuthorized(false);
      console.log("token is invalid");
    }
  } catch (error) {
    console.error("Error verifying token:", error);
  }
};
