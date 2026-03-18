import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.THE_COINS_API,
  headers: {
    "Content-Type": "application/json",
    apikey: process.env.THE_COINS_API_KEY,
    Authorization: `Bearer ${process.env.THE_COINS_API_KEY}`,
  },
  timeout: 10000,
});


// PUT PATCH POST 
axiosInstance.interceptors.request.use((config) => {
  if (
    ["post", "put", "patch"].includes(config.method) &&
    config.data &&
    typeof config.data === "object"
  ) {
    config.data = {
      tenantId: process.env.TENANT_ID,
      ...config.data,
    };
  }

  return config;
});

export default axiosInstance;