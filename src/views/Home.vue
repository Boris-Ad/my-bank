<template>
  <app-page title="List orders">
    <template #button>
      <button
        @click="modal = true"
        type="button"
        class="btn btn-secondary btn-sm"
      >
        Add order
      </button>
    </template>
    <orders-filter @filterValue="filterValue"></orders-filter>
    <app-loader v-if="loading" />
    <orders-table v-else :orders="orders"></orders-table>
    <teleport to="body">
      <app-modal @close="modal = false" v-if="modal" title="Order">
        <orders-modal-form @close="modal = false"></orders-modal-form>
      </app-modal>
    </teleport>
  </app-page>
</template>

<script>
import { computed, ref, onMounted } from "vue";
import OrdersTable from "../components/orders/OrdersTable.vue";
import AppPage from "../components/ui/AppPage.vue";
import AppModal from "../components/ui/AppModal.vue";
import OrdersModalForm from "../components/orders/OrdersModalForm.vue";
import { useStore } from "vuex";
import AppLoader from "../components/ui/AppLoader.vue";
import OrdersFilter from "../components/orders/OrdersFilter.vue";
export default {
  name: "Home",
  setup() {
    const store = useStore();
    const modal = ref(false);
    const loading = ref(false);
    const filter = ref({});

    const filterValue = (value) => {
      filter.value = value;
    };

    const orders = computed(() =>
      store.getters["request/requests"]
        .filter((el) => {
          if (filter.value.name) {
            return el.name.includes(filter.value.name);
          }
          return el;
        })
        .filter((el) => {
          if (filter.value.status) {
            return el.status === filter.value.status;
          }
          return el;
        })
    );

    onMounted(async () => {
      loading.value = true;
      await store.dispatch("request/load");
      loading.value = false;
    });

    return {
      modal,
      orders,
      loading,
      filterValue,
    };
  },
  components: {
    AppPage,
    OrdersTable,
    AppModal,
    OrdersModalForm,
    AppLoader,
    OrdersFilter,
  },
};
</script>
,
    AppLoader