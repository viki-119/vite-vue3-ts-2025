import { createRouter, createWebHistory } from "vue-router";
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";

const Home = () => import("@/pages/homePage/index.vue");
const Demo = () => import("@/pages/demo/index.vue");
const DetailPage = () => import("@/pages/detailPage/index.vue");
const PiniaPage = () => import("@/pages/piniaPage/index.vue");

const router = createRouter({
  history: createWebHistory(
    qiankunWindow.__POWERED_BY_QIANKUN__ ? "/vite-vue3-ts-2025" : "/",
  ),
  routes: [
    { path: "/", component: Home },
    {
      path: "/detail/:id",
      name: "detailPage",
      component: DetailPage,
    },
    {
      path: "/demo",
      name: "Demo",
      component: Demo,
    },
    {
      path: "/piniaPage",
      name: "PiniaPage",
      component: PiniaPage,
    },
  ],
});

export default router;
