import axios from "axios";

const api = axios.create({
  baseURL: "https://192.168.5.171:3000",
});

export default api;
