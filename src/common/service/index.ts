import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // opcional si manejas cookies
});

// ===== Request Interceptor =====
api.interceptors.request.use(
  (config) => {
    // Ejemplo: agregar token si lo necesitas después
    // const token = localStorage.getItem("token");
    // if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// ===== Response Interceptor =====
api.interceptors.response.use(
  (response) => {
    // Puedes transformar data aquí si quieres
    return response;
  },
  (error) => {
    // Ejemplo: manejo global de errores 401, 403, etc.
    // if (error.response?.status === 401) {
    //   window.location.href = "/login";
    // }

    return Promise.reject(error);
  }
);
