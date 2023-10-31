import { $fetch, type FetchOptions } from "ofetch";
import { defineNuxtPlugin } from "#app";
import AuthModule from "~/api/modules/auth";

interface IApiInstance {
  auth: AuthModule;
}

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();
  const token = useCookie("token");

  const fetchOptions: FetchOptions = {
    baseURL: config.public.apiUrl,
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  };

  const apiFetcher = $fetch.create(fetchOptions);

  const modules: IApiInstance = {
    auth: new AuthModule(apiFetcher),
  };

  return {
    provide: {
      api: modules,
    },
  };
});
