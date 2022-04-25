import AsyncStorage from "@react-native-async-storage/async-storage";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: "https://autoluby.k8s.luby.me",
});

api.interceptors.request.use(async (config: AxiosRequestConfig) => {
  const token = await AsyncStorage.getItem("token");
  console.log("token", token);
  if (token !== null) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (err) => {
    err.message = handleError(err);
    return Promise.reject(err);
  }
);
function handleError(err: AxiosError) {
  let message = "Erro desconhecido, tente novamente em breve.";
  if (!err.response) {
    message =
      "Não foi possivel comunicar com o servidor, tente novamente em alguns minutos.";
  } else if (err.response.data.error) {
    ({ message } = err.response.data.error);
  } else if (Array.isArray(err.response.data)) {
    ({ message } = err.response.data[0]);
  } else if (err.response.data) {
    ({ message } = err.response.data);
  }
  return message;
}
export default api;
