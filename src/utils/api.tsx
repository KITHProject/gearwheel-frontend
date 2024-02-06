import Axios from "axios";

const api = Axios.create({
  baseURL: "https://gearwheel-backend.vercel.app/",
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
  const API_KEY = process.env.REACT_APP_API_KEY;
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  config.headers.GEARWHEEL = API_KEY;
  return config;
});

export default api;
