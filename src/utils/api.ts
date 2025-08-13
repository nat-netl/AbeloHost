import { API_BASE_URL } from "@/consts/api";
import axios from "axios";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

/* eslint-disable @typescript-eslint/no-explicit-any */
export const login = async (username: string, password: string) => {
  try {
    const response = await api.post("/auth/login", { username, password });
    return response.data;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const getProducts = async () => {
  try {
    const response = await api.get("/products?limit=20");
    return response.data.products;
  } catch (err: any) {
    throw new Error(err);
  }
};

export default api;
