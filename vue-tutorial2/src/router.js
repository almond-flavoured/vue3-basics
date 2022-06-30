import { createWebHistory, createRouter } from "vue-router";
import BlogList from './components/BlogList.vue';
import Home from './components/Home.vue';
import Detail from './components/Detail.vue';

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/list",
    component: BlogList,
  },
  {
    path: "/detail/:id",
    component: Detail,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;