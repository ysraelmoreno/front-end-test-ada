import axios from "axios";

export const Endpoints = {
  LOGIN: "/login",
  CARDS: "/cards",
};

export const Tokens = {
  BEARER: "@Board:token",
};

const api = axios.create({
  baseURL: "http://localhost:3001",
});

export default api;
