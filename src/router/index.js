import { createWebHistory, createRouter } from "vue-router";
import NoRootElementComponent from '../components/1.no-root-element.vue';

const routes = [
  { path: '/no-root-element', name: 'no-root-element', component: NoRootElementComponent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export {
  router,
  routes,
};
