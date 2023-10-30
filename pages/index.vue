<script setup>
definePageMeta({
  title: "pages.home.title",
});
useHead({
  bodyAttrs: {
    class: "page-index",
  },
});
const localePath = useLocalePath();
const { t } = useI18n();
</script>
<template>
  <div class="app-home">
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
