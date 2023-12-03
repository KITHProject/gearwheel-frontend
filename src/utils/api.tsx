import Axios from "axios";

const api = Axios.create({
  baseURL: "https://gearwheel-backend.vercel.app/api/v1/",
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

api.interceptors.response.use(
  function (response) {
    return response;
  },

  function (error) {
    console.error("Error", error);
  }
);

export default api;
