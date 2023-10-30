<script setup lang="ts">
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
</script>
<template>
  <div class="app-profile">
    <div class="app-profile__container container">
      <p>{{ t("pages.profile.title") }}</p>
    </div>
  </div>
</template>
