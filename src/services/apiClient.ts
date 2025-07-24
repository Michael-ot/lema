import axios from "axios";

const BASE_URL = "http://owiup-lema.owiup.com/api";


const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
