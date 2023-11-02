<script setup lang="ts">
definePageMeta({
  layout: "auth",
  middleware: "sign",
  title: "pages.register.title",
});
useHead({
  bodyAttrs: {
    class: "page-register",
  },
});
const { t } = useI18n();
</script>
<template>
  <div class="app-register">
    <div class="app-register__container container">
      <p>{{ t("pages.register.title") }}</p>
    </div>
  </div>
</template>
