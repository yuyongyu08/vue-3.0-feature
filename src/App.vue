<template>
  <section class="home">
    <nav>
      <template v-for="(route, index) in routes" :key="index">
        <router-link :to="route.path">{{ index }}.{{ route.name }}</router-link>
      </template>
    </nav>
    <section class="content">
      <router-view></router-view>
    </section>
  </section>
</template>

<script>
import { routes } from "./router";

export default {
  name: "App",
  data() {
    return {
      routes,
    };
  },
};
</script>

<style scoped lang=less>
.home {
  display: flex;
  flex-direction: row;
  height: 100vh;

  nav {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-right: 1px solid #e0e0e0;

    a{
      text-decoration: none;
    }
  }

  .content {
    padding: 20px;
  }
}
</style>
