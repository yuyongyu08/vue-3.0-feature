<template>
  <h4>{{ title }}</h4>
  <button @click="resetFontSize">放大(bad)</button>
</template>

<script>
export default {
  props: {
    title: String,
    enlarge: Function,
  },
  methods: {
    resetFontSize() {
      this.enlarge();
    },
  },
};
</script>

<style>
</style>
