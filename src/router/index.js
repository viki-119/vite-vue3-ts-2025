import { createRouter, createWebHashHistory } from "vue-router";

const Home = () => import("@/pages/homePage/index.vue");
const Demo = () => import("@/pages/demo/index.vue");
const DetailPage = () => import("@/pages/detailPage/index.vue");

export default createRouter({
  history: createWebHashHistory(),
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
  ],
});
