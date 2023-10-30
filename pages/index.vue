<script setup>
useHead({
  title: "Главная страница",
  meta: [{ name: "description", content: "Главная страница" }],
  bodyAttrs: {
    class: "page-index",
  },
});
definePageMeta({
  title: "pages.home.title", // set resource key
});
const { locale, locales, t } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>
<template>
  <div>
    <p>{{ t("pages.home.title") }}</p>

    <nav>
      <template v-for="(locale, index) in availableLocales" :key="locale.code">
        <template v-if="index"> | </template>
        <NuxtLink :to="switchLocalePath(locale.code)">{{
          locale.name ?? locale.code
        }}</NuxtLink>
      </template>
    </nav>
    <app-btn></app-btn>
    <NuxtLink to="login" class="app-header__logo">Авторизация </NuxtLink>
    <NuxtLink to="register" class="app-header__logo">Регистрация </NuxtLink>
    <NuxtLink to="forgot" class="app-header__logo"
      >Восстановить пароль
    </NuxtLink>
  </div>
</template>
