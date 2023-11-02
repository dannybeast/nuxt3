export default defineNuxtRouteMiddleware(() => {
  const { authenticated } = storeToRefs(useAuthStore());
  const token = useCookie("token");

  if (!token.value) {
    authenticated.value = false;
  }

  if (token.value) {
    abortNavigation();
    return navigateTo("/profile");
  }
});
