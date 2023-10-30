<script setup>
const route = useRoute();
const { t } = useI18n();
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});
const title = computed(() => t(route.meta.title));
</script>

<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
      <Head>
        <Title>{{ title }}</Title>
        <template v-for="link in head.link" :key="link.id">
          <Link
            :id="link.id"
            :rel="link.rel"
            :href="link.href"
            :hreflang="link.hreflang"
          />
        </template>
        <template v-for="meta in head.meta" :key="meta.id">
          <Meta
            :id="meta.id"
            :property="meta.property"
            :content="meta.content"
          />
        </template>
      </Head>
      <Body>
        <div class="app-profile-layout">
          <AppHeader class="app-profile-layout__header" />
          <slot />
          <AppFooter class="app-profile-layout__footer" />
        </div>
      </Body>
    </Html>
  </div>
</template>
<style lang="scss">
.app-profile-layout {
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;

  &__footer {
    margin-top: auto;
  }
}
</style>
