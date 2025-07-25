import axios from "axios";

const BASE_URL = "https://owiup-lema.owiup.com/api";
// const BASE_URL = "http://localhost:8000/api";



const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
