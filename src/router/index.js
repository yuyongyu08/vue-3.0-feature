import { createWebHistory, createRouter } from "vue-router";
import NoRootElementComponent from '../components/1.no-root-element/index.vue';
import EmitParentEvent from '../components/2.emit-parent-event/index.vue';

const routes = [
  { path: '/no-root-element', name: 'no-root-element', component: NoRootElementComponent },
  { path: '/emit-parent-event', name: 'emit-parent-event', component: EmitParentEvent },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export {
  router,
  routes,
};
