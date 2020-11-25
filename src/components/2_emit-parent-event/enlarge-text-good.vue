<template>
  <h4>{{ title }}</h4>
  <button @click="$emit('enlarge')">放大(good)</button>
</template>

<script>
export default {
  props: {
    title: String,
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
