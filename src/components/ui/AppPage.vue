<template>
  <div class="card col-6 mx-auto my-3">
    <div class="card-header d-flex justify-content-between align-items-center">
      <h6 class="card-title">{{ title }}</h6>
      <slot name="button" />
    </div>
    <div class="card-body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "AppPage",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    document.title = props.title + " | my bank";
    return {};
  },
};
</script>

<style>
</style>