import { createStore } from 'vuex';
import user from './modules/user';
import userDetail from './modules/userDetail';

export default createStore({
  modules: {
    user,
    userDetail,
  }
})