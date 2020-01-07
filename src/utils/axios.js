import axios from "axios";
// const API_URL = "http://localhost:8080/api-pitech-new/api/";
const API_URL =
  "https://iht-cors-server.herokuapp.com/https://api.pitech.mthe.net/api/";

axios.defaults.baseURL = API_URL;
axios.defaults.headers.common.Accept = "application/x-www-form-urlencoded";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

axios.interceptors.request.use(async function(config) {
  config.headers.Authorization = localStorage.getItem("@token");
  return config;
});

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.status === 401) {
      if (
        window.location.pathname !== "/login" &&
        window.location.pathname !== ""
      ) {
        alert("Vui lòng đăng nhập lại");
        localStorage.removeItem("@token");
        window.location.href = "/login";
      }
    }
    return error;
  }
);

export default axios;
