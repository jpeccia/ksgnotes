import axios from "axios";

export const api = axios.create({
  baseURL: "https://ksgnotes-api.onrender.com",
});
