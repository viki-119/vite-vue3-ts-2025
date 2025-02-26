import { createApp } from "vue";
import router from "@/router";
import store from "@/store";
import ElementPlus from "element-plus";
import App from "./App.vue";
import { getCurrentLocale } from "./utils/language";

import "element-plus/dist/index.css";
import "@/styles/style.css";

const app = createApp(App);
app.use(router); // 注册路由
app.use(store); // 注册vuex
app.use(ElementPlus, { locale: getCurrentLocale() }); // 注册element-plus组件库
app.mount("#app");
