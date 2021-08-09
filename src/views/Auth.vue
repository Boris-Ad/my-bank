<template>
  <div class="card col-6 mx-auto my-3">
    <div class="card-header">
      <h5 class="card-title">Authorization</h5>
    </div>

    <div class="card-body">
      <form >
        <div :class="['mb-3', { invalid: emailError }]">
          <label for="email" class="form-label">Email</label>
          <input
            v-model="email"
            @blur="emailBlur"
            type="email"
            class="form-control"
            id="email"
          />
          <div v-if="emailError" class="form-text">{{ emailError }}</div>
        </div>

        <div :class="['mb-3', { invalid: passwordError }]">
          <label for="password" class="form-label">Password</label>
          <input
            v-model="password"
            @blur="passwordBlur"
            type="password"
            class="form-control"
            id="password"
          />
          <div v-if="passwordError" class="form-text">{{ passwordError }}</div>
        </div>
        <div class="d-flex justify-content-evenly align-items-center">

          <button
            @click.prevent="onSubmit"
            :disabled="isSubmitting || maxSubmitCount"
            type="submit"
            class="btn btn-primary col-5"
          >
            Sign in
          </button>

          <button
          @click.prevent="signUp"
            type="submit"
            class="btn btn-success col-5"
          >
            Sign up
          </button>
          
        </div>
      </form>
    </div>

    <div v-if="maxSubmitCount" class="card-footer">
      Remember the password! 123456
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { useLoginForm } from "../use/login-form";
import { errorCode } from "../utils/errors";

export default {
  name: "Auth",
  setup() {
    const store = useStore();
    const route = useRoute();

    if (route.query.message) {
      store.dispatch("setMessage", {
        value: errorCode(route.query.message),
        type: "warning",
      });
    }
    return { ...useLoginForm() };
  },
};
</script>

<style>
.card-footer {
  color: crimson;
}
.invalid > .form-control,
.form-text {
  border-color: crimson;
  color: crimson;
}
</style>