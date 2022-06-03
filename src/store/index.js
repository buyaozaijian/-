import Vue from 'vue'
import Vuex from 'vuex'
import user from "./user";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videoindex:0,
    video1:[
      {id:0,videoCoverurl:"未知",videoname:"视频连接中",videourl:''},
      {id:0,videoCoverurl:"未知",videoname:"视频连接中",videourl:''},
      {id:0,videoCoverurl:"未知",videoname:"视频连接中",videourl:''},
      {id:0,videoCoverurl:"未知",videoname:"视频连接中",videourl:''},
      {id:0,videoCoverurl:"未知",videoname:"视频连接中",videourl:''},
      {id:0,videoCoverurl:"未知",videoname:"视频连接中",videourl:''},
      {id:0,videoCoverurl:"未知",videoname:"视频连接中",videourl:''},
    ]
    ,
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
