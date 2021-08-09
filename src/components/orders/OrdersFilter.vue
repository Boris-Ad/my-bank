<template>
  <form class="row">
    <div class="mb-3 col-5">
      <input
        v-model="name"
        type="text"
        class="form-control form-control-sm"
        placeholder="Enter name"
      />
    </div>
    <div class="mb-3 col-5">
      <select v-model="status" class="form-select form-select-sm">
        <option value="completed">Completed</option>
        <option value="canceled">Canceled</option>
        <option value="active">Active</option>
        <option value="in-progress">In progress</option>
      </select>
    </div>
    <div class="mb-3 col-2 p-0">
      <button
        @click="clearFilter"
        v-if="isActiveFilter"
        type="button"
        class="btn btn-danger btn-sm"
      >
        Clear
      </button>
    </div>
  </form>
</template>

<script>
import { computed, ref, watch } from "vue";
export default {
  name: "OrdersFilter",
  emits: ["filterValue"],
 
  setup(_, { emit }) {
    const name = ref();
    const status = ref();
    const isActiveFilter = computed(() => name.value || status.value);

    const clearFilter = () => {
      name.value = "";
      status.value = "";
    };

    watch([name, status], (values) => {
      emit("filterValue", {
        name: values[0],
        status: values[1],
      });
    });

    return { name, status, isActiveFilter, clearFilter };
  },
};
</script>

<style>
</style>