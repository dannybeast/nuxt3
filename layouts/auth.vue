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
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
    <Body>
      <div class="app-auth-layout">
        <slot />
      </div>
    </Body>
  </Html>
</template>
<style lang="scss">
.app-auth-layout {
  width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  padding: 15px;
  display: flex;
  flex-direction: column;
}
</style>
