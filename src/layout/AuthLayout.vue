<template>
  <div class="container">
    <app-message />
    <router-view />
  </div>
</template>

<script>
import { useStore } from 'vuex';
import AppMessage from '../components/ui/AppMessage.vue';
export default {
  components: { AppMessage },
  name: "Authlayout",
  setup(){
    const store = useStore()
    return{}
  }
};
</script>

<style>
</style>