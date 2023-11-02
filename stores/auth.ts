import { defineStore } from "pinia";
import * as Auth from "@/types/auth";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    authenticated: false,
    loading: false,
  }),
  actions: {
    async login(payload: Auth.ILogin) {
      this.loading = true;
      const { $api } = useNuxtApp();
      const response = await $api.auth.login(payload);
      if (response) {
        const maxAge = response?.auth?.refresh_expires_in;
        const token = useCookie("token", {
          maxAge,
          sameSite: "lax",
        });
        token.value = response?.auth?.access_token;
        this.authenticated = true;
      }
      this.loading = false;
    },
    logout() {
      const token = useCookie("token");
      this.authenticated = false;
      token.value = null;
    },
  },
});
