<script setup lang="ts">
definePageMeta({
  layout: "profile",
  middleware: "auth",
  title: "pages.profileSettings.title",
});
useHead({
  bodyAttrs: {
    class: "page-profile-settings",
  },
});
const { t } = useI18n();
</script>
<template>
  <div class="app-profile">
    <div class="app-profile__container container">
      <p>{{ t("pages.profileSettings.title") }}</p>
    </div>
  </div>
</template>
