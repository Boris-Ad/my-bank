<template>
  <the-navbar />
  <the-sidebar />
  <div class="container">
    <app-message />
    <router-view />
  </div>
</template>

<script>
import TheNavbar from "../components/TheNavbar.vue";
import TheSidebar from '../components/TheSidebar.vue';
import AppMessage from "../components/ui/AppMessage.vue";
export default {
  components: { TheNavbar, AppMessage, TheSidebar },
  name: "MainLayout",
};
</script>

<style>
</style>