<script setup>
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
const { t } = useI18n();
const products = ref();

const getData = async () => {
  try {
    // const { data } = await useFetch("/api/hello");

    const { data } = await useAsyncData(`products`, () => {
      return $fetch("https://dummyjson.com/products/1");
      // return $api.auth.get();
    });

    console.log(data.value);
    // const response = await $api.auth.get();

    products.value = data.value;
    // console.log(response);
    // allow user access into the app
  } catch (error) {
    // console.error(error);
  }
};

getData();
</script>
<template>
  <div class="app-home">
    <p class="penis">{{ products.title }}</p>
    <div class="app-home__container container">
      <ul>
        <li>
          <NuxtLink :to="localePath('/')">{{ t("pages.home.title") }}</NuxtLink>
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
  </div>
</template>
