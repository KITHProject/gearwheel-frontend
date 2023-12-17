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
    return Promise.reject(error);
  }
);
api.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

export default api;
