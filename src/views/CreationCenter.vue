<template>
  <html>
  <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <body>
  <div v-if="this.needFixed == true" style="position: fixed;z-index: 9999;width: 100%;">
    <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="whitesmoke"
        text-color="#fff"
        active-text-color="#ffd04b">
      <div v-if="this.isLogin==1" style="position: absolute;left:1000px; top:13px;z-index: 9999; display: inline-block">
        <el-popover
            placement="top-start"
            :title= this.username
            width="300"
            trigger="hover"
            left="">
          <div>
            <div>
              id:{{this.userid}}
            </div>
            <div>
              <el-button type="danger" @click="logout">退出登录</el-button>
            </div>
          </div>
          <router-link :to="'User_center'" slot="reference">
            <img :src="this.userhead" style="width: 40px;height: 40px;border-radius: 50%;border-color: white;border-width: 1px">
          </router-link>
        </el-popover>
      </div>
      <div v-else  style="position: absolute; left: 1100px; top: 13px;z-index: 9999; display: inline-block;">
        <button style="width: 40px;height: 40px;border-radius: 50%;border-color: white;border-width: 1px">
          <router-link to="/try_login"><span style="color: #0b95f1">
                登录
              </span></router-link>
        </button>
      </div>
      <div style="position: absolute;left:1050px; top:20px;z-index: 9999; display: inline-block;color: gray">
        <a style="color: gray">
          {{this.username}}
        </a>
      </div>
      <div style="position: absolute;left:1180px; top:15px;z-index: 9999; display: inline-block;margin: 0;border: 0;outline: none">
        <router-link :to="'CreationCenter'">
          <el-button type="primary" style="background: #fb7299;margin: 0;border: 0;outline: none;width: 110px;height: 35px;border-radius: 10px">
            <i class="el-icon-upload el-icon--right" style="margin: 0">
              创作中心
            </i></el-button>
        </router-link>
      </div>
      <div style="position: absolute; left: 1330px; top: 22px;z-index: 9999; display: inline-block">
        <i class="fa fa-paper-plane-o" style="color: gray"></i>
        <el-button
            plain
            @click="open"
            style="background:rgba(0,0,0,0%);border: 1px solid rgba(20,81,154,0);color: gray;font-size: 15px;padding: 0">
          &ensp;站内通知
        </el-button>
      </div>
      <el-menu-item index="1" style="width: 100px; font-size: 15px">
        <router-link :to="'/'">
          <i class="fa fa-bank" style="color: gray"></i>
          <span style="color: gray;">
                  首页&nbsp;&nbsp;&nbsp;
                </span>
        </router-link></el-menu-item>
      <el-menu-item index="2" style="width: 100px; font-size: 15px">
        <router-link :to="'Saving_box'">
          <i class="fa fa-file-video-o" style="color: gray"></i>
          <span style="color: gray" @click="click_centerself">
                  收藏夹
                </span>
        </router-link></el-menu-item>
      <el-menu-item index="3" style="width: 100px; font-size: 15px">
        <router-link :to="'Friend_list'">
          <i class="fa fa-heart" style="color: gray"></i>
          <span style="color: gray" @click="click_centerself">
                  关注
                </span>
        </router-link></el-menu-item>
      <el-menu-item index="2" style="width: 100px; font-size: 15px">
        <router-link :to="'User_center'">
          <i class="fa fa-user-o" style="color: gray"></i>
          <span style="color: gray" @click="click_centerself">
                  个人中心
                </span>
        </router-link></el-menu-item>
      <div style="position:absolute; left:450px; top:15px; border:#000 1px;border: 1px solid rgba(20,81,154,0);">
        <!--<form action="" class="parent">
          <input type="text" class="search">
          <input type="button" name=""  class="btn" style="z-index:1" >
        </form>-->
        <div class="nav-search-box">
          <div class="nav-search" style="margin: 0;border: 0;padding: 0">
            <form id="nav-searchform" style="width: 100%;margin: 0;border: 0;padding: 0">
              <input
                  class="search-input"
                  ref="search1"
                  type="text"
                  placeholder="      谁说站在光里的才算英雄 "
                  style="width: 100%;margin: 0;border: 0;padding: 0;outline: none"
              />
              <div class="nav-search-btn">
                <router-link to="/searching_box"><button @click="click_search1" style="margin: 0;padding: 0;border: none;outline: none;top: 5px">
                  <img
                      src="../img/sousuo1.png"
                      alt=""
                      style="width: 34px;height: 34px;padding: 0px 7px;"
                  />
                </button></router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </el-menu>
  </div>
  <header class="banner">
    <div style="position: relative">
      <div
          style="position: absolute; left:100px; top:10px; border:#000 1px;border-bottom: 1px solid rgba(20,81,154,0); z-index: 1">
        <ul style="list-style-type:none; ">
          <li style="display: inline">
            <router-link :to="'/'">
              <i class="fa fa-bank" style="color: black"></i>
              <span style="color: black;">
                  首页&nbsp;&nbsp;&nbsp;
                </span>
            </router-link>
          </li>
          <li style="display: inline">
            <router-link :to="'/User_center'">
              <i class="fa fa-user-o" style="color:black" @click="click_centerself"></i>
              <span style="color: black">
                  个人中心&nbsp;&nbsp;&nbsp;
                </span>
            </router-link>
          </li>
          <li style="display: inline">
            <router-link :to="'/Saving_box'">
              <i class="fa fa-file-video-o" style="color: black" @click="click_centerself"></i>
              <span style="color: black">
                  收藏夹&nbsp;&nbsp;&nbsp;
                </span>
            </router-link>
          </li>
          <li style="display: inline">
            <router-link :to="'/Friend_list'">
              <i class="fa fa-heart" style="color: black" @click="click_centerself"></i>
              <span style="color: black">
                  关注&nbsp;&nbsp;&nbsp;
                </span>
            </router-link>
          </li>
        </ul>
        <div style="position:absolute; left:400px; top:-5px; border:#000 1px;">
          <!--<form action="" class="parent">
            <input type="text" class="search">
            <input type="button" name=""  class="btn" style="z-index:1" >
          </form>-->
          <div class="nav-search-box">
            <div class="nav-search" style="margin: 0;border: 0;padding: 0;">
              <form id="nav-searchform1" style="width: 100%;margin: 0;border: 0;padding: 0">
                <input
                    class="search-input"
                    ref="search"
                    type="text"
                    placeholder="      谁说站在光里的才算英雄 "
                    style="width: 100%;margin: 0;border: 0;padding: 0;outline: none;border-radius: 16px;background: whitesmoke"
                />
                <div class="nav-search-btn">
                  <router-link to="/searching_box"><button @click="click_search" style="margin: 0;padding: 0;border: none;outline: none;top: 5px">
                    <img
                        src="../img/sousuo1.png"
                        alt=""
                        style="width: 30px;height: 27px;padding: 0px 7px;border-radius: 8px"
                    />
                  </button></router-link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div v-if="this.isLogin==1" style="position: absolute;left:1000px; top:-5px;z-index: 9999; display: inline-block">
          <el-popover
              placement="top-start"
              :title="this.$store.state.username"
              width="300"
              trigger="hover"
              left="">
            <div>
              <div>
                id:{{this.userid}}
              </div>
            </div>
            <router-link :to="'/User_center'" slot="reference">
              <img :src="this.userhead"
                   style="width: 40px;height: 40px;border-radius: 50%;border-color: white;border-width: 1px">
            </router-link>
          </el-popover>
        </div>
        <div
            style="position: absolute;left:1080px; top:-3px;z-index: 9999; display: inline-block;margin: 0;border: 0;outline: none">
          <router-link :to="'UserPage'">
            <el-button type="primary"
                       style="background: #fb7299;margin: 0;border: 0;outline: none;width: 85px;height: 35px;border-radius: 10px">
              <i class="el-icon-upload el-icon--right">
                上传&ensp;
              </i></el-button>
          </router-link>
        </div>
        <div style="position: absolute; left: 1190px; top: -3px;z-index: 9999; display: inline-block;">
          <i class="fa fa-paper-plane-o" style="color: black"></i>
          <el-button
              plain
              @click="open"
              style="background:rgba(0,0,0,0%);border: 1px solid rgba(20,81,154,0);color: black;font-size: 15px">
            &ensp;站内通知
          </el-button>
        </div>
        <div v-if="islogin==false"
             style="position: absolute; left: 1000px; top: -3px;z-index: 9999; display: inline-block;">
          <button @click="dialogFormVisible = true"
                  style="width: 40px;height: 40px;border-radius: 50%;border-color: white;border-width: 1px">
              <span style="color: #0b95f1">
                登录
              </span>
          </button>
          <el-dialog title="登录" :visible.sync="dialogFormVisible" style="z-index: 9999">
            <el-form :model="form">
              <el-form-item label="用户名" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <div>
                <br>
              </div>
              <el-form-item label="密码" :label-width="formLabelWidth">
                <el-input v-model="form.code" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
          </el-dialog>
        </div>
      </div>
    </div>
  </header>
  <div style="margin-top: 25px;">
    <el-tabs :tab-position="tabPosition" type="border-card" style="min-height: 1000px">
      <el-tab-pane label="视 频 管 理">
        <div align="center" style="margin-left: 100px;">
          <ul style="list-style: none;" v-if="this.video_num != 0">
            <li style="height: 140px;margin-top: 15px" v-for="(video,index) in videocontrolList" :key="video.videoid">
              <div style="display: block;height: 1px;width: 100%;width: 1000px;margin-bottom: 10px" >
                <el-divider ></el-divider>
              </div>
              <router-link :to="'/videoPage'">
                <img @click="click1(index)" style=" position: relative; height: 120px;width: 180px; border-radius: 4%;float: left" :src="video.videoCoverUrl">
              </router-link>
              <div style="display: inline-block;text-align: left;margin-left: 30px;float: left;width: 780px">
                <router-link :to="'/videoPage'" >
                  <div @click="click1(index)" style="position: relative; font-size: 20px;color: #505050;height: 80px">{{video.videoName}}</div>
                </router-link>
                <div v-for="tags in video.videoTags" :key="tags">
                  <router-link to="Searching_box">
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>
                <span style="margin-right: 20px">
                  <i class="el-icon-video-play" style="font-size: 20px;margin-right: 5px"></i>{{video.videoViewcount}}
                </span>
                <span style="margin-right: 20px">
                  <i class="fa fa-thumbs-up" style="font-size: 20px;margin-right: 5px"></i>{{video.videolike}}
                </span>
                <span style="margin-right: 20px">
                  <i class="el-icon-star-off" style="font-size: 20px;margin-right: 5px"></i>{{video.videofavourite}}
                </span>
                <el-button id="0" @click="deletevideo(index)" style="float: right;position: relative;top: -50px;width: 100px;height: 30px;border-color: darkgray" plain>删除该视频</el-button>
              </div>
            </li>
          </ul>
          <div v-if="this.video_num === 0">
            诶嘿，一个视频都没有噢
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane label="视 频 上 传">
      <div style="display: inline-block; background: whitesmoke;width: 1000px;height: 1000px;opacity:0.9;border-radius: 8px">
        <el-form ref="form" :model="form" label-width="80px" style="padding: 40px 20px">
          <el-form-item label="视频标题" style="margin-bottom: 10px">
            <el-input v-model="willAddQuestion.videoTitle"></el-input>
          </el-form-item>
          <el-form-item label="视频简介" style="margin-bottom: 10px">
            <el-input type="textarea" v-model="willAddQuestion.videoIntroduction"></el-input>
          </el-form-item>
          <el-form-item label="视频标签" style="margin-bottom: 10px">
            <el-input v-model="willAddQuestion.videoTags"></el-input>
          </el-form-item>
          <el-form-item label="视频分区" style="margin-bottom: 10px">
          <el-select v-model="willAddQuestion.videoArea" placeholder="请选择活动区域">
            <el-option label="动画" value="1"></el-option>
            <el-option label="电影" value="2"></el-option>
            <el-option label="游戏" value="3"></el-option>
            <el-option label="音乐" value="4"></el-option>
            <el-option label="学习" value="5"></el-option>
            <el-option label="鬼畜" value="6"></el-option>
          </el-select>
        </el-form-item>
          <el-form-item label="封面" style="margin-bottom: 10px">
            <el-upload
                list-type="picture-card"
                :action=uploadImgUrl
                 multiple
                :http-request="upLoadImage"
                :before-upload="beforeImageUpload"
                :file-list="willAddQuestion.imgList"
                :limit="1">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
            <div style="font-size: 10px">图片只能为jpg/png格式</div>
          </el-form-item>
          <el-form-item label="视频" style="margin-bottom: 10px">
            <el-upload
                class="upload-demo"
                drag
                :action=uploadVideoUrl
                multiple
                :http-request="upLoadVideo"
                :before-upload="beforeVideoUpload"
                :file-list="willAddQuestion.videoList"
                :limit="1">
              <i class="el-icon-plus"></i>
            </el-upload>
            <div style="font-size: 10px">图片只能为jpg/png格式</div>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submit" style="width: 80px;height: 40px">立即上传</el-button>
            <el-button style="width: 80px;height: 40px" @click="cancel_pre">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-tab-pane>
      <el-tab-pane label="视 频 审 核" v-if="this.identity==='admin'">
        <div align="center" style="margin-left: 100px;">
          <ul style="list-style: none;" v-if="this.audit_num !== 0">
            <li style="height: 140px;margin-top: 15px" v-for="(video, index) in videoauditList" :key="video.videoid">
              <div style="display: block;height: 1px;width: 100%;width: 1000px;margin-bottom: 10px" >
                <el-divider ></el-divider>
              </div>
              <router-link :to="'/videoPage'">
                <img @click="click1(index)" style=" position: relative; height: 120px;width: 180px; border-radius: 4%;float: left" :src="video.videoCoverUrl">
              </router-link>
              <div style="display: inline-block;text-align: left;margin-left: 30px;float: left;width: 780px">
                <router-link :to="'/videoPage'">
                  <div @click="click1(index)" style="position: relative; font-size: 20px;color: #505050;height: 80px">{{video.videoName}}</div>
                </router-link>
                <div v-for="tags in video.videoTags" :key="tags">
                  <router-link :to="'/videoPage'">
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a></router-link>
                </div>
                <span style="margin-right: 20px">
                  <i class="el-icon-video-play" style="font-size: 20px;margin-right: 5px"></i>{{video.videoViewcount}}
                </span>
                <span style="margin-right: 20px">
                  <i class="fa fa-thumbs-up" style="font-size: 20px;margin-right: 5px"></i>{{video.videolike}}
                </span>
                <span style="margin-right: 20px">
                  <i class="el-icon-star-off" style="font-size: 20px;margin-right: 5px"></i>{{video.videofavourite}}
                </span>
                <el-button :id="video.comid_pass" @click="auditvideo_pass(index)" style="float: right;position: relative;top: -50px;width: 100px;height: 30px;border-color: darkgray;margin-left: 20px" plain>通过</el-button>
                <el-button :id="video.comid_notpass" @click="auditvideo_notpass(index)" style="float: right;position: relative;top: -50px;width: 100px;height: 30px;border-color: darkgray" plain>不通过</el-button>
              </div>
            </li>
          </ul>
          <div v-if="this.audit_num === 0">
            诶嘿，一个视频都没有噢
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
  </body>
  </html>
