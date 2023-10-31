import * as validators from "@vuelidate/validators";

export function useMyComposable() {
  const nuxtApp = useNuxtApp();
  const t = nuxtApp.$i18n.t;
  const { createI18nMessage } = validators;
  const withI18nMessage = createI18nMessage({ t });

  const required = withI18nMessage(validators.required);
  const email = withI18nMessage(validators.email);
  const minLength = withI18nMessage(validators.minLength, {
    withArguments: true,
  });
  const maxLength = withI18nMessage(validators.maxLength, {
    withArguments: true,
  });
  const sameAs = withI18nMessage(validators.sameAs, { withArguments: true });

  return {
    required,
    email,
    minLength,
    maxLength,
    sameAs,
  };
}
