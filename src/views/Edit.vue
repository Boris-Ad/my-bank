<template>
  <app-page title="Edit">
    <template #button>
      <button
        @click="$router.push({ name: 'Home' })"
        type="button"
        class="btn btn-secondary btn-sm"
      >
        Back
      </button>
    </template>
    <app-loader v-if="loading" />

    <ul v-else-if="request" class="list-group">
      <li class="list-group-item">Name: {{ request.name }}</li>
      <li class="list-group-item">Phone: {{ request.phone }}</li>
      <li class="list-group-item">Amount: {{ currency(request.amount) }}</li>
      <li class="list-group-item">Status: {{ textMap[request.status] }}</li>
    </ul>

    <h5 v-else class="lead">
      Order with id: <strong>"{{ $route.params.id }}"</strong> nine
    </h5>

     <div class="mb-3 mt-2">
      <label for="status" class="form-label">Status</label>
      <select v-model="status" class="form-select form-select-sm" id="status">
        <option value="completed">Completed</option>
        <option value="canceled">Canceled</option>
        <option value="active">Active</option>
        <option value="in-progress">In progress</option>
      </select>
    </div>

    <div class="mt-3 d-flex justify-content-between align-items-center">
      <button v-if="checkStatus" @click="update" type="button" class="btn btn-success">
        Change status
      </button>
      <button @click="remove" type="button" class="btn btn-danger">
        Delete order
      </button>
    </div>

  </app-page>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import AppPage from "../components/ui/AppPage.vue";
import { useStore } from "vuex";
import AppLoader from "../components/ui/AppLoader.vue";
import { currency } from "../utils/currency";


export default {
  name: "Edit",
  setup() {
    const router = useRouter()
    const route = useRoute();
    const store = useStore();
    const loading = ref(true);
    const request = ref({});
    const status = ref()
    const checkStatus = computed(() => status.value !== request.value?.status)

    const textMap = {
      completed: "Completed",
      canceled: "Canceled",
      active: "Active",
      "in-progress": "In progress",
    };

    const remove = async() => {
        await store.dispatch("request/remove", route.params.id);
        router.push({name:'Home'})
    };
     
    const update = async () => {
      await store.dispatch("request/update", {...request.value,status:status.value,id:route.params.id});
      request.value.status = status.value
    };

    onMounted(async () => {
      loading.value = true;
      request.value = await store.dispatch("request/loadOne", route.params.id);
      status.value = request.value?.status
      loading.value = false;
    });

    return { request, loading, currency, textMap, remove, update, status, checkStatus };
  },
  components: { AppPage, AppLoader },
};
</script>   

<style>
</style>