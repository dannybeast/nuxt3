import axios from "axios";
import { defineNuxtPlugin } from "#app";
import AuthModule from "~/api/auth";

interface IApiInstance {
  auth: AuthModule;
}

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const token = "11212";

  const axiosInstance = axios.create({
    baseURL: config.public.apiUrl,
    headers: {
      common: {
        Authorization: `Bearer ${token}`,
      },
    },
  });

  const modules: IApiInstance = {
    auth: new AuthModule(axiosInstance),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
