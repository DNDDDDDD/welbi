import axios, { AxiosHeaders } from "axios";
import { API_URL } from "../../constants";

const apiClient = axios.create({
  baseURL: API_URL,
});

apiClient.interceptors.request.use((config) => {
  (config.headers as AxiosHeaders).set("Authorization", `Bearer $${localStorage.getItem('token')}`);
  return ({
    ...config,
  })
},
  error => Promise.reject(error),
);

apiClient.interceptors.response.use((response) =>
  response,
  async (error) => {
    return Promise.reject(error.response.data);
  },
);

const { get, post, put, delete: destroy } = apiClient;
export { get, post, put, destroy };