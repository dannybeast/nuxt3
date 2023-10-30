<script setup>
const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value);
});
</script>
<template>
  <nav>
    <template v-for="(lock, index) in availableLocales" :key="lock.code">
      <template v-if="index"> | </template>
      <NuxtLink :to="switchLocalePath(lock.code)">{{
        lock.name ?? lock.code
      }}</NuxtLink>
    </template>
  </nav>
</template>
