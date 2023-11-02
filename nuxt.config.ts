// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  css: [
    "normalize.css/normalize.css",
    "primevue/resources/themes/lara-light-teal/theme.css",
    "@/assets/scss/main.scss",
  ],
  modules: [
    "@nuxtjs/eslint-module",
    "@nuxtjs/stylelint-module",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "nuxt-icons",
    "nuxt-primevue",
  ],
  pinia: {
    storesDirs: ["./stores/**"],
  },
  primevue: {},
  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "ru",
    lazy: true,
    langDir: "lang/",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root",
    },
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en-US.ts",
      },
      {
        code: "ru",
        iso: "ru-RU",
        name: "Русский",
        file: "ru-RU.ts",
      },
    ],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/vars.scss" as *;',
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL,
    },
  },
});
