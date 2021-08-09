<template>
  <div v-if="sidebar" class="card text-dark bg-light mb-3" style="max-width: 18rem">
    <div class="card-header d-flex justify-content-between align-items-center">
      <h5 class="card-title">Messages</h5>
      <button
      @click="closeSidebar"
        type="button"
        class="btn-close"
    ></button>
    </div>

    <div class="card-body">
      <h5 class="card-title">Light card title</h5>
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </p>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  name: "TheSidebar",
  setup() {
    const store = useStore();
    const sidebar = computed(() => store.state.sidebar);
    return { sidebar,
    closeSidebar:() => store.commit('closeSidebar') };
  },
};
</script>

<style scoped>
.card {
  position: fixed;
  right: 0;
  min-height: 100%;
}
</style>