</template>

<script>
import qs from "qs";
import user from "@/store/user";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "User_center",
  data() {
    return {
      isLogin: 0,
      userid:0,
      identity: 'admin',
      userhead:'',
      tabPosition: 'left',
      dialogImageUrl: '',
      dataList: '',
      dialogVisible: false,
      disabled: false,
      islogin: true,
      username: '',
      password: '',
      dialogOfUpload: false,
      fileList: [],
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      value: new Date(),
      activeIndex: '1',
      dialogTableVisible: false,
      dialogFormVisible: false,
      needFixed: true,

      video: new FormData(),
      uploadImgUrl: '/video/uploadphoto',
      uploadVideoUrl: '/video/uploadvideo',
      willAddQuestion: {
        videoTitle: '',
        videoIntroduction: '',
        videoTags: '',
        videoArea:'',
        imgList: [],
        videoList: [],
      },
      formLabelWidth: '120px',
      options: {
        value: '1',
        label: '游戏'
      },
      video_num:1,
      videocontrolList:[
        {
          videoCoverUrl:'../img/fengmian1.webp',
          videoName:'asd',
          videolike:1,
          videoViewcount:1,
          videofavourite:1,
          videoid:1,
          videoAuthor:'asd',
          videoAuthorId:1,
          videoTags:[
              "asd",
              "asd"
          ]
        }
      ],
      audit_num:1,
      videoauditList:[
        {
          videoCoverUrl:'../img/fengmian1.webp',
          videoName:'asd',
          videolike:1,
          videoViewcount:1,
          videofavourite:1,
          videoid:1,
          videoAuthor:'asd',
          videoAuthorId:1,
          videoTags:[
            "asd",
            "asd"
          ]
        }
      ],
    }
  },
  created(){
    const userInfo = user.getters.getUser(user.state());
    console.log(userInfo);
    if (userInfo) {
      this.userhead = userInfo.user.UserProfilePhotoUrl;
      this.username = userInfo.user.username;
      this.isLogin = 1;
      this.userid = userInfo.user.userid;
      this.identity = userInfo.user.UserIdentity;//储存user身份信息，管理员身份为'admin'
    } else {
      this.isLogin = 0;
    }
    var i = 0;
    this.$axios.get("index/AuthorVideo/"+this.userid).then(
      res => {
        this.video_num = res.data.videoNum;
        for(i=0;i<this.video_num;i++){
          this.videocontrolList.push(
              {
                videoCoverUrl:res.data.videoList[i].VideoCoverUrl,
                videoName:res.data.videoList[i].VideoTitle,
                videolike:res.data.videoList[i].VideoLike,
                videoViewcount:res.data.videoList[i].VideoViewCounts,
                videofavourite: res.data.videoList[i].VideoFavourite,
                videoid:res.data.videoList[i].id,
                videoUrl:res.data.videoList[i].VideoUrl,
                videoAuthor:res.data.videoList[i].VideoAuthorName,
                videoAuthorId:res.data.videoList[i].VideoAuthor,
                videoTags:res.data.videoList[i].VideoTags
              }
          )
        }
      },
    );
    this.$axios.get("index/waitForCheck").then(
        res => {
          this.audit_num = res.data.videoNum;
          for(i=0;i<this.audit_num;i++){
            this.videoauditList.push(
                {
                  videoCoverUrl:res.data.videoList[i].VideoCoverUrl,
                  videoName:res.data.videoList[i].VideoTitle,
                  videoLike:res.data.videoList[i].VideoLike,
                  videoViewcount:res.data.videoList[i].VideoViewCounts,
                  videofavourite: res.data.videoList[i].VideoFavourite,
                  videoid:res.data.videoList[i].id,
                  videoUrl:res.data.videoList[i].VideoUrl,
                  videoAuthor:res.data.videoList[i].VideoAuthorName,
                  videoAuthorId:res.data.videoList[i].VideoAuthor,
                  videoTags:res.data.videoList[i].VideoTags
                }
            )
          }
        },
    )
  },
  methods: {
    click_search(){
      alert(this.$refs.search.value);
      sessionStorage.setItem('message', JSON.stringify(this.$refs.search.value));
    },
    click_search1(){
      alert(this.$refs.search1.value);
      sessionStorage.setItem('message', JSON.stringify(this.$refs.search1.value));
    },
    click_center(id){
      alert(this.videoList[id].videoAuthorId);
      sessionStorage.setItem('center_id', JSON.stringify(this.videoList[id].videoAuthorId));
    },
    click_centerself(){
      alert(1);
      sessionStorage.setItem('center_id', JSON.stringify(this.userid));
    },
    logout(){
      alert('退出登录！');
      sessionStorage.setItem('ISLOGIN', JSON.stringify(false));
      window.location.reload();
      this.$store.dispatch('clearUserInfo' );
    },
    handleClick() {
      alert('button click');
    },
    open() {
      this.$notify({
        title: '站内通知',
        message: JSON.parse(sessionStorage.getItem('message')),
        offset: 100
      });
    },
    click1(index){
      this.$store.state.videourl = this.videoList[index].videoUrl;
      this.$store.state.videoname = this.videoList[index].videoName;
      this.$store.state.videoid = this.videoList[index].videoId;
      this.$store.state.videolike=this.videoList[index].videolike;
      this.$store.state.videofavourite=this.videoList[index].videofavourite;
      this.$store.state.videoauthor=this.videoList[index].videoAuthor;
      this.$store.state.videoauthorid=this.videoList[index].videoAuthorId,
          //this.$store.state.videoname = 'cnm';
          //this.$store.state.videoid = 1;
          //this.$store.state.videourl = 'https://video-1310787519.cos.ap-beijing.myqcloud.com/test_video/76c8b338-48aa-40f7-81f9-fb0ec1e6b649.mp4';
      sessionStorage.setItem('videoname', JSON.stringify(this.$store.state.videoname));
      sessionStorage.setItem('videoid', JSON.stringify(this.$store.state.videoid));
      sessionStorage.setItem('videourl', JSON.stringify(this.$store.state.videourl));
      sessionStorage.setItem('videoauthorid', JSON.stringify(this.$store.state.videoauthorid));
    },
    open1() {
      const h = this.$createElement;

      this.$notify({
        title: '标题名称',
        message: h('i', {style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
      });
    },

    open2() {
      this.$notify({
        title: '提示',
        message: '这是一条不会自动关闭的消息',
        duration: 0
      });
    },

    click_search2(args){
      this.$refs.search.value = args;
      sessionStorage.setItem('message', JSON.stringify(this.$refs.search.value));
    },

    destroyed() {
      window.removeEventListener('scroll', this.handleScroll)
    },
    click_login() {
      this.$axios({
        method: 'post',           /* 指明请求方式，可以是 get 或 post */
        url: '/user/login',       /* 指明后端 api 路径，由于在 main.js 已指定根路径，因此在此处只需写相对路由 */
        data: qs.stringify({      /* 需要向后端传输的数据，此处使用 qs.stringify 将 json 数据序列化以发送后端 */
          username: this.username,
          password: this.password
        })
      })
          .then(res => {              /* res 是 response 的缩写 */
            switch (res.data.status_code) {
              case 200:
                window.alert("登录成功！");
                /* 将后端返回的 user 信息使用 vuex 存储起来 */
                this.$store.dispatch('saveUserInfo', {
                  user: res.data.data
                });
                break;
              case 401:
                window.alert("用户名不存在！");
                break;
              case 402:
                window.alert("密码错误！");
                break;
            }
          })
          .catch(err => {
            console.log(err);         /* 若出现异常则在终端输出相关信息 */
          })
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    submit() {
      this.$axios({
        method: 'post',
        url: "/video/create/upload",
        data: qs.stringify({
          VideoTitle: this.willAddQuestion.videoTitle,
          VideoDescription: this.willAddQuestion.videoIntroduction,
          VideoCoverUrl: this.willAddQuestion.imgList[0].url,
          VideoUrl: this.willAddQuestion.videoList[0].url,
          VideoKey: this.willAddQuestion.videoList[0].key,
          VideoCoverKey: this.willAddQuestion.imgList[0].key,
          VideoTags: this.willAddQuestion.videoTags,
          VideoArea: this.willAddQuestion.videoArea
        })
      })
          .then((res) => {
            console.log(res)
            switch (res.data.status_code) {
              case 1:
                console.log("上传成功");
                this.$router.push({
                  path: './'
                })
                break;
              case 2:
                alert('上传失败')
                break;
            }
          })
          .catch((error) => {
            console.log("请求失败");
            console.log(error);
          });
    },
    upLoadImage(file) {
      const formData = new FormData();
      formData.append('image', file.file);
      console.log(formData.get('image'));
      this.$axios({
        method: 'post',
        url: this.uploadImgUrl,
        data: formData,
      })
          .then(res => {
            switch (res.data.status_code) {
              case 0:
                window.alert("error");
                break;
              case 1:
                var url_img = res.data.url_img;
                var key_img = res.data.key_img;
                this.willAddQuestion.imgList.push({
                  url: url_img,
                  key: key_img
                });
                alert("封面上传成功");
                console.log(this.willAddQuestion.imgList);
                alert(this.willAddQuestion.imgList[0].url);
                break;
              case 2:
                // this.$message.error("上传文件格式错误！");
                break;
              default:
                this.$message.error("操作失败！");
                break;
            }
          })
          .catch(err => {
            console.log(err);
          })
    },
    beforeImageUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isPNG = file.type === 'image/png';
      const isLt5M = file.size / 1024 / 1024 < 10;
      if (!isJPG && !isPNG) {
        this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
      } else if (!isLt5M) {
        this.$message.error('上传头像图片大小不能超过 5MB!');
      }
      return (isJPG || isPNG) && isLt5M;
    },
    upLoadVideo(file) {
      const formData = new FormData();
      formData.append('video', file.file);
      console.log(formData.get('video'));
      const instance = this.$axios.create({
        withCredentials: true,
      })
      instance({
        method: 'post',
        url: this.uploadVideoUrl,
        data: formData,
      })
          .then(res => {
            switch (res.data.status_code) {
              case 1:
                var url_video = res.data.url_video;
                var key_video = res.data.key_video;
                window.alert(url_video);
                this.willAddQuestion.videoList.push({
                  url: url_video,
                  key: key_video
                });
                window.alert("视频上传成功");
                console.log(this.willAddQuestion.videoList);
                break;
              case 2:
                // this.$message.error("上传文件格式错误！");
                break;
              default:
                this.$message.error("操作失败！");
                break;
            }
          })
          .catch(err => {
            console.log(err);
          })
    },
    beforeVideoUpload(file) {
      const filename = file.name;
      var suffix = '';
      var isVideo = false;
      const isLt2M = file.size / 1024 / 1024 < 10;
      try {
        var flieArr = filename.split('.');
        suffix = flieArr[flieArr.length - 1];
      } catch (err) {
        suffix = '';
      }
      var videoList = ['mp4', 'mkv'];
      var judge = videoList.some(function (item) {
        return item === suffix;
      });
      if (judge) {
        isVideo = true;
      }
      if (!isVideo) {
        this.$message.error('上传视频文件只能是 MP4/MKV 格式!');
      } else if (!isLt2M) {
        this.$message.error('上传视频文件大小不能超过 10MB!');
      }
      return isLt2M && isVideo;
    },
    resetWillAdd() {
      this.willAddQuestion = {
        videoTitle: '',
        videoIntroduction: '',
        imgList: [],
        videoList: []
      }
    },
    dialogCancel: function () {
      this.resetWillAdd();
    },
    cancel_pre: function () {
      this.$confirm('已编辑的题目信息将不会保存,确认关闭？', '提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.dialogCancel();
      }).catch(() => {
      });
    },

    deletevideo(index) {
      alert(this.videocontrolList[index].videoid);
      this.$axios.get("video/delete/"+this.videocontrolList[index].videoid).then(
          res=> {
            alert(res.data.msg);
          }
      )
    },
    auditvideo_notpass(index) {
      this.$axios({
            method: "post",
            url: "video/changeStatus/" + this.videoauditList[index].videoid,
            data: qs.stringify({
              status: 0
            })
          }
      ).then(
          res => {
            alert(res.data.msg);
          }
      )
    },
    auditvideo_pass(index) {
      this.$axios({
            method: "post",
            url: "video/changeStatus/" + this.videocontrolList[index].videoid,
            data: qs.stringify({
              status: 1
            })
          }
      ).then(
          res => {
            alert(res.data.msg);
          }
      )
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
.el-dropdown {
  vertical-align: top;
}

.el-dropdown + .el-dropdown {
  margin-left: 15px;
}

.el-icon-arrow-down {
  font-size: 15px;
}

.a1:hover .c1 {

  display: block;

}

.user_main {
  position: absolute;
  display: inline-block;
  background: whitesmoke;
  left: 60px;
  top: 70px;
  width: 330px;
  height: 430px;
  border-radius: 8px;
  border-color: #DCDFE6;
  display: -moz-box; /*兼容Firefox*/
  display: -webkit-box; /*兼容FSafari、Chrome*/
}

.收藏夹 {
  position: absolute;
  display: inline-block;
  background: whitesmoke;
  left: 420px;
  top: 70px;
  width: 1000px;
  height: 2000px;
  border-radius: 8px;
  border-color: #DCDFE6;
  display: -moz-box; /*兼容Firefox*/
  display: -webkit-box; /*兼容FSafari、Chrome*/
}

.input-picture {
  position: absolute;
  display: inline-block;
  background: #545c64;
  left: 520px;
  top: 70px;
  width: 1000px;
  height: 350px;
  border-radius: 8px;
  border-color: #DCDFE6;
}

.视频上传 {
  position: absolute;
  display: inline-block;
  background: #545c64;
  left: 520px;
  top: 430px;
  width: 1000px;
  height: 350px;
  border-radius: 8px;
  border-color: #DCDFE6;

}

.head {
  position: absolute;
  left: 210px;
  top: 50px;

}

html {
  width: 100%;
  height: 100%;
}

a {
  color: black;
}

a:link {
  text-decoration: none;
}

/* 未被访问的链接 */
a:visited {
  text-decoration: none;
}

/* 已被访问的链接 */
a:hover {
  color: #4e6ef2;
  text-decoration: none;
}

/* 鼠标指针移动到链接上 */
a:active {
  text-decoration: none;
}

#main {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  width: 70%;
}

/* banner图片等比例缩小 */
.banner {
  padding-bottom: 34px;
}

.banner, .banner a, .banner img {
  width: 100%;
  height: 100%;
}

.pic {
  height: 228px;
  width: 280px;
}

.picture {
  height: 150px;
  width: 250px;
}

#mian div {
  width: 100px;
  height: 100px;
}

.all {
  /* display: flex;
  flex-direction: column; */
  padding-right: 95px;
  padding-left: 105px;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 600px;
}

.zouma {
  padding-right: 95px;
  padding-left: 105px;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 100px;
}

.live-card {
  /* color: #505050;
  font-size: 12px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  width: 206px; */
}

.row {
  padding-left: 15px;
  padding-right: 15px;
}

.top-content * {
  /* 文字在图片后面居中对齐 */
  display: inline-block;
  vertical-align: middle;
  padding-top: 10px;
  padding-bottom: 5px;
  /* left: 120px; */
}

.video-title {
  font-size: 24px;
  color: #000000;
}

.text-info {
  text-align: center;
  font-size: 12px;
  box-sizing: border-box;
  margin: 0;
  padding-left: 30px;
  color: #505050;
  line-height: 28px;
}

.swap {
  padding-left: 417px;
}

.btn {
  font-size: 12px;
  height: 28px;
  width: 60px;
  line-height: 6px;
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
}

.other {
  padding-left: 15px;

}

.tab-switch {
  color: #505050;
  font-size: 12px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 12px;
  line-height: 18px;
  height: 22px;
  margin-right: 20px;
  border-bottom: 2px solid;
}

.container {
  width: 1160px;
  height: 520px;
  margin: 0 auto;
  display: flex;
  border: 4px solid #ededed;
  border-radius: 4px;
}

.icon {
  height: 36px;
  width: 36px;
  padding-top: 30px;
  padding-left: 120px;
}

.live {
  padding-left: 30px;
}

.right {
  float: right;
  width: 320px;
  height: 330px;
  box-sizing: border-box;

}

.slide-pic {
  padding-top: 10px;
  width: 315px;
  height: 367px;
}

table {
  position: absolute;
}

.up {
  font-size: 12px;
  cursor: pointer;
  color: #00a1d6;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  line-height: 16px;
}

.up-cover {
  font-size: 12px;
  cursor: pointer;
  color: #212121;
  line-height: 16px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: relative;
}

.face {
  position: absolute;
  font-size: 12px;
  color: #212121;
  line-height: 16px;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  vertical-align: middle;
  border-style: none;
  width: 36px;
  height: 36px;
  display: inline-block;
  border-radius: 50%;
  background: #f7f7f7;
  margin-top: 20px;
}

.txt {
  padding-left: 50px;
}

.name {
  font-size: 14px;
  font-weight: bold;
  /* padding-left: 50px; */
}

.tag {
  font-size: 12px;
  line-height: 16px;
  color: #999;
  margin-top: 8px;
}

.form-box {
  width: 300px;
  padding: 40px; /* 内边界宽度  */
  position: absolute; /* 设置为绝对定位，使下方的top和left生效  */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 作用见后方描述  */
  background: #90b9e5; /* 设置背景颜色  */
  text-align: center; /* 表单中内容居中  */
  border-radius: 10px;
}

.form-box h1 {
  text-transform: uppercase; /* 将字体全部设置成大写字母  */
}

.form-box .username, .form-box .password {
  border-radius: 24px; /* 边框四个角的弧度  */
  border: 2px solid #3498db; /* 边框厚度和颜色  */
  background: none;
  display: block;
  margin: 20px auto; /* 外边界  */
  text-align: center;
  padding: 14px 10px; /* 内边界  */
  width: 200px;
  outline: none;
  color: white; /* 设置输入框中竖线的颜色 */
  transition: 0.25s; /* 设置元素过渡效果 */
}

.form-box .username:focus, .form-box .password:focus {
  border-color: #2ecc71; /* 边框颜色  */
}

.form-box .login {
  border-radius: 24px;
  border: 2px solid #0b95f1;
  background: none;
  display: block;
  margin: 20px auto;
  padding: 14px 40px;
  outline: none;
  transition: 0.25s;
  cursor: pointer; /* 设置光标的样式 */
}

* {
  margin: 0;
  padding: 0;
}

.parent {
  position: relative;
}

.search {
  width: 300px;
  height: 40px;
  border-radius: 18px;
  outline: none;
  border: 1px solid #ccc;
  padding-left: 20px;
  position: absolute;
}

.btn {
  height: 35px;
  width: 35px;
  position: absolute;
  background: no-repeat 150px 60px;
  top: 6px;
  left: 285px;
  border: none;
  outline: none;
  cursor: pointer;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.nav-search-box {
  margin: 0 10px;
  width: 500px;
  transition: width 0.3s;
}

.nav-search {
  position: relative;
}

.nav-search #nav-searchform {
  display: block;
  padding: 0 38px 0 16px;
  border: 1px solid hsla(0, 0%, 100%, 0);
  border-radius: 2px;
  background-color: #fff;
}

.nav-search #nav-searchform1 {
  display: block;
  padding: 0 38px 0 16px;
  border: 1px solid hsla(0, 0%, 100%, 0);
  border-radius: 2px;
  background-color: #fff;
}

.search-input {
  width: 431px;
  height: 32px;
}

.nav-search .nav-search-keyword {
  overflow: hidden;
  width: 100%;
  height: 34px;
  border: none;
  background-color: transparent;
  box-shadow: none;
  color: #999;
  font-size: 14px;
  line-height: 34px;
  transition: all 0.2s;
}

.nav-search .nav-search-btn {
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  width: 48px;
  height: 35px;
  border: none;
  border-radius: 2px;
  background: #e7e7e7;
  line-height: 35px;
}

</style>
<style>
.el-upload input{
  display: none !important;;
}
</style>