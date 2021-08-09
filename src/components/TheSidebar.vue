<template>
  <div
    v-if="sidebar"
    class="card text-dark bg-light mb-3"
    style="max-width: 22rem; min-width: 18rem"
  >
    <div class="card-header d-flex justify-content-between align-items-center">
      <h5 class="card-title">Messages</h5>
      <button @click="closeSidebar" type="button" class="btn-close"></button>
    </div>

    <div class="card-body">
      <h5 class="card-title">Exchange Rates</h5>
      <h6 v-if="usd" class="card-text lead"> <strong> USD: </strong> {{ currency(usd) }}</h6>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import { currency } from '../utils/currency'
import { useStore } from "vuex";
import { getRates } from "../axios/requests";

export default {
  name: "TheSidebar",
  setup() {
    const store = useStore();
    const sidebar = computed(() => store.state.sidebar);
    const usd = ref();
    onMounted(async () => {
     usd.value = await getRates();
    });

    return { sidebar,currency, usd, closeSidebar: () => store.commit("closeSidebar") };
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