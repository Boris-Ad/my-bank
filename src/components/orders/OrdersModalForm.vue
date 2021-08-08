<template>
  <form @submit.prevent="onSubmit">
    <div :class="['mb-3', { invalid: nameError }]">
      <label for="name" class="form-label">Name</label>
      <input
        v-model="name"
        @blur="nameBlur"
        type="text"
        class="form-control form-control-sm"
        id="name"
      />
      <div v-if="nameError" class="form-text">{{ nameError }}</div>
    </div>
    <div :class="['mb-3', { invalid: phoneError }]">
      <label for="phone" class="form-label">Phone</label>
      <input
        v-model="phone"
        @blur="phoneBlur"
        type="text"
        class="form-control form-control-sm"
        id="phone"
      />
      <div v-if="phoneError" class="form-text">{{ phoneError }}</div>
    </div>
    <div :class="['mb-3', { invalid: amountError }]">
      <label for="amount" class="form-label">Amount</label>
      <input
        v-model="amount"
        @blur="amountBlur"
        type="number"
        class="form-control form-control-sm"
        id="amount"
      />
      <div v-if="amountError" class="form-text">{{ amountError }}</div>
    </div>
    <div class="mb-3">
      <label for="status" class="form-label">Status</label>
      <select v-model="status" class="form-select form-select-sm" id="status">
        <option value="completed">Completed</option>
        <option value="canceled">Canceled</option>
        <option value="active">Active</option>
        <option value="in-progress">In progress</option>
      </select>
    </div>
    <button
      type="submit"
      class="btn btn-primary btn-sm"
      :disabled="isSubmitting"
    >
      Add order
    </button>
  </form>
</template>

<script>
import { useStore } from "vuex";
import { useOrderForm } from "../../use/order-form";
export default {
  name: "OrdersModalForm",
  emits: ["close"],
  setup(_, { emit }) {
    const store = useStore();
    async function submit(data) {
      await store.dispatch("request/create",data);
      
      emit("close");
    }
    return { ...useOrderForm(submit) };
  },
};
</script>

<style>
.invalid > .form-control,
.form-text {
  border-color: crimson;
  color: crimson;
}
</style>