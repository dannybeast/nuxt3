import { $fetch, type FetchOptions } from "ofetch";
import { defineNuxtPlugin } from "#app";
import AuthModule from "~/api/modules/auth";

interface IApiInstance {
  auth: AuthModule;
}

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const token = useCookie("token");
  let headers = {};

  if (token.value) {
    headers = { Authorization: `Bearer ${token.value}` };
  }

  const fetchOptions: FetchOptions = {
    baseURL: config.public.apiUrl,
    headers: { ...headers },
  };

  const apiFetch = $fetch.create(fetchOptions);

  const modules: IApiInstance = {
    auth: new AuthModule(apiFetch),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
