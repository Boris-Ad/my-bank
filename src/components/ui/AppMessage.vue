<template>
  <div
    v-if="message"
    class="alert col-6 mx-auto mt-3"
    :class="'alert-' + message.type"
  >
    <div class="alert-header d-flex justify-content-between align-items-center">
      <h5 class="alert-heading">{{ TITLE_MAP[message.type] }}</h5>
      <button @click="closeMessage" type="button" class="btn-close btn-sm"></button>
    </div>
    <hr />
    <p class="mb-0">{{ message.value }}</p>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  name: "AppMessage",
  setup() {
    const store = useStore();
    const message = computed(() => store.getters["message"]);
    const TITLE_MAP = {
        'danger': 'Error',
        'primary':'Success',
        'warning':'Warning'
    };
    return { 
        message, 
        TITLE_MAP,
        closeMessage:() => store.commit('clearMessage')
         };
  },
};
</script>

<style>
</style>