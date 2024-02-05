import Axios from "axios";
const API_KEY = process.env.REACT_APP_API_KEY;

const api = Axios.create({
  baseURL: "https://gearwheel-backend.vercel.app/",
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
    HTTP_GEARWHEEL: API_KEY,
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
