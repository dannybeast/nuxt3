<template>
  <div class="app-header">
    <NuxtLink to="/" class="app-header__logo">
      <img src="/img/logo.svg" alt="" />
    </NuxtLink>
  </div>
</template>
<style lang="scss">
.app-header {
  background: $primary;
  color: #fff;
  padding: 30px;

  &__logo {
    display: block;

    img {
      display: block;
      width: 250px;
    }
  }
}
</style>
