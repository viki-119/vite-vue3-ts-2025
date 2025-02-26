import axios from "axios";

const state = {
  id: "1234567",
  name: "张三",
  userList: [],
};

const mutations = {
  setUserId(state, payload) {
    state.id = payload.id;
  },
  setUserName(state, payload) {
    state.name = payload.name;
  },

  setUserList(state, payload) {
    state.userList = payload.data;
  },
};

const actions = {
  setUserId({ commit }, payload) {
    commit("setUserId", payload);
  },

  setUserName({ commit }, payload) {
    commit("setUserName", payload);
  },

  /**
   * 异步获取用户列表
   *
   * @param {Object} context Vuex上下文对象
   * @param {Object} payload 载荷对象
   * @returns {Promise<void>} 返回一个Promise对象，无返回值
   */
  async queryUserList(
    { commit, state, dispatch, rootState, rootGetters },
    payload,
  ) {
    const res = await axios.get("http://localhost:3000/users");
    commit("setUserList", res.data);
  },
};

// const getters = {
//   getUserId: (state) => {
//     return state.id;
//   },
//   getUserName: (state) => {
//     return state.name;
//   },
// }

export default {
  namespaced: true, // 开启命名空间
  state,
  mutations,
  actions,
  // getters,
};
