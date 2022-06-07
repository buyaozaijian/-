<template>
  <html>
  <head>
  <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">
  </head>
  <div  style="position: fixed;z-index: 9999;width: 100%;">
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
      <div v-else  style="position: absolute; left: 1000px; top: 15px;z-index: 9999; display: inline-block;">
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
      <div style="position: absolute;left:1350px; top:15px;z-index: 9999; display: inline-block;margin: 0;border: 0;outline: none">
        <router-link :to="'CreationCenter'">
          <el-button type="primary" style="background: #fb7299;margin: 0;border: 0;outline: none;width: 110px;height: 35px;border-radius: 10px">
            <i class="el-icon-upload el-icon--right" style="margin: 0">
              创作中心
            </i></el-button>
        </router-link>
      </div>
      <div style="position: absolute; left: 1200px; top: 22px;z-index: 9999; display: inline-block;">
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
        <span style="color: gray">
                  收藏夹
                </span>
      </router-link></el-menu-item>
      <el-menu-item index="3" style="width: 100px; font-size: 15px">
        <router-link :to="'Friend_list'">
        <i class="fa fa-heart" style="color: gray"></i>
        <span style="color: gray">
                  关注
                </span>
      </router-link></el-menu-item>
      <el-menu-item index="3" style="width: 100px; font-size: 15px">
        <router-link :to="'User_center'">
          <i class="fa fa-user-o" style="color: gray"></i>
          <span style="color: gray">
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
                  type="text"
                  placeholder="      谁说站在光里的才算英雄 "
                  style="width: 100%;margin: 0;border: 0;padding: 0;outline: none"
              />
              <div class="nav-search-btn">
                <button style="margin: 0;padding: 0;border: none;outline: none;top: 5px">
                  <img
                      src="../img/sousuo1.png"
                      alt=""
                      style="width: 34px;height: 34px;padding: 0px 7px;"
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </el-menu>
  </div>
  <body style="width: 1150px;margin: 0 auto;">
  <div class="title" >
    <br><br>
    <br><br>
    <br>
    <div style="font-size: 20px; height: 35px;">
      <i class="fa fa-camera-retro" style="margin: 0; border: 0; outline: none; background: white; color: gray"></i>
      {{title}}
    </div>
    <p style="color:#9195a3;font-size: 15px">12345播放 · 总评论数321 2001-11-22 12:01</p>
  </div>
  <div style="position: absolute; left: 1015px;top: 110px">
    <span style="margin-right: 20px;">
        <router-link :to="'User_center'" slot="reference">
          <img :src="this.video_userhead" style="width: 50px;height: 50px;border-radius: 50%;border-color: white;border-width: 1px">
        </router-link>
    </span>
    <div style="display: inline-block">
      <div style="text-align: left;color: #fb7299;width: 250px">
        {{this.video_username}}
      </div>
      <div style="text-align: left;font-size: 13px;width: 250px">
         {{this.video_userintroduction}}
      </div>
      <div style="margin-top: 10px;float: left;width: 230px">
        <el-button v-if="this.videoAuthorStatus===0" @click="follow" style="background: #00AEEC;float: left;width: 170px;height: 35px" type="primary">关注：{{this.videoAuthorFollow}}</el-button>
        <el-button v-if="this.videoAuthorStatus===1" @click="follow" style="float: left;width: 170px;height: 35px" type="info">已关注：{{this.videoAuthorFollow}}</el-button>
      </div>
    </div>
    <div style="text-align: left;margin-top: 50px;margin-bottom: 30px;font-family: 微软雅黑">
        他的视频还有
    </div>
    <div>
        <div v-for="videos in this.video_list" :key="videos.video_id_use" style="margin-bottom:55px;width: 370px;height: 40px">
          <img :src="videos.video_photo" style="width: 150px;height: 80px; float: left;border-radius: 8px;margin-right: 10px">
          <div>
            <router-link to="/videoPage"><div :id="videos.video_id_use" @click="click1" style="font-size: 15px;text-align: left;font-family: '微软雅黑 Light';font-weight: 600;height: 40px">
              {{videos.video_name}}
            </div></router-link>
            <div style="float: left;margin-top: 5px;font-size: 13px;color: gray;width: 140px;text-align: left">
              {{videos.author}}
            </div>
            <div style="float: left;margin-top: 3px;font-size: 13px;color: gray;width: 140px;text-align: left">
              播放{{videos.video_viewnums}}&ensp;评论{{videos.video_commentnums}}
            </div>
          </div>
        </div>
    </div>
  </div>
  <div style="width: 800px">
    <div>
      <video id="video_show" controls autoplay class="video">
        <source  :src = "this.url"> 视频播放内容的位置
      </video>
    </div>
    <div class="operation">
      <el-divider></el-divider>
      <div style="float: left; width: 100px">
        <button v-if="this.iflike===0" @click="like" class="fa fa-thumbs-up" style="margin: 0; border: 0; outline: none; background: white; color: gray; font-size: 30px;"></button>
        <button v-else @click="likecancall" class="fa fa-thumbs-up" style="margin: 0; border: 0; outline: none; background: white; color: hotpink; font-size: 30px;"></button>
      </div>
      <div style="float: left; width: 50px; height: 40px; font-size: 15px; position: relative; top: 5px; left: -33px">
        {{this.videoLikeNum}}
      </div>
      <div style="float: left; width: 100px">
        <button v-if="ifcollection===0" @click="collect" class="el-icon-star-off" style="margin: 0; border: 0; outline: none; background: white; color: gray; font-size: 30px;"></button>
        <button v-else  @click="collectcall" class="el-icon-star-on" style="margin: 0; border: 0; outline: none; background: white; color: hotpink; font-size: 30px;"></button>
      </div>
      <div style="float: left; width: 50px; height: 40px; font-size: 15px; position: relative; top: 5px; left: -35px">
        {{this.videoFavorNum}}
      </div>
    </div>
    <div class="introduction">
      <el-divider></el-divider>
      这是一则简介；
      <br/>
      可以写很多行
      <br>
      一旦接受了自己的软弱，那我就是无敌的；
    </div>
    <div style="font-size: 20px; text-align: left">
      <el-divider></el-divider>
      评论
      <span style="font-size: 15px">
        {{comments}}
      </span>
    </div>
    <div class="comment-tijiao">
      <span style="margin-right: 20px; float: left" >
        <a href="https://www.bilibili.com">
          <img :src="this.userhead" style="width: 40px;height: 40px;border-radius: 50%">
        </a>
      </span>
      <span>
        <el-input
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="请发表一条友善的评论"
            v-model="textarea2"
            style="width: 650px;float: left;">
      </el-input>
      </span>
      <el-button style="width: 70px;height: 50px" type="primary" @click="submit_comment"  plain >发布</el-button>
    </div>
    <div v-for="comment in comment_list" :key="comment.comment_id">
      <div class="comment">
        <el-divider></el-divider>
        <img class="small-head" :src = "comment.comment_head_url">
        <div style="display: inline-block; color:black"><b>{{comment.comment_name}}</b></div>
        <div>评论时间:{{comment.comment_time}}</div>
        <div>&nbsp;</div>
        <div>{{comment.comment_in}}</div>
      </div>
    </div>
  </div>
  </body>
  </html>
