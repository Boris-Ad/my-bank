<template>
  <component v-if="nameLayout" :is="nameLayout + '-layout'" />
</template>

<script>
import AuthLayout from "./layout/AuthLayout.vue";
import MainLayout from "./layout/MainLayout.vue";

import { useRoute } from "vue-router";
import { computed } from "@vue/runtime-core";

export default {
  name: "App",

  setup() {
    const route = useRoute();

    return { nameLayout: computed(() => route.meta.layout) };
  },
  components: { AuthLayout, MainLayout },
};
</script>

<style>
</style>

