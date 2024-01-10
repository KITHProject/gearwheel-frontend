import axios from "axios";

export const tokenVerify = async (token: string | null) => {
  const response = await axios.post(
    "https://gearwheel-backend.vercel.app/dj-rest-auth/token/verify/",
    token,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  console.log(response);
  return response.data;
};
