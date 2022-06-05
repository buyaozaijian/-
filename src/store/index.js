import Vue from 'vue'
import Vuex from 'vuex'
import user from "./user";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    videourl:'',
    videoname:'',
    videoindex:0,
    videoid:0,
    videolike:0,
    videofavourite:0,
    video1:[
      {id:0,videoCoverurl:"未知",videoname:"视频连接中",videourl:''},
      {id:0,videoCoverurl:"未知",videoname:"视频连接中",videourl:''},
      {id:0,videoCoverurl:"未知",videoname:"视频连接中",videourl:''},
      {id:0,videoCoverurl:"未知",videoname:"视频连接中",videourl:''},
      {id:0,videoCoverurl:"未知",videoname:"视频连接中",videourl:''},
      {id:0,videoCoverurl:"未知",videoname:"视频连接中",videourl:''},
      {id:0,videoCoverurl:"未知",videoname:"视频连接中",videourl:''},
  ],
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
