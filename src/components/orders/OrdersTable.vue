<template>
  <h6 v-if="orders.length === 0" class="card-subtitle text-muted text-center">
    No orders
  </h6>
  <table v-else class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Phone</th>
        <th scope="col">Amount</th>
        <th scope="col">Status</th>
        <th scope="col">Editor</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(order, index) in orders" :key="order.id">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ order.name }}</td>
        <td>{{ order.phone }}</td>
        <td>{{ currency(order.amount) }}</td>
        <app-status :type="order.status" />
        <td>
          <router-link
            v-slot="{ navigate }"
            custom
            :to="{ name: 'Edit', params: { id: order.id } }"
          >
            <button
              @click="navigate"
              type="button"
              class="btn btn-secondary btn-sm"
            >
              Edit
            </button>
          </router-link>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { currency } from "../../utils/currency";
import AppStatus from "../ui/AppStatus.vue";
export default {
  name: "OrdersTable",
  props: ["orders"],
  setup() {
    return { currency };
  },
  components: { AppStatus },
};
</script>

<style>
</style>