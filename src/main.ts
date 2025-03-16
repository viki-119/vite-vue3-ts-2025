import { createApp } from "vue";
import router from "@/router";
import store from "@/store";
import ElementPlus from "element-plus";
import App from "./App.vue";
import { getCurrentLocale } from "./utils/language";
import {
  renderWithQiankun,
  qiankunWindow,
} from "vite-plugin-qiankun/dist/helper";
// polyfill
// import "core-js/stable";
// import "regenerator-runtime/runtime";

import "element-plus/dist/index.css";
import "@/styles/style.css";

let app: any;

function render(props: any = {}) {
  const { container } = props;
  app = createApp(App);
  app.use(router); // 注册路由
  app.use(store); // 注册vuex
  app.use(ElementPlus, { locale: getCurrentLocale() }); // 注册element-plus组件库

  const target = container ? container.querySelector("#app") : "#app";
  app.mount(target);
}

// 独立运行时
if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render();
}

// 此应用处于主应用下运行时
renderWithQiankun({
  mount(props) {
    render(props);
  },
  bootstrap() {
    console.log("bootstrap");
  },
  unmount(props: any) {
    console.log("unmount");
    app.unmount();
    app = null;
  },
  update(props: any) {
    console.log("update props", props);
  },
});
