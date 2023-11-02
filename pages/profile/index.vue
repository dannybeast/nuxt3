<script setup>
import { useErrorHandler } from "@/composables/useErrorHandler";
definePageMeta({
  layout: "profile",
  middleware: "auth",
  title: "pages.profile.title",
});
useHead({
  bodyAttrs: {
    class: "page-profile",
  },
});
const { t } = useI18n();
const errorHandler = useErrorHandler();
const { $api } = useNuxtApp();
// Client
const getData = async () => {
  try {
    await $api.auth.getData();
  } catch (error) {
    errorHandler(error);
  }
};
getData();
</script>
<template>
  <div class="app-profile">
    <div class="app-profile__container container">
      <p>{{ t("pages.profile.title") }}</p>
    </div>
  </div>
</template>
