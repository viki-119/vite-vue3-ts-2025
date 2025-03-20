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
import { setEventBus } from "./utils/eventBus";

let app: any;
/**
 * 注册微应用通信方法
 * @param props qiankun 传递的参数
 */
function registerMicroAppStateActions(props: any) {
  // 注册 onGlobalStateChange 监听函数
  props?.globalStateManager?.onGlobalStateChange((state: any, prev: any) => {
    // state: 变更后的状态; prev: 变更前的状态
    console.log("[子应用]: 主应用状态变更", state, prev);
    // 将主应用的状态同步到当前应用的 store
    store.commit("globalState/setGlobalState", state);
  }, true);

  // 将 actions 挂载到 window 上，便于在子应用中直接调用
  // window.__QIANKUN_ACTIONS__ = props?.globalStateManager;
}

/**
 * 设置主应用传递的数据
 * @param state 主应用传递的数据
 */
// export function setMainAppState(state: Record<string, any>) {
//   window.__QIANKUN_ACTIONS__?.setGlobalState(state);
// }

function render(props: any = {}) {
  const { container } = props;
  app = createApp(App);
  app.use(router); // 注册路由
  app.use(store); // 注册vuex
  app.use(ElementPlus, { locale: getCurrentLocale() }); // 注册element-plus组件库

  // 注册主应用传递的方法
  registerMicroAppStateActions(props);
  // 将 actions 方法挂载到 Vue 实例上
  // app.config.globalProperties.$setMainAppState = setMainAppState;

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
    const { microAppEventBus } = props;
    // 保存事件总线实例
    setEventBus(microAppEventBus);
    // eventBus.emit("subapp:message", { name: "子应用" });
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
