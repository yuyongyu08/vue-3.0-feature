<template>
  <h2>场景：子组件需要调用父组件的方法，且无需额外附加逻辑时</h2>
  <div :style="{ fontSize: fontSize + 'em' }">
    <EnlargeTextBad
      title="'子组件新建一个方法，用于触发父组件传进来的事件'"
      :enlarge="resetFontSize"
    />
    <EnlargeTextGood
      title="'子组件可以直接触发父组件传进来的事件，无需内部定义事件来承接'"
      @enlarge="resetFontSize"
    />
  </div>
</template>

<script>
import EnlargeTextBad from "./enlarge-text-bad.vue";
import EnlargeTextGood from "./enlarge-text-good.vue";

export default {
  data() {
    return {
      fontSize: 1,
    };
  },
  methods: {
    resetFontSize() {
      this.fontSize += 0.1;
    },
  },
  components: {
    EnlargeTextBad,
    EnlargeTextGood,
  },
};
</script>

<style>
</style>
