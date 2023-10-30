// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ["normalize.css/normalize.css", "@/assets/scss/main.scss"],
  modules: [
    // Simple usage
    "@nuxtjs/eslint-module",
    "@nuxtjs/stylelint-module",
    "@nuxtjs/i18n",
  ],
  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "ru",
    lazy: true,
    langDir: "lang/",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_redirected",
      redirectOn: "root", // recommended
    },
    locales: [
      {
        code: "en",
        iso: "en-US",
        name: "English",
        file: "en-US.js",
      },
      {
        code: "ru",
        iso: "ru-RU",
        name: "Русский",
        file: "ru-RU.js",
      },
    ],
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/_vars.scss" as *;',
        },
      },
    },
  },
});
