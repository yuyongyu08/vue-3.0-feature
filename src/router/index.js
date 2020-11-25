import { createWebHistory, createRouter } from "vue-router";
import NoRootElementComponent from '../components/1_no-root-element/index.vue';
import EmitParentEvent from '../components/2_emit-parent-event/index.vue';
import ListObject from '../components/3_v-for-object/index.vue';

const routes = [
  { path: '/no-root-element', name: 'no-root-element', component: NoRootElementComponent },
  { path: '/emit-parent-event', name: 'emit-parent-event', component: EmitParentEvent },
  { path: '/v-for-object', name: 'v-for-object', component: ListObject },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export {
  router,
  routes,
};
