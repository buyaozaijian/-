<template>
  <html>
  <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">
  <body style="max-width:1560px;margin: 0 auto;">
  <div v-if="this.needFixed == true" style="position: fixed;z-index: 9999;width: 100%;">
    <el-menu
        :default-active="this.$router.path"
        router
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
            <img :src="this.userhead" style="width: 40px;height: 40px;border-radius: 50%;border-color: white;border-width: 1px" @click="click_centerself">
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
        <el-button  @click="if_login('/CreationCenter')" type="primary" style="background: #fb7299;margin: 0;border: 0;outline: none;width: 110px;height: 35px;border-radius: 10px">
          <i class="el-icon-upload el-icon--right" style="margin: 0">
            创作中心
          </i></el-button>
      </div>
      <div style="position: absolute; left: 1330px; top: 13px;z-index: 9999; display: inline-block">
        <i class="fa fa-paper-plane-o" style="color: gray"></i>
        <el-button
            plain
            @click="open"
            style="background:rgba(0,0,0,0%);border: 1px solid rgba(20,81,154,0);color: gray;font-size: 15px">
          站内通知
        </el-button>
      </div>
      <el-menu-item index="/" style="width: 100px; font-size: 15px"><a>
        <i class="fa fa-bank" style="color: gray"></i>
        <span style="color: gray;">
                  首页&nbsp;&nbsp;&nbsp;
                </span>
      </a></el-menu-item>
      <el-menu-item @click="if_login('/saving_box')"  style="width: 100px; font-size: 15px"><a>
        <i class="fa fa-file-video-o" style="color: gray"></i>
        <span style="color: gray">
                  收藏夹
                </span>
      </a></el-menu-item>
      <el-menu-item  @click="if_login('/friend_list')" style="width: 100px; font-size: 15px"><a>
        <i class="fa fa-heart" style="color: gray"></i>
        <span style="color: gray">
                  关注
                </span>
      </a></el-menu-item>
      <el-menu-item  @click="if_login('/Contribution')" style="width: 100px; font-size: 15px"><a>
        <i class="fa fa-user-o" style="color: gray"></i>
        <span style="color: gray">
                  个人中心
                </span>
      </a></el-menu-item>
      <div style="position:absolute; left:450px; top:15px; border:#000 1px;border: 1px solid rgba(20,81,154,0);">
        <!--<form action="" class="parent">
          <input type="text" class="search">
          <input type="button" name=""  class="btn" style="z-index:1" >
        </form>-->
        <div class="nav-search" style="margin: 0;border: 0;padding: 0;width: 480px">
          <form name="nav-searchform1" style="width: 100%;margin: 0;border: 0;padding: 0">
            <input
                class="search-input"
                ref="search"
                type="text"
                placeholder="      谁说站在光里的才算英雄 "
                style="width: 100%;margin: 0;border: 0;padding-left: 20px;outline: none;border-radius: 16px"
            />
            <div class="nav-search-btn">
              <router-link to="/searching_box"><button @click="click_search" style="margin: 0;padding: 0;border: none;outline: none;height: 0">
                <img
                    src="../img/sousuoxia.png"
                    alt=""
                    style="width: 30px;height: 27px;padding: 0;border-radius: 8px;background-color: white;"
                />
              </button></router-link>
            </div>
          </form>
        </div>
      </div>
    </el-menu>
  </div>
  <header class="banner">
    <div style="position: relative">
      <div style="position: absolute; left:100px; top:10px; border:#000 1px;border-bottom: 1px solid rgba(20,81,154,0); z-index: 1">
        <ul style="list-style-type:none; ">
          <li style="display: inline">
            <router-link :to="'/'" >
              <i class="fa fa-bank" style="color: black"></i>
              <span style="color: black;">
                  首页&nbsp;&nbsp;&nbsp;
                </span>
            </router-link>
          </li>
          <li style="display: inline">
            <router-link :to="'Saving_box'" >
              <i class="fa fa-file-video-o" style="color: black"></i>
              <span style="color: black" @click="click_centerself">
                  收藏夹&nbsp;&nbsp;&nbsp;
                </span>
            </router-link>
          </li>
          <li style="display: inline">
            <router-link :to="'Friend_list'" >
              <i class="fa fa-heart" style="color: black"></i>
              <span style="color: black" @click="click_centerself">
                  关注&nbsp;&nbsp;&nbsp;
                </span>
            </router-link>
          </li>
          <li style="display: inline" >
            <router-link :to="'Contribution'">
              <i class="fa fa-user-o" style="color: black"></i>
              <span style="color: black" @click="click_centerself">
                  个人中心&nbsp;&nbsp;&nbsp;
                </span>
            </router-link>
          </li>
        </ul>
        <div style="position:absolute; left:400px; top:-5px; border:#000 1px;">
          <div class="nav-search-box">
            <div class="nav-search" style="margin: 0;border: 0;padding: 0">
              <form name="nav-searchform1" style="width: 100%;margin: 0;border: 0;padding: 0">
                <input
                    class="search-input"
                    ref="search"
                    type="text"
                    placeholder="      谁说站在光里的才算英雄 "
                    style="width: 100%;margin: 0;border: 0;padding-left: 20px;outline: none;border-radius: 16px;background-color: whitesmoke"
                />
                <div class="nav-search-btn">
                  <router-link to="/searching_box"><button @click="click_search" style="margin: 0;padding: 0;border: none;outline: none;height: 0">
                    <img
                        src="../img/sousuoxia.png"
                        alt=""
                        style="width: 30px;height: 27px;padding: 0;border-radius: 8px;background-color: whitesmoke;"
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
              :title="this.username"
              width="300"
              trigger="hover"
              left="">
            <div>
              <div>
                id:{{this.userid}}
              </div>
            </div>
            <router-link :to="'User_center'" slot="reference">
              <img :src="this.userhead" style="width: 40px;height: 40px;border-radius: 50%;border-color: white;border-width: 1px">
            </router-link>
          </el-popover>
        </div>
        <div style="position: absolute;left:1080px; top:-3px;z-index: 9999; display: inline-block;margin: 0;border: 0;outline: none">
          <router-link :to="'CreationCenter'">
            <el-button type="primary" style="background: #fb7299;margin: 0;border: 0;outline: none;width: 110px;height: 35px;border-radius: 10px">
              <i class="el-icon-upload el-icon--right" style="margin: 0">
                创作中心
              </i></el-button>
          </router-link>
        </div>
        <div style="position: absolute; left: 1210px; top: 7px;z-index: 9999; display: inline-block;width: 100px">
          <i class="fa fa-paper-plane-o" style="color: black"></i>
          <el-button
              plain
              @click="open"
              style="background:rgba(0,0,0,0%);border: 1px solid rgba(20,81,154,0);color: black;font-size: 15px;padding: 0">
            &ensp;站内通知
          </el-button>
        </div>
        <div v-if="islogin==false" style="position: absolute; left: 1000px; top: -3px;z-index: 9999; display: inline-block;">
          <button  @click="dialogFormVisible = true" style="width: 40px;height: 40px;border-radius: 50%;border-color: white;border-width: 1px">
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
  <div class="收藏夹">
    <div v-if="this.videonum === 0" style="position:absolute; left:500px;font-size: 20px">这个分区什么都没有</div>
    <div style="position: relative;top: 100px;left: 25px;">
      <div style="width: 240px;display: inline-block;float: left" v-for="(video,index) in videoList" :key="video.videoid">
        <img
            class="picture"
            :src="video.videoCoverUrl"
            alt=""
            style="border-radius: 6px"
        />
        <div class="up">
          <div class="up-cover">
            <div style="float: left" class="txt">
              <router-link :to="'/videoPage'" @click="click1(index)">
                <p class="name">{{video.videoName}}</p>
                <span class="title">
                  <b>{{video.videoauthor}}</b>
                      播放:<b>{{video.videoviewnum}}</b>
                      评论:<b>{{video.videocommentnum}}</b>
                    </span>
              </router-link>
            </div>
          </div>
        </div>
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
  name: "User_center",
  data(){
    return {
      isLogin:0,
      userid:0,
      islogin: true,
      userhead:'',
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
      needFixed: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
        code: ''
      },
      formLabelWidth: '120px',
      videoList:[
      ],
      videonum:8,
      part:JSON.parse(sessionStorage.getItem('part')),
    }
  },
  created(){
    var i=0;
    //搜索请求
    this.part = JSON.parse(sessionStorage.getItem('part'));
    /*for(i=0;i<8;i++){
      this.videoList.push(
          {
            videoCoverUrl:'https://profilephoto-1310787519.cos.ap-beijing.myqcloud.com/test_img/%E9%BB%98%E8%AE%A4%E5%A4%B4%E5%83%8F%E4%B8%8D%E8%A6%81%E5%88%A0%E9%99%A4%EF%BC%81%EF%BC%81%EF%BC%81.jpg',
            videoauthor: 'zbh',
            comid:i,
            videoUrl: 'https://video-1310787519.cos.ap-beijing.myqcloud.com/test_video/ff2f3f6a-f4f7-472a-8252-84d0d80de8ec.mp4',
            videoName: 'dadada',
            videocommentnum:  100,
            videoviewnum:  200,
          }
      )
    }*/
    this.$axios(
        {
          method: 'post',
          url: 'search/area',
          data: qs.stringify({
            keyword: this.part,
          })
        }
    ).then(
        res =>{
          this.videonum=res.data.videoNum;
          for(i=0;i<this.videonum;i++){
            this.videoList.push({
                  videoCoverUrl:res.data.videoList[i].VideoCoverUrl,
                  videoauthor: res.data.videoList[i].VideoAuthorName,
                  comid:i,
                  videoUrl:res.data.videoList[i].VideoUrl,
                  videoName:res.data.videoList[i].VideoTitle,
                  videoId:res.data.videoList[i].id,
                  videolike:res.data.videoList[i].VideoLike,
                  videofavourite:res.data.videoList[i].VideoFavourite,
                  videoAuthorId:res.data.videoList[i].VideoAuthor,
                  videocommentnum: res.data.videoList[i].CommentNum,
                  videoviewnum: res.data.videoList[i].VideoViewCounts,
                }
            )
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
    click_search(){
      alert(this.$refs.search.value);
      sessionStorage.setItem('message', JSON.stringify(this.$refs.search.value));
      window.location.reload();
    },
    click_search1(){
      alert(this.$refs.search1.value);
      sessionStorage.setItem('message', JSON.stringify(this.$refs.search1.value));
      window.location.reload();
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
        message: '请您先充钱再观看视频\n没钱还想白嫖？',
        offset: 100
      });
    },

    open1() {
      const h = this.$createElement;

      this.$notify({
        title: '标题名称',
        message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
      });
    },
    handleCommand() {
      this.$axios.get('video/favor/'+this.videoList[event.srcElement.id].videoId).then(
          res => {
            alert(res.data.msg);
          }
      )
    },
    click1(index){
      this.$store.state.videourl = this.videoList[index].videoUrl;
      this.$store.state.videoname = this.videoList[index].videoName;
      this.$store.state.videoid = this.videoList[index].videoId;
      this.$store.state.videolike=this.videoList[index].videolike;
      this.$store.state.videofavourite=this.videoList[index].videofavourite;
      this.$store.state.videoauthor=this.videoList[index].videoAuthor;
      this.$store.state.videoauthorid=this.videoList[index].videoAuthorId;
      //this.$store.state.videoname = 'cnm';
      //this.$store.state.videoid = 1;
      //this.$store.state.videourl = 'https://video-1310787519.cos.ap-beijing.myqcloud.com/test_video/76c8b338-48aa-40f7-81f9-fb0ec1e6b649.mp4';
      sessionStorage.setItem('videoname', JSON.stringify(this.$store.state.videoname));
      sessionStorage.setItem('videoid', JSON.stringify(this.$store.state.videoid));
      sessionStorage.setItem('videourl', JSON.stringify(this.$store.state.videourl));
      sessionStorage.setItem('videoauthorid', JSON.stringify(this.$store.state.videoauthorid));
    },
    open2() {
      this.$notify({
        title: '提示',
        message: '这是一条不会自动关闭的消息',
        duration: 0
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
    click_login(){
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
                  user: {
                    'username': res.data.username,
                    'token': res.data.token,
                    'userId': res.data.user_id
                  }
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
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>

.el-dropdown + .el-dropdown {
  margin-left: 15px;
}
.a1:hover .c1{

  display: block;

}
.user_main{
  position: absolute;
  display:inline-block;
  background: whitesmoke;
  left:60px;
  top:70px;
  width:330px;
  height:430px;
  border-radius: 8px;
  border-color: #DCDFE6;
  display: -moz-box;/*兼容Firefox*/
  display: -webkit-box;/*兼容FSafari、Chrome*/
}
.收藏夹{
  position: absolute;
  display:inline-block;
  background: whitesmoke;
  left:150px;
  top:70px;
  width:1250px;
  height:2000px;
  border-radius: 8px;
  border-color: #DCDFE6;
  display: -moz-box;/*兼容Firefox*/
  display: -webkit-box;/*兼容FSafari、Chrome*/
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
/* banner图片等比例缩小 */
.banner{padding-bottom:34px;}

.banner,.banner a,.banner img{width: 100%;height: 100%;}
.picture {
  height: 135px;
  width: 225px;
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
.txt {
  padding-left: 10px;
}
.form-box h1 {
  text-transform: uppercase;  /* 将字体全部设置成大写字母  */
}
.form-box .username, .form-box .password {
  border-radius: 24px;  /* 边框四个角的弧度  */
  border: 2px solid #3498db;  /* 边框厚度和颜色  */
  background: none;
  display: block;
  margin: 20px auto;  /* 外边界  */
  text-align: center;
  padding: 14px 10px;  /* 内边界  */
  width: 200px;
  outline: none;
  color: white;     /* 设置输入框中竖线的颜色 */
  transition: 0.25s;   /* 设置元素过渡效果 */
}
.form-box .username:focus,.form-box .password:focus{
  border-color: #2ecc71;  /* 边框颜色  */
}
.form-box .login{
  border-radius: 24px;
  border: 2px solid #0b95f1;
  background: none;
  display: block;
  margin: 20px auto;
  padding: 14px 40px;
  outline: none;
  transition: 0.25s;
  cursor: pointer;    /* 设置光标的样式 */
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
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
  top: 0px;
  right: -20px;
  margin: 0;
  padding: 0;
  width: 40px;
  height: 32px;
  border: none;
  border-radius: 8px;
  line-height: 35px;
}
.title{
  float: left;
  text-align: left;
  font-size: 13px;
  color: gray;
  height: 30px;
  width: 220px;
}
.name {
  float: left;
  line-height: 20px;
  text-align: left;
  margin-top: 5px;
  height: 45px;
  width: 220px;
  font-size: 14px;
  color: black;
  font-weight: 600;
  /* padding-left: 50px; */
}
</style>