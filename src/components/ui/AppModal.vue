<template>
  <div class="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 v-if="title" class="modal-title">{{ title }}</h5>
          <button
          @click="$emit('close')"
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
          ></button>
        </div>
        <div class="modal-body">
       <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppModal",
  emits:['close'],
  props: {
    title: {
      type: String,
    },
  },
  setup() {
    return {};
  },
};
</script>

<style>
.modal {
  display: block;
}
</style>