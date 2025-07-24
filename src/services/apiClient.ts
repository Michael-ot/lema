import axios from "axios";

const BASE_URL = "https://owiup-lema.owiup.com/api";


const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
