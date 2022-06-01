import Vue from 'vue'
import Vuex from 'vuex'
import user from "./user";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videoindex:0,
    video: [
      {id:0,videCoverourl:"未知",videoname:"未知"}
    ],
    video1: 0,
    video2: 0,
    video3: 0,
    video4: 0,
    video5: 0,
  },
  getters: {
  },
  mutations: {
    getvideo: (state,[param1,param2]) => {
      state.videoindex=state.videoindex+1;
      state.video.push({id:state.videoindex,videourl: param1,videoname: param2});
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
