import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";

// 主应用和子应用的数据通信模块
const state = {
  globalState: {}, // 用于存储主应用传递的数据
};

const mutations = {
  // 设置全局状态
  setGlobalState(state, payload) {
    state.globalState = {
      ...state.globalState,
      ...payload,
    };
  },
};

const actions = {
  // 更新全局状态
  updateGlobalState({ commit }, payload) {
    commit("setGlobalState", payload);
  },
};

const getters = {
  // 获取全局状态
  getGlobalState: (state) => state.globalState,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
