<template>
  <the-navbar />
  <div class="container">
    <app-message />
    <router-view />
  </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar.vue";
import AppMessage from "../components/ui/AppMessage.vue";
export default {
  components: { TheNavbar, AppMessage },
  name: "MainLayout",
};
</script>

<style>
</style>