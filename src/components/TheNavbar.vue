<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a @click.prevent class="navbar-brand" href="#">My Bank</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Home' }"
            >Orders</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :to="{ name: 'Help' }"
            >Help</router-link
          >
        </li>
        <li class="nav-item">
          <a @click.prevent="toExit" class="nav-link" href="#">Exit</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "TheNavbar",
  setup() {
    const router = useRouter();
    const store = useStore();
    return {
      toExit: () => {
        router.push({ name: "Auth" });
        store.commit("auth/logout");
      },
    };
  },
};
</script>

<style>
</style>