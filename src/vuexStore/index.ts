import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import user from "./modules/user";
import userDetail from "./modules/userDetail";
import globalState from "./modules/globalState";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    userDetail,
    globalState, // 注册全局状态模块
  },
  plugins: [
    createPersistedState({
      key: "vuex", // 存储的键名（默认为 'vuex'）
      storage: window.sessionStorage, // 存储方式（默认为 localStorage）
      // paths: ['user'] // 需要持久化的状态项（默认为所有）
    }),
  ],
  // strict: process.env.NODE_ENV !== 'production', // 严格模式
});
