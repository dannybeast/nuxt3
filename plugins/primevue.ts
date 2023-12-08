import { defineNuxtPlugin } from "#app";
import PrimeVue from "primevue/config/config.cjs.js";
import Toast from "primevue/toast/toast.cjs";
import ToastService from "primevue/toastservice/toastservice.cjs.js";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(PrimeVue, { ripple: true });
  nuxtApp.vueApp.use(ToastService);
  nuxtApp.vueApp.component("Toast", Toast);
});
