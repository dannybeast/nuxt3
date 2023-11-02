<script setup lang="ts">
definePageMeta({
  layout: "auth",
  middleware: "sign",
  title: "pages.forgot.title",
});
useHead({
  bodyAttrs: {
    class: "page-forgot",
  },
});
const { t } = useI18n();
</script>
<template>
  <div class="app-forgot">
    <div class="app-forgot__container container">
      <p>{{ t("pages.forgot.title") }}</p>
    </div>
  </div>
</template>