</template>

<script>
import qs from "qs";
import user from "@/store/user";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Homepage",
  data(){
    return {
      userhead:'',
      isLogin:0,
      userid:0,
      username: '',
      userHead: '',
      password: '',
      //title: this.$store.state.videoname,
      title: JSON.parse(sessionStorage.getItem('videoname')),
      needFixed: false,
      textarea2: '',
      likes: 12,
      iflike: 0,
      collections: 20,
      ifcollection: 0,
      concerns: 100,
      ifconcerns: 0,
      videotime: '',
      comment_list: [],
      video_num: 5,
      video_list: [
      ],
      comment_num: 1,
      commentid: 0,
      url: JSON.parse(sessionStorage.getItem('videourl')),
      //url: 'https://video-1310787519.cos.ap-beijing.myqcloud.com/test_video/76c8b338-48aa-40f7-81f9-fb0ec1e6b649.mp4',
      vid: JSON.parse(sessionStorage.getItem('videoid')),
      aid: JSON.parse(sessionStorage.getItem('videoauthorid')),
      video_username: '',
      video_userid:0,
      video_userhead:'',
      video_userintroduction:'',
      videoAuthorStatus: 0,
      videoAuthorFollow: 0,
      like1:JSON.parse(sessionStorage.getItem('like')),
      favorite:JSON.parse(sessionStorage.getItem('like')),
      videoLikeNum: 0,
      videoFavorNum: 0,
    }
  },
  created() {
    //加载时接收评论，处于尝试阶段
    var i = 0;
      /*for(i=0;i<this.video_num;i++){ //调试使用
        this.video_list.push(
            {
              video_name: '啦啦啦' ,
              video_photo: 'https://profilephoto-1310787519.cos.ap-beijing.myqcloud.com/test_img/%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%E4%B8%8D%E8%A6%81%E5%88%A0%E9%99%A4%EF%BC%81%EF%BC%81%EF%BC%81.jpg' ,
              video_viewnums: 100 ,
              video_url: 'https://video-1310787519.cos.ap-beijing.myqcloud.com/test_video/76c8b338-48aa-40f7-81f9-fb0ec1e6b649.mp4' ,
              video_commentnums: 200 ,
              video_id: i ,
              video_id_use: i,
              author: 'yyz',
              video_like: 300,
              video_favorite: 500,
            }
        )
      }*/
      this.$axios.get('comment/commentDetail/'+ this.vid).then(
          res => {
            this.comment_num = res.data.commentNumber;
            this.iflike = res.data.like;
            this.ifcollection = res.data.favor;
            this.videoLikeNum = res.data.likeNum;
            this.videoFavorNum = res.data.favorNum;
            for(i=0;i<this.comment_num;i++){
              this.comment_list.push(
                  {
                    comment_head_url: res.data.commentList[i].CommentUserPhotoUrl,
                    comment_name: res.data.commentList[i].CommentUserName,
                    comment_in: res.data.commentList[i].CommentContent,
                    comment_id: res.data.commentList[i].id,
                    comment_time: res.data.commentList[i].CommentDate
                  }
              )
            }
          },
      );
      this.$axios.get('user/'+this.aid).then(
          res => {
               this.video_username = res.data.user.UserName;
               this.video_userid = res.data.user.id;
               this.video_userhead = res.data.user.UserProfilePhotoUrl;
               this.video_userintroduction = res.data.user.UserIntroduction;
               this.videoAuthorStatus = res.data.fol;
               this.videoAuthorFollow = res.data.follow;
          },
      );
      this.$axios.get('index/videoAll/'+this.aid).then(//获取作者视频列表
        res => {
          this.video_num = res.data.videoNum;
          var j;
          for (i = 0, j = 0; i < this.video_num; i++, j++) {
            if (res.data.videoList[i].id !== this.vid) {
              this.video_list.push(
                  {
                    video_name: res.data.videoList[i].VideoTitle,
                    video_photo: res.data.videoList[i].VideoCoverUrl,
                    video_viewnums: res.data.videoList[i].VideoViewCounts,
                    video_url: res.data.videoList[i].VideoUrl,
                    video_commentnums: res.data.videoList[i].CommentNum,
                    video_id: res.data.videoList[i].id,
                    video_like: res.data.videoList[i].VideoLike,
                    video_favorite: res.data.videoList[i].VideoFavorite,
                    author: this.video_username,
                    video_id_use: j,
                  }
              )
            } else {
              j --;
            }
          }
        }
      );
    const userInfo = user.getters.getUser(user.state());
    console.log(userInfo);
    if (userInfo) {
      this.userhead = userInfo.user.UserProfilePhotoUrl;
      this.username = userInfo.user.username;
      this.isLogin = 1;
      this.userid = userInfo.user.userid
    } else {
      this.isLogin = 0;
    }
  },
  methods:{
    click2(){
      alert('cnmb');
    },
    click1(){
      this.$store.state.videourl = this.video_list[event.srcElement.id].video_url;
      this.$store.state.videoname = this.video_list[event.srcElement.id].video_name;
      this.$store.state.videoid = this.video_list[event.srcElement.id].video_id;
      this.$store.state.videolike=this.video_list[event.srcElement.id].video_like;
      this.$store.state.videofavourite=this.video_list[event.srcElement.id].video_favorite;
      this.$store.state.videoauthor=this.video_username;
      this.$store.state.videoauthorid=this.video_userid;
          //this.$store.state.videoname = 'cnm';
          //this.$store.state.videoid = 1;
          //this.$store.state.videourl = 'https://video-1310787519.cos.ap-beijing.myqcloud.com/test_video/76c8b338-48aa-40f7-81f9-fb0ec1e6b649.mp4';
      sessionStorage.setItem('videoname', JSON.stringify(this.$store.state.videoname));
      sessionStorage.setItem('videoid', JSON.stringify(this.$store.state.videoid));
      sessionStorage.setItem('videourl', JSON.stringify(this.$store.state.videourl));
      sessionStorage.setItem('videoauthorid', JSON.stringify(this.$store.state.videoauthorid));
      sessionStorage.setItem('like',JSON.stringify(this.$store.state.videolike));
      sessionStorage.setItem('favorite',JSON.stringify(this.$store.state.video_favorite));
      window.location.reload();
    },
    follow(){
      if(this.isLogin===1) {
        if(this.videoAuthorStatus === 0) {
          alert('关注该用户');
          this.videoAuthorStatus = 1;
          this.videoAuthorFollow += 1;
        }
        else{
          alert('取消关注');
          this.videoAuthorFollow -= 1;
          this.videoAuthorStatus = 0;
        }
        this.$axios.get('user/follow/' + this.video_userid).then(
        );
      }
      else{
        this.$router.push('/try_login');
      }
    },
    logout(){
      alert('退出登录！');
      sessionStorage.setItem('ISLOGIN', JSON.stringify(false));
      window.location.reload();
      this.$store.dispatch('clearUserInfo' );
    },
    open() {
      this.$notify({
        title: '站内通知',
        message: this.vid ,
        offset: 100
      });
    },
    handleScroll() {
      let self = this
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      console.log(scrollTop)
      if (scrollTop > 300) {
        self.needFixed = true;
      } else {
        self.needFixed = false;
      }
    },
    destroyed () {
      window.removeEventListener('scroll', this.handleScroll)
    },
    like() {
      this.iflike=1;
      this.videoLikeNum++;
      this.$axios({
        method: 'get',
        url: 'video/like/' + this.vid,
      })
    },
    likecancall() {
      this.iflike=0;
      this.videoLikeNum--;
      this.$axios({
        method: 'get',
        url: 'video/like/' + this.vid,
      })
    },
    collect() {
      this.ifcollection=1;
      this.videoFavorNum++;
      this.$axios({
        method: 'get',
        url: 'video/favor/' + this.vid,
      })
    },
    collectcall() {
      this.ifcollection=0;
      this.videoFavorNum--;
      this.$axios({
        method: 'get',
        url: 'video/favor/' + this.vid,
      })
    },
    concern() {
      this.ifconcerns=1;
      this.concerns++;
      this.$axios({
        method: 'post',
        url: '',
        data: qs.stringify({
          videoauthor: this.$store.state.videoauthor,
          userid: this.$store.state.userid,
          operation: this.ifconcerns
        })
      })
    },
    concerncancall() {
      this.ifconcerns=0;
      this.concerns--;
      this.$axios({
        method: 'post',
        url: '',
        data: qs.stringify({
          videoauthor: this.$store.state.videoauthor,
          userid: this.$store.state.userid,
          operation: this.ifconcerns
        })
      })
    },
    submit_comment(){ //发布评论的函数，尝试阶段
      this.$axios(
          {
            method: 'post',
            url: '/comment/postComment/'+this.vid,//url待定
            data: qs.stringify(
                {
                  CommentContent: this.textarea2,
                  //videoid: this.$store.state.videoid
                }
            )
          }
      )
          .then((res) => {
            this.comment_list.push(
                {
                  comment_head_url: res.data.userList.UserProfilePhotoUrl,
                  comment_name: res.data.userList.UserName,
                  comment_in: res.data.commentList.CommentContent,
                  comment_id: res.data.commentList.id,
                  comment_time: res.data.commentList.CommentDate
                }
            )
            console.log(res)
            switch (res.data.status_code) {
              case 1:
                console.log("发送成功");
                this.$router.push({
                  path: './'
                })
                break;
              case 2:
                alert('发送失败')
                break;
            }
          })
          .catch((error) => {
            console.log("请求失败");
            console.log(error);
          });
      /*this.$axios.get('comment/commentDetail/'+this.vid).then(
          res => {
            this.comment_num = res.data.commentNumber;
            alert(this.comment_num);
              this.comment_list.push(
                  {
                    comment_head_url: res.data.commentList[this.comment_num-1].CommentUserPhotoUrl,
                    comment_name: res.data.commentList[this.comment_num-1].CommentUserName,
                    comment_in: res.data.commentList[this.comment_num-1].CommentContent,
                    comment_id: res.data.commentList[this.comment_num-1].id,
                    comment_time: res.data.commentList[this.comment_num-1].CommentDate
                  }
              )
          },
      );*/
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
.video{
  height: 450px;
  width: 800px;
  margin: 0 auto;
  background: black;
}
.title{
  height: 170px;
  width: 1000px;
  text-align: left;
  margin: 0;
}
.operation{
  height: 50px;
  width: 800px;
}
.comment{
  height: 150px;
  width: 800px;
  text-align: left;
  margin: 0 auto;
}
.introduction{
  width: 800px;
  margin-bottom: 20px;
  text-align: left;
  font-size: 15px;
}
.comment-tijiao{
  width: 800px;
  margin-bottom: 30px;
  margin-top: 20px;
}
.partition{
  width: 800px;
  height: 50px;
  text-align: left;
  font-size: 18px;
}
.big-head{
  left: 10px;
  top: 10px;
  height: 70px;
  width: 70px;
  border-radius: 50%;
}
.big-name{
  height: 50px;
  width: 680px;
}
.small-head{
  left: 10px;
  top: 10px;
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
.lon{
  height: 200px;
  width: 120px;
  float: left;
  text-align: center;
}
.con{
  height: 200px;
  width: 680px;
  float: left;
}
.comment-content{
  width: 680px;
}
.comment-date{
  width: 680px;
  height: 60px;
}
.comment-reply{
  height: 50px;
  width: 680px;
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

html {
  width: 100%;
  height: 100%;
}
a {
  color: black;
}
a:link {
  text-decoration: none;
} /* 未被访问的链接 */
a:visited {
  text-decoration: none;
} /* 已被访问的链接 */
a:hover {
  color: #4e6ef2;
  text-decoration: none;
} /* 鼠标指针移动到链接上 */
a:active {
  text-decoration: none;
}
#mian div {
  width: 100px;
  height: 100px;
}
.top-content * {
  /* 文字在图片后面居中对齐 */
  display: inline-block;
  vertical-align: middle;
  padding-top: 10px;
  padding-bottom: 5px;
  /* left: 120px; */
}
</style>