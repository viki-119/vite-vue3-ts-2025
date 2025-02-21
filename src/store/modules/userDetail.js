const state = {
  id: '',
  name: '',
}

const mutations = {
  setUserInfo(state, payload) {
    state.name = payload.name;
  },
}

const actions = {
  saveUserInfo(state, payload) {
    state.commit('setUserInfo', payload);
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}