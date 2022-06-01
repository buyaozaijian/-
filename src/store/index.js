import Vue from 'vue'
import Vuex from 'vuex'
import user from "./user";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videourl : "未知",
    videoname: "未知",
  },
  getters: {
  },
  mutations: {
    getvideo: (state,[param1,param2]) => {
      state.videourl = param1;
      state.videoname = param2;
    }
  },
  actions: {
    clear({ commit }) {
      commit("$_removeStorage");
    }
  },
  modules: {
    user
  }
})
