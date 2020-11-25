<template>
  <h2>1.用v-for...of(更符合ES6语法)；2.key和value同时传入</h2>
  <ul>
    <li v-for="(value, end, i) of skills" :key="i">
      {{ end }}:
      <ul>
        <li v-for="(skill, j) in value" :key="j">{{ skill }}</li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      skills: {
        frontend: ["HTML", "CSS", "JS"],
        backend: ["Java", "PHP"],
        DB: ["Mongo", "MySQL"],
      },
    };
  },
};
</script>

<style>
</style>
