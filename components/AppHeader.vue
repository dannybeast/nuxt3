<template>
  <div class="app-header">
    <div class="app-header__container container">
      <div class="app-header__row">
        <NuxtLink to="/" class="app-header__logo">
          <img src="/img/logo.svg" alt="" />
        </NuxtLink>

        <app-lang></app-lang>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.app-header {
  background: $primary;
  color: #fff;
  padding: 30px;

  &__row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__logo {
    display: block;
    margin-right: 30px;

    img {
      display: block;
      width: 250px;
    }
  }
}
</style>
