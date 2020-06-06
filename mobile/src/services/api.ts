import axios from "axios";

const api = axios.create({
  baseURL: "http://278c5732932e.ngrok.io",
});

export default api;
