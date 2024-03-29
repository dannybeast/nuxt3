export default defineNuxtRouteMiddleware(() => {
  const { authenticated } = storeToRefs(useAuthStore());
  const token = useCookie("token");

  if (token.value) {
    authenticated.value = true;
  }

  if (!token.value) {
    abortNavigation();
    return navigateTo("/login");
  }
});
