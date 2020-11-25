<template>
  <div>我的名字是：{{ name }}</div>
  <input placeholder="请输入你的名字" v-model="name" />
</template>

<script>
export default {
  data() {
    return {
      name: "",
    };
  },
};
</script>

<style>
</style>
