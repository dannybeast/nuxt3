<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { storeToRefs } from "pinia";
import { useValidateTranslated } from "@/composables/useValidateTranslated";
import { useAuthStore } from "@/stores/auth";

const { t } = useI18n();
const { required, minLength } = useValidateTranslated();
const { login } = useAuthStore();
const { loading } = storeToRefs(useAuthStore());

definePageMeta({
  layout: "auth",
  middleware: "sign",
  title: "pages.login.title",
});

useHead({
  bodyAttrs: {
    class: "page-login",
  },
});

const form = reactive({
  login: "",
  password: "",
});

const rules = computed(() => {
  return {
    login: { required, minLength: minLength(3) },
    password: { required, minLength: minLength(6) },
  };
});

const onSubmit = async () => {
  const isFormCorrect = await v$.value.$validate();
  if (!isFormCorrect) return;
  await login(form);
  window.location.reload();
};

const v$ = useVuelidate(rules, form);
</script>

<template>
  <div class="app-login">
    <h1 class="app-login__title">{{ t("pages.login.title") }}</h1>

    <div v-show="loading" class="app-loader app-loader--absolute">loading</div>
    <form @submit.prevent="onSubmit()">
      <div
        class="app-login__field app-field"
        :class="{ 'is-error': v$.login.$errors.length }"
      >
        <label class="app-field-label">Login:</label>
        <input
          v-model="form.login"
          type="text"
          class="app-field-input"
          autocomplete="off"
        />
        <div
          v-for="error of v$.login.$errors"
          :key="error.$uid"
          class="app-field-errors"
        >
          <small>{{ error.$message }}</small>
        </div>
      </div>
      <div
        class="app-login__field app-field"
        :class="{ 'is-error': v$.password.$errors.length }"
      >
        <label class="app-field-label">Password:</label>
        <input
          v-model="form.password"
          type="password"
          class="app-field-input"
          autocomplete="off"
        />
        <div
          v-for="error of v$.password.$errors"
          :key="error.$uid"
          class="app-field-errors"
        >
          <small>{{ error.$message }}</small>
        </div>
      </div>
      <button class="app-btn app-btn--full">Login</button>
    </form>
  </div>
</template>

<style lang="scss">
.app-login {
  width: 400px;
  max-width: 100%;
  margin: auto;
  position: relative;

  &__title {
    font-size: 24px;
  }

  &__field {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
}
</style>
