<template>
  <html>
  <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">
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
      <el-menu-item index="2" style="width: 100px; font-size: 15px">
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
      <div style="position: absolute; left:100px; top:10px; border:#000 1px;border-bottom: 1px solid rgba(20,81,154,0); z-index: 1">
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
            <router-link :to="'Saving_box'">
              <i class="fa fa-file-video-o" style="color: black"></i>
              <span style="color: black">
                  收藏夹&nbsp;&nbsp;&nbsp;
                </span>
            </router-link>
          </li>
          <li style="display: inline">
            <router-link :to="'Friend_list'">
              <i class="fa fa-heart" style="color: black"></i>
              <span style="color: black">
                  关注&nbsp;&nbsp;&nbsp;
                </span>
            </router-link>
          </li>
          <li style="display: inline">
            <router-link :to="'User_center'">
              <i class="fa fa-user-o" style="color: black"></i>
              <span style="color: black">
                  个人中心&nbsp;&nbsp;&nbsp;
                </span>
            </router-link>
          </li>
        </ul>
        <div style="position:absolute; left:400px; top:-5px; border:#000 1px;">
          <div class="nav-search-box">
            <div class="nav-search" style="margin: 0;border: 0;padding: 0">
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
        <div style=" position: absolute; left: 1190px; top: -3px;z-index: 9999; display: inline-block;">
          <i class="fa fa-paper-plane-o" style="color: black"></i>
          <el-button
              v-if="this.isLogin===0"
              plain
              @click="open"
              style="background:rgba(0,0,0,0%);border: 1px solid rgba(20,81,154,0);color: black;font-size: 15px;">
            &ensp;站内通知
          </el-button>
          <el-button
              v-else
              @click="notice1"
              style="background:rgba(0,0,0,0%);border: 1px solid rgba(20,81,154,0);color: black;font-size: 15px">
            &ensp;站内通知
          </el-button>
          <el-badge v-if="unread_notification_num!==0" class="mark" :value="this.unread_notification_num" />
          <el-drawer
              title="站内通知"
              :visible.sync="drawer"
              :direction="direction"
              append-to-body="true"
              >
            <!-- :before-close="handleClose-->
            <!--<el-divider></el-divider>
            <div  style=" width: 400px; margin: 0 auto">
              <br/>
              <div style="position: relative; top: 10px"><el-badge value="new" class="item">&ensp;&ensp;&ensp;&ensp;mmm关注了你注了你注了你注了&ensp;</el-badge></div>
              <br/>
              <br/>
              <span style="font-size: 15px; color: gray">&ensp;&ensp;&ensp;&ensp;2022-02-06 16:00</span>
              <br/><br/>
              <el-divider></el-divider>
            </div>-->
            <!--<div v-for="notice in notificationList" :key="notice.notice_id">
            </div>-->
            <div v-for="notice in unreadnotificationList" :key="notice.notice_video">
              <div v-if="notice.notice_class===1" style=" width: 400px; margin: 0 auto">
                <br/>
                <div style="position: relative; top: 10px"><el-badge value="new" class="item">&ensp;&ensp;&ensp;&ensp;{{notice.notice_name}}关注了你&ensp;</el-badge></div>
                <br/>
                <br/>
                <span style="font-size: 15px; color: gray">&ensp;&ensp;&ensp;&ensp;{{notice.notice_time}}</span>
                <br/><br/>
                <el-divider></el-divider>
              </div>
              <div v-else-if="notice.notice_class===2" style=" width: 400px; margin: 0 auto">
                <br/>
                <div style="position: relative; top: 10px"><el-badge value="new" class="item">&ensp;&ensp;&ensp;&ensp;{{notice.notice_name}}在你的视频“{{notice.notice_video}}”发布了评论：&ensp;</el-badge></div>
                <br/>
                <div style="position: relative; top: 10px; font-size: 15px">&ensp;&ensp;&ensp;&ensp;{{notice.notice_content}}</div>
                <br/>
                <br/>
                <span style="font-size: 15px; color: gray">&ensp;&ensp;&ensp;&ensp;{{notice.notice_time}}</span>
                <br/><br/>
                <el-divider></el-divider>
              </div>
              <div v-else-if="notice.notice_class===3" style=" width: 400px; margin: 0 auto">
                <br/>
                <div style="position: relative; top: 10px"><el-badge value="new" class="item">&ensp;&ensp;&ensp;&ensp;你的视频“{{notice.notice_video}}”通过了审核&ensp;</el-badge></div>
                <br/>
                <br/>
                <span style="font-size: 15px; color: gray">&ensp;&ensp;&ensp;&ensp;{{notice.notice_time}}</span>
                <br/><br/>
                <el-divider></el-divider>
              </div>
              <div v-else-if="notice.notice_class===4" style=" width: 400px; margin: 0 auto">
                <br/>
                <div style="position: relative; top: 10px"><el-badge value="new" class="item">&ensp;&ensp;&ensp;&ensp;你的视频“{{notice.notice_video}}”未通过审核&ensp;</el-badge></div>
                <br/>
                <br/>
                <span style="font-size: 15px; color: gray">&ensp;&ensp;&ensp;&ensp;{{notice.notice_time}}</span>
                <br/><br/>
                <el-divider></el-divider>
              </div>
            </div>
            <div v-for="notice in readnotificationList" :key="notice.notice_video">
            <div v-if="notice.notice_class===1" style=" width: 400px; margin: 0 auto">
              <br/>
              <div style="position: relative; top: 10px">&ensp;&ensp;&ensp;&ensp;{{notice.notice_name}}关注了你</div>
              <br/>
              <br/>
              <span style="font-size: 15px; color: gray">&ensp;&ensp;&ensp;&ensp;{{notice.notice_time}}</span>
              <br/><br/>
              <el-divider></el-divider>
            </div>
            <div v-else-if="notice.notice_class===2" style=" width: 400px; margin: 0 auto">
              <br/>
              <div style="position: relative; top: 10px">&ensp;&ensp;&ensp;&ensp;{{notice.notice_name}}在你的视频“{{notice.notice_video}}”发布了评论：</div>
              <br/>
              <div style="position: relative; top: 10px; font-size: 15px">&ensp;&ensp;&ensp;&ensp;{{notice.notice_content}}</div>
              <br/>
              <br/>
              <span style="font-size: 15px; color: gray">&ensp;&ensp;&ensp;&ensp;{{notice.notice_time}}</span>
              <br/><br/>
              <el-divider></el-divider>
            </div>
            <div v-else-if="notice.notice_class===3" style=" width: 400px; margin: 0 auto">
              <br/>
              <div style="position: relative; top: 10px">&ensp;&ensp;&ensp;&ensp;你的视频“{{notice.notice_video}}”通过了审核</div>
              <br/>
              <br/>
              <span style="font-size: 15px; color: gray">&ensp;&ensp;&ensp;&ensp;{{notice.notice_time}}</span>
              <br/><br/>
              <el-divider></el-divider>
            </div>
            <div v-else-if="notice.notice_class===4" style=" width: 400px; margin: 0 auto">
              <br/>
              <div style="position: relative; top: 10px">&ensp;&ensp;&ensp;&ensp;你的视频“{{notice.notice_video}}”未通过审核</div>
              <br/>
              <br/>
              <span style="font-size: 15px; color: gray">&ensp;&ensp;&ensp;&ensp;{{notice.notice_time}}</span>
              <br/><br/>
              <el-divider></el-divider>
            </div>
            </div>
          </el-drawer>

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
  <div class = "user_main">
    <div style="position: absolute;left:50px;top:50px">
      <a>
        <img class="big-head"  style="  height: 70px;width: 70px;border-radius: 50%;" :src="this.userhead">
      </a>
    </div>
    <div class="username" style="position:absolute; left:140px;top:70px;color: black;font-size: 20px">{{this.username}}</div>
    <div class="fun_num" style="position:absolute;left:60px;top:140px;color: black;font-size: 20px">0</div>
    <div class="up_num" style="position:absolute;left:160px;top:140px;color: black;font-size: 20px">0</div>
    <div class="save_num" style="position:absolute;left:260px;top:140px;color: black;font-size: 20px">0</div>
    <div class="fun" style="position:absolute;left:45px;top:180px;color: black;font-size: 20px">粉丝</div>
    <div class="up" style="position:absolute;left:145px;top:185px;color: black;font-size: 20px">投稿</div>
    <div class="save" style="position:absolute;left:245px;top:180px;color: black;font-size: 20px">收藏</div>
    <div class="评论数" style="position:absolute;left:60px;top:220px;color: black;font-size: 20px">0</div>
    <div class="点赞数" style="position:absolute;left:160px;top:220px;color: black;font-size: 20px">0</div>
    <div class="关注数" style="position:absolute;left:260px;top:220px;color: black;font-size: 20px">0</div>
    <div class="评论" style="position:absolute;left:45px;top:260px;color: black;font-size: 20px">评论</div>
    <div class="点赞" style="position:absolute;left:145px;top:260px;color: black;font-size: 20px">点赞</div>
    <div class="关注" style="position:absolute;left:245px;top:260px;color: black;font-size: 20px">关注</div>
    <div class="sign" style="position:absolute;left:125px;top:300px;color: black;font-size: 20px">个性签名</div>
    <div class="sign_body" style="position:absolute;left:70px;top:340px;color: black;font-size: 15px">这个人很懒，什么也没有留下</div>
    <div style="position:absolute;left:20px;top:370px;">
      <el-menu :default-active="this.$router.path" router class="el-menu-demo" mode="horizontal" @select="handleSelect"  background-color="whitesmoke"
               text-color="black"
               active-text-color="black" >
        <el-menu-item index="/friend_list" style="width: 140px;height:60px;color: #0b95f1">关注列表</el-menu-item>
        <el-menu-item index="/saving_box" style="width: 140px;height:60px;color: #0b95f1">收藏夹</el-menu-item>
      </el-menu>
    </div>
  </div>
  <div class="收藏夹">
    <div style="width: 1000px; height: 50px; position: relative; top: 20px">在此处上传头像</div>
    <el-upload
        list-type="picture-card"
        action='video/uploadphoto'
        multiple
        :http-request="upLoadImage2"
        :before-upload="beforeImageUpload2"
        :file-list="change.head"
        :limit="1"
        :value="this.userhead"
        style="width: 200px;display: block; clear: both; margin: 0 auto">
      <i class="el-icon-plus"></i>
    </el-upload>
    <!--<el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>-->
    <div style="width: 1000px; height: 50px; position: relative; top: 10px; font-size: 15px">图片只能为jpg/png格式</div>
    <!--<div style="width: 1000px; height: 60px">
      <span style="width: 1000px; height: 50px; margin-right: 20px">个性签名:</span>
      <el-input style="width: 500px; margin: 0 auto" v-model="input" placeholder="请输入个性签名内容"></el-input>
      <el-button type="primary" style="height: 40px; margin-left: 10px; width: 60px; font-size: 10px">提交</el-button>
    </div>
    <div>
      <span style="width: 1000px; height: 50px; margin-right: 20px">用户名:</span>
      <el-input style="width: 500px; margin: 0 auto" v-model="input" placeholder="请输入新用户名"></el-input>
      <el-button type="primary" style="height: 40px; margin-left: 10px; width: 60px; font-size: 10px">提交</el-button>
    </div>
    <div>
      <span style="width: 1000px; height: 50px; margin-right: 20px">邮箱:</span>
      <el-input style="width: 500px; margin: 0 auto" v-model="input" placeholder="请输入新邮箱"></el-input>
    </div>
    <div>
      <span style="width: 1000px; height: 50px; margin-right: 20px">密码:</span>
      <el-input style="width: 500px; margin: 0 auto" v-model="input" placeholder="请输入新密码"></el-input>
    </div>-->
    <div style="width: 800px; margin: 0 auto;">
      <el-form ref="form" :model="change" label-width="80px">
       <el-form-item label="个性签名" style="margin-bottom: 20px; display: inline-block">
         <el-input v-model="change.sign" style="width: 500px;" :placeholder="this.oldsign" :value="this.oldsign"></el-input>
       </el-form-item>

          <el-form-item label="用户名" style="margin-bottom: 20px; display: inline-block">
            <el-input v-model="change.name" style="width: 500px" :placeholder="this.oldname" :value="this.oldname"></el-input>
          </el-form-item>

          <el-form-item label="邮箱" style="margin-bottom: 20px; display: inline-block">
            <el-input v-model="change.mail" style="width: 500px" :placeholder="this.oldmail" :value="this.oldmail"></el-input>
          </el-form-item>

          <el-form-item label="密码" style="margin-bottom: 20px; display: inline-block">
            <el-input v-model="change.password" style="width: 500px" :placeholder="this.oldpassword" :value="this.oldpassword"></el-input>
          </el-form-item>
        </el-form>
      <el-button @click="submit_all" type="primary" style="display: inline-block; height: 40px; width: 60px; margin-left: 10px">提交</el-button>
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
      FansNum:0,
      VideoNum:0,
      FavorNum:0,
      LikeNum:0,
      FollowNum:0,
      drawer: false,
      direction: 'rtl',
      notificationnum: '',
      unread_notification_num: '',
      readnotificationList: [],
      unreadnotificationList: [],

      oldname: '',
      oldsign: '',
      oldmail: '',
      oldpassword: '',


      change: {
        head: [],
        name: '',
        sign: '',
        mail: '',
        password: '',
      },

      uploadImgUrl:'',
      upLoadImage:'',
      beforeImageUpload:'',
      dialogVisible:'',
      dialogImageUrl:'',
      //以上data均复制粘贴子CreationCenter.vue，如需完成后端接口，请重新定义变量名，并在上方275行后相应部分进行修改
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
      imgList: [],
      url: '',
    }
  },
  created(){
    const userInfo = user.getters.getUser(user.state());
    console.log(userInfo);
    var i=0;
    if (userInfo) {
      this.userhead = userInfo.user.UserProfilePhotoUrl;
      this.url = userInfo.user.UserProfilePhotoUrl;
      this.username = userInfo.user.username;
      this.isLogin = 1;
      this.userid = userInfo.user.userid;
    } else {
      this.isLogin = 0;
    }
    this.$axios.get('user/detail/').then(
        res =>{
          this.oldpassword=res.data.user.UserPassword;
          this.oldmail=res.data.user.UserEmail;
          this.oldsign=res.data.user.UserIntroduction;
          this.oldname=res.data.user.UserName;
        },
    );
    this.$axios.get('user/' + this.userid).then(
        res =>{
          this.oldpassword=res.data.user.UserPassword;
          this.oldmail=res.data.user.UserEmail;
          this.oldsign=res.data.user.UserIntroduction;
          this.oldname=res.data.user.UserName;
        },
    );
    this.$axios.get('note/all').then(
        res => {
          this.notification_num=res.data.notificationReadNum;
          this.unread_notification_num=res.data.unread_notificationUnreadNum;
          for(i=0;i<this.notification_num;i++){
            this.readnotificationList.push(
                {
                  notice_class: res.data.notificationReadList[i].NoteClass,
                  notice_name: res.data.notificationReadList[i].NoteSenderName,
                  notice_content: res.data.notificationReadList[i].NoteContent,
                  notice_video: res.data.notificationReadList[i].NoteVideoName,
                  notice_time: res.data.notificationReadList[i].NoteDate,
                }
            )
          }
          for(i=0;i<this.unread_notification_num;i++){
            this.unreadnotificationList.push(
                {
                  notice_class: res.data.notificationList[i].NoteClass,
                  notice_name: res.data.notificationList[i].NoteSenderName,
                  notice_content: res.data.notificationList[i].NoteContent,
                  notice_video: res.data.notificationList[i].NoteVideoName,
                  notice_time: res.data.notificationList[i].NoteDate,
                }
            )
          }
        },
    );
  },
  methods:{
    notice1(){
      this.drawer = true;
      this.unread_notification_num=0;
      this.$axios(
          {
            method: 'post',
            url: 'note/setStauts',
            data: qs.stringify(
                {
                }
            )
          }
      )
    },
    /*handleClose(done) {
      this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {
          });
    },*/

    submit_all(){
      alert(this.change.name);
      alert(this.change.sign);
      alert(this.change.mail);
      alert(this.change.password);
      this.$axios({
        method: 'post',
        url:'user/changeUser',
        data: qs.stringify({
          photoUrl: this.url,
          Introduction: this.change.sign,
          username: this.change.name,
          email: this.change.mail,
          password: this.change.password,
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
    upLoadImage2(file) {
      const formData = new FormData();
      formData.append('image', file.file);
      this.$axios({
        method: 'post',
        url: 'video/uploadphoto',
        data: formData,
      })
          .then(res => {
            switch (res.data.status_code) {
              case 0:
                window.alert("error");
                break;
              case 1:
                this.url = res.data.url_img;
                alert("封面上传成功");
                console.log(this.willAddQuestion.imgList);
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
    beforeImageUpload2(file) {
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
    click_search(){
      alert(this.$refs.search.value);
      sessionStorage.setItem('message', JSON.stringify(this.$refs.search.value));
    },
    click_search1(){
      alert(this.$refs.search1.value);
      sessionStorage.setItem('message', JSON.stringify(this.$refs.search1.value));
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
  background: whitesmoke;
  left:420px;
  top:70px;
  width:1000px;
  height:2000px;
  border-radius: 8px;
  border-color: #DCDFE6;
  display: -moz-box;/*兼容Firefox*/
  /*display: -webkit-box;/*兼容FSafari、Chrome*/
}
.input-picture{
  position:absolute;
  display:inline-block;
  background: #545c64;
  left:520px;
  top:70px;
  width:1000px;
  height:350px;
  border-radius: 8px;
  border-color: #DCDFE6;
}
.视频上传{
  position:absolute;
  display:inline-block;
  background: #545c64;
  left:520px;
  top:430px;
  width: 1000px;
  height:350px;
  border-radius: 8px;
  border-color: #DCDFE6;

}
.head{
  position:absolute;
  left:210px;
  top:50px;

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
#main {
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  width: 70%;
}
/* banner图片等比例缩小 */
.banner{padding-bottom:34px;}

.banner,.banner a,.banner img{width: 100%;height: 100%;}
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
.zouma{
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
  padding: 0px;
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
  padding: 40px;  /* 内边界宽度  */
  position: absolute;  /* 设置为绝对定位，使下方的top和left生效  */
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);  /* 作用见后方描述  */
  background: #90b9e5;  /* 设置背景颜色  */
  text-align: center;  /* 表单中内容居中  */
  border-radius: 10px;
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

.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>