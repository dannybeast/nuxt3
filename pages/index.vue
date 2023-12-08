<script setup>
// import { useErrorHandler } from "@/composables/useErrorHandler";
definePageMeta({
  title: "pages.home.title",
});
useHead({
  bodyAttrs: {
    class: "page-index",
  },
});

// const { $api } = useNuxtApp();
const localePath = useLocalePath();
// const errorHandler = useErrorHandler();
const { t } = useI18n();

// const token = useCookie("token");
// token.value = "token111";

// Client
// const getData = async () => {
//   try {
//     const data = await $api.auth.getData();
//     products.value = data;
//   } catch (error) {
//     errorHandler(error);
//   }
// };

// SSR
// const getData = async () => {
//   try {
//     const { data } = await useAsyncData(`products`, () => {
//       return $api.auth.getData();
//     });

//     products.value = data.value;
//   } catch (error) {
//     // console.error(error);
//   }
// };

// getData();
</script>
<template>
  <div class="app-home">
    <div class="app-home__container container">
      <div class="typography">
        <ul>
          <li>
            <NuxtLink :to="localePath('/')">{{
              t("pages.home.title")
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/login')">{{
              t("pages.login.title")
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/register')">{{
              t("pages.register.title")
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/forgot')">{{
              t("pages.forgot.title")
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/profile')">{{
              t("pages.profile.title")
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localePath('/profile/settings')">{{
              t("pages.profileSettings.title")
            }}</NuxtLink>
          </li>
        </ul>
      </div>
      <nuxt-icon name="telegram" class="telegram-icon" />
    </div>
  </div>
</template>
