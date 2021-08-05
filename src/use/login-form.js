import { useForm, useField } from "vee-validate";
import * as yup from "yup";
import { computed, watch } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export function useLoginForm() {
  const { handleSubmit, isSubmitting, submitCount } = useForm();
  const LENGTH_PASS = 6;
  const store = useStore();
  const router = useRouter();

  const {
    value: email,
    errorMessage: emailError,
    handleBlur: emailBlur,
  } = useField(
    "email",
    yup
      .string()
      .trim()
      .required("Email")
      .email("No correct email")
  );

  const {
    value: password,
    errorMessage: passwordError,
    handleBlur: passwordBlur,
  } = useField(
    "password",
    yup
      .string()
      .trim()
      .required("Password")
      .min(LENGTH_PASS, "Password length >= " + LENGTH_PASS)
  );

  const onSubmit = handleSubmit(async (values) => {
    try {
      await store.dispatch("auth/login", values);
      store.commit('clearMessage')
      router.push({ name: "Home" });
    } catch (err) {}
  });

  const maxSubmitCount = computed(() => submitCount.value >= 5);

  watch(maxSubmitCount, (value) => {
    if (value) {
      setTimeout(() => (submitCount.value = 0), 3000);
    }
  });

  return {
    email,
    emailError,
    emailBlur,
    password,
    passwordError,
    passwordBlur,
    onSubmit,
    isSubmitting,
    maxSubmitCount,
  };
}
