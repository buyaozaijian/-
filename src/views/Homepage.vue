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
      <div style="position: absolute;left:1000px; top:13px;z-index: 9999; display: inline-block">
        <router-link :to="'/User_center'">
          <img src="../img/touxiang1.jpg" style="width: 40px;height: 40px;border-radius: 50%">
        </router-link>
      </div>
      <div style="position: absolute;left:1050px; top:20px;z-index: 9999; display: inline-block;color: gray">
        <a style="color: gray">
          高进进进进
        </a>
      </div>
      <div style="position: absolute;left:1350px; top:15px;z-index: 9999; display: inline-block;margin: 0;border: 0;outline: none">
        <router-link :to="'Up_video1'">
          <el-button type="primary" style="background: #fb7299;margin: 0;border: 0;outline: none;width: 85px;height: 35px;border-radius: 10px">
            <i class="el-icon-upload el-icon--right" style="margin: 0">
              上传&ensp;
            </i></el-button>
        </router-link>
      </div>
      <div style="position: absolute; left: 1200px; top: 13px;z-index: 9999; display: inline-block">
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
      <el-menu-item index="/user_center" style="width: 100px; font-size: 15px"><a>
        <router-link :to="'User_center'">
          <i class="fa fa-user-o" style="color:gray"></i>
          <span style="color: gray">
                  个人中心
                </span>
        </router-link>
      </a></el-menu-item>
      <el-menu-item index="/saving_box" style="width: 100px; font-size: 15px"><a>
        <i class="fa fa-file-video-o" style="color: gray"></i>
        <span style="color: gray">
                  收藏夹
                </span>
      </a></el-menu-item>
      <el-menu-item index="/friend_list" style="width: 100px; font-size: 15px"><a>
        <i class="fa fa-heart" style="color: gray"></i>
        <span style="color: gray">
                  关注
                </span>
      </a></el-menu-item>
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
  <header class="banner">
    <div style="position: relative">
      <img
          src="../img/background5.png"
          alt=""
          style="height: 400px"
      />
      <div style="position: absolute; left:100px; top:10px; border:#000 1px;border-bottom: 1px solid rgba(20,81,154,0); z-index: 1">
        <ul style="list-style-type:none; ">
          <li style="display: inline">
            <router-link :to="'/'">
              <i class="fa fa-bank" style="color: white"></i>
              <span style="color: white;">
                  首页&nbsp;&nbsp;&nbsp;
                </span>
            </router-link>
          </li>
          <li style="display: inline">
            <router-link :to="'/User_center'">
              <i class="fa fa-user-o" style="color:white"></i>
              <span style="color: white">
                  个人中心&nbsp;&nbsp;&nbsp;
                </span>
            </router-link>
          </li>
          <li style="display: inline">
            <router-link :to="'/Saving_box'">
              <i class="fa fa-file-video-o" style="color: white"></i>
              <span style="color: white">
                  收藏夹&nbsp;&nbsp;&nbsp;
                </span>
            </router-link>
          </li>
          <li style="display: inline">
            <router-link :to="'/Friend_list'">
              <i class="fa fa-heart" style="color: white"></i>
              <span style="color: white">
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
            <div class="nav-search" style="margin: 0;border: 0;padding: 0">
              <form id="nav-searchform1" style="width: 100%;margin: 0;border: 0;padding: 0">
                <input
                    class="search-input"
                    type="text"
                    placeholder="      谁说站在光里的才算英雄 "
                    style="width: 100%;margin: 0;border: 0;padding: 0;outline: none;border-radius: 16px"
                />
                <div class="nav-search-btn">
                  <button style="margin: 0;padding: 0;border: none;outline: none;top: 5px">
                    <img
                        src="../img/sousuo1.png"
                        alt=""
                        style="width: 30px;height: 27px;padding: 0px 7px;border-radius: 8px"
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div v-if="islogin==true" style="position: absolute;left:1000px; top:-5px;z-index: 9999; display: inline-block">
          <el-popover
              placement="top-start"
              title="高进进进进"
              width="300"
              trigger="hover"
              left="">
            <div>
              <div>
                id:20373518
              </div>
            </div>
            <router-link :to="'User_center'" slot="reference">
              <img src="../img/touxiang1.jpg" style="width: 40px;height: 40px;border-radius: 50%;border-color: white;border-width: 1px">
            </router-link>
          </el-popover>
        </div>
        <div style="position: absolute;left:1080px; top:-3px;z-index: 9999; display: inline-block;margin: 0;border: 0;outline: none">
          <router-link :to="'Up_video1'">
            <el-button type="primary" style="background: #fb7299;margin: 0;border: 0;outline: none;width: 85px;height: 35px;border-radius: 10px">
              <i class="el-icon-upload el-icon--right" style="margin: 0">
                上传
              </i></el-button>
          </router-link>
        </div>
        <div style="position: absolute; left: 1190px; top: -3px;z-index: 9999; display: inline-block;">
          <i class="fa fa-paper-plane-o" style="color: white"></i>
          <el-button
              plain
              @click="open"
              style="background:rgba(0,0,0,0%);border: 1px solid rgba(20,81,154,0);color: white;font-size: 15px">
            &ensp;站内通知
          </el-button>
        </div>
        <div v-if="islogin==false" style="position: absolute; left: 1000px; top: -3px;z-index: 9999; display: inline-block;">
          <button  @click="dialogFormVisible = true" style="width: 40px;height: 40px;border-radius: 50%;border-color: white;border-width: 1px">
              <router-link to="/try_login"><span style="color: #0b95f1">
                登录
              </span></router-link>
          </button>
          <!--<el-dialog title="登录" :visible.sync="dialogFormVisible" style="z-index: 9999">
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
              <router-link to="/try_login"><el-button @click="dialogFormVisible = false">取 消</el-button></router-link>
              <el-button type="primary" @click="click_login, dialogFormVisible = false">确 定</el-button>
              <span>&ensp;</span>
              <router-link to="/register_page"><el-button type="primary" @click="dialogFormVisible = false">没有账号？点击注册</el-button></router-link>
            </div>
          </el-dialog>-->
        </div>
      </div>
    </div>
  </header>
  <div class="zouma">
    <div>
      <el-carousel indicator-position="outside" style="width: 40%; display: inline-block; left: -370px; border-radius: 4px" >
        <el-carousel-item v-for="(img,index) in imgList" :key="index">
          <img :src="img.url" width="100%" height="100%">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div>
      <table style="display: inline-block; left:650px; top:419px" cellspacing="20">
        <tr>
          <td>
            <img
                class="picture"
                :src="this.videoList[0].videoCoverUrl"
                alt=""
                style="border-radius: 6px"
            />
            <div class="up">
              <div class="up-cover">
                <div style="float: left" class="txt">
                  <a target="blank">
                    <router-link to="/videoPage"><p id="0" class="name" @click="click1">{{this.videoList[0].videoName}}</p></router-link></a>
                  <p class="title">{{this.videoList[0].videoAuthor}}</p>
                </div>
              </div>
            </div>
          </td>
          <td>
            <img
                class="picture"
                :src="this.videoList[1].videoCoverUrl"
                alt=""
                style="border-radius: 6px"
            />
            <div class="up">
              <div class="up-cover">
                <div style="float: left" class="txt">
                  <a target="blank">
                    <router-link to="/videoPage"><p id="1" class="name" @click="click1">{{this.videoList[1].videoName}}</p></router-link></a>
                  <p class="title">{{this.videoList[1].videoAuthor}}</p>
                </div>
              </div>
            </div>
          </td>
          <td>
            <img
                class="picture"
                :src="this.videoList[2].videoCoverUrl"
                alt=""
                style="border-radius: 6px"
            />
            <div class="up">
              <div class="up-cover">
                <div style="float: left" class="txt">
                  <a target="blank">
                    <router-link to="/videoPage"><p id="2" class="name" @click="click1">{{this.videoList[2].videoName}}</p></router-link></a>
                  <p class="title">{{this.videoList[2].videoAuthor}}</p>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <img
                class="picture"
                :src="this.videoList[3].videoCoverUrl"
                alt=""
                style="border-radius: 6px"
            />
            <div class="up">
              <div class="up-cover">
                <div style="float: left" class="txt">
                  <a target="blank">
                    <router-link to="/videoPage"><p id="3" class="name" @click="click1">{{this.videoList[3].videoName}}</p></router-link></a>
                  <p class="title">{{this.videoList[3].videoAuthor}}</p>
                </div>
              </div>
            </div>
          </td>
          <td>
            <img
                class="picture"
                :src="this.videoList[4].videoCoverUrl"
                alt=""
                style="border-radius: 6px"
            />
            <div class="up">
              <div class="up-cover">
                <div style="float: left" class="txt">
                  <a target="blank">
                    <router-link to="/videoPage"><p id="4" class="name" @click="click1">{{this.videoList[4].videoName}}</p></router-link></a>
                  <p class="title">{{this.videoList[4].videoAuthor}}</p>
                </div>
              </div>
            </div>
          </td>
          <td>
            <img
                class="picture"
                :src="this.videoList[5].videoCoverUrl"
                alt=""
                style="border-radius: 6px"
            />
            <div class="up">
              <div class="up-cover">
                <div style="float: left" class="txt">
                  <a target="blank">
                    <router-link to="/videoPage"><p id="5" class="name" @click="click1">{{this.videoList[5].videoName}}</p></router-link></a>
                  <p class="title">{{this.videoList[5].videoAuthor}}</p>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
  <div class="all" >
    <div align="left">
          <span style="font-size: 30px">
            <i class="fa fa-bookmark-o" style="color: gray" ></i>
            动画
          </span>
      <span>
            <el-button round><i class="el-icon-refresh"></i>换一换</el-button>
          </span>
    </div>
    <!--<div class="top-comntent">
      <img
          style="padding-right: 15px; width: 36px; height: 36px"
          src="../img/zhibo.jpg"
          alt=""
      />
      <span class="video-title">
        <a
            style="font-size: 20px"
            href="https://live.bilibili.com/?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.1"
            target="blank"
        >正在直播</a
        >
        <div style="display: inline-block" class="text-info">
          <span>当前共有26409个在线直播</span>
        </div>
      </span>
      <span class="swap">
          <button class="btn">换一换</button>
          <button class="btn">更多</button>
      </span>
      <span class="other">
          <div style="display: inline-block" class="tab-switch">直播排行</div>
          <div style="display: inline-block" class="tab-switch">关注的主播</div>
          <div style="display: inline-block" class="tab-switch">为你推荐</div>
      </span>
    </div>-->
    <table class="tab" cellspacing="20">
      <tr>
        <td>
          <router-link :to="'/videoPage'">
            <img
                class="picture"
                src="../img/zhibo1.jpg"
                alt=""
                style="border-radius: 6px"
            />
            <div class="up">
              <div class="up-cover">
                <img class="face" src="../img/zhibo2.jpg" alt="">
                <div style="display: inline-block" class="txt">
                  <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                    <p class="name">哔哩哔哩王者荣耀赛事</p></a>
                  <p class="title">武汉eStarPro vs RW侠</p>
                  <p class="tag">王者荣耀</p>
                </div>
              </div>
            </div>
          </router-link>
        </td>
        <td>
          <img
              class="picture"
              src="../img/zhibo3.png"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="../img/zhibo4.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">幻境光影</p></a>
                <p class="title">走进比利时法兰得斯，全息...</p>
                <p class="tag">户外</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <video class="picture" width="320" height="240" controls autoplay style="border-radius: 6px">		<!-- 设置边框 -->
            <!--<source src="../img/WeChat_20220420153702.mp4" type="video/mp4" />		引用视频文件-->
          </video>
          <!--<img
              class="picture"
              src="../img/zhibo5.jpg"
              alt=""
          />-->
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i2.hdslb.com/bfs/face/03e7f3f6d88563038e275298c2cd942d2ac99d6a.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">白神遥Haruka</p></a>
                <p class="title">PUBG的苏帕海豹！</p>
                <p class="tag">虚拟主播</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/user_cover/c4feb13f58f01a5646869d64bc2c8ee5730b010c.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/d6ce0a652840166789873ea3b623e828af59b2e4.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">小菜刀夫斯基</p></a>
                <p class="title">什么标题都无法让你点进来</p>
                <p class="tag">视频聊天</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/user_cover/c4feb13f58f01a5646869d64bc2c8ee5730b010c.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/d6ce0a652840166789873ea3b623e828af59b2e4.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">小菜刀夫斯基</p></a>
                <p class="title">什么标题都无法让你点进来</p>
                <p class="tag">视频聊天</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/new_room_cover/2867490b8b069c35a158be5ba58abd7b7e6ca121.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/f3828cb7eb627cfdb334a10009d2b6171afb1535.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">打滚的白面包</p></a>
                <p class="title">造女儿</p>
                <p class="tag">绘画</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/user_cover/b64f38e5c5a9d8cff50c6a9ffda932ced2fe3ed3.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/386c8dfa4f00a87b30ce2959c118a189785ceb71.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">❀Sakulaˇ小舞</p></a>
                <p class="title">四叶草剧场：梦醒！~♪</p>
                <p class="tag">虚拟主播</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/new_room_cover/36f9e0c9f600f406292936c1b1f791b62242af5c.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/039020a19ae660d80f007dfc6fa2848cd06af3f1.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">绘伴-绘画教学课堂</p></a>
                <p class="title">【板绘教学课堂】</p>
                <p class="tag">绘画</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/user_cover/cf7523853dd80dd0b9e49d21479d26f3acf02a61.jpg@309w_174h_1c_100q.webp"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i2.hdslb.com/bfs/face/c482f464081bb49f65c7dc3edbd029c62f95fc85.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">哔哩哔哩王者荣耀赛事</p></a>
                <p class="title">努力学习丨朝六晚一</p>
                <p class="tag">陪伴学习</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/user_cover/c4feb13f58f01a5646869d64bc2c8ee5730b010c.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/d6ce0a652840166789873ea3b623e828af59b2e4.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">小菜刀夫斯基</p></a>
                <p class="title">什么标题都无法让你点进来</p>
                <p class="tag">视频聊天</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>
  <div class="all">
    <div align="left">
        <span style="font-size: 30px">
          <i class="fa fa-bookmark-o" style="color: gray" ></i>
          电影
        </span>
      <span>
            <el-button round><i class="el-icon-refresh"></i>换一换</el-button>
          </span>
    </div>
    <!--<div class="top-comntent">
      <img
          style="padding-right: 15px; width: 36px; height: 36px"
          src="../img/zhibo.jpg"
          alt=""
      />
      <span class="video-title">
        <a
            style="font-size: 20px"
            href="https://live.bilibili.com/?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.1"
            target="blank"
        >正在直播</a
        >
        <div style="display: inline-block" class="text-info">
          <span>当前共有26409个在线直播</span>
        </div>
      </span>
      <span class="swap">
          <button class="btn">换一换</button>
          <button class="btn">更多</button>
      </span>
      <span class="other">
          <div style="display: inline-block" class="tab-switch">直播排行</div>
          <div style="display: inline-block" class="tab-switch">关注的主播</div>
          <div style="display: inline-block" class="tab-switch">为你推荐</div>
      </span>
    </div>-->
    <table class="tab" cellspacing="20">
      <tr>
        <td>
          <img
              class="picture"
              src="../img/zhibo1.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="../img/zhibo2.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">哔哩哔哩王者荣耀赛事</p></a>
                <p class="title">武汉eStarPro vs RW侠</p>
                <p class="tag">王者荣耀</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="../img/zhibo3.png"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="../img/zhibo4.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">幻境光影</p></a>
                <p class="title">走进比利时法兰得斯，全息...</p>
                <p class="tag">户外</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <video class="picture" width="320" height="240" controls autoplay style="border-radius: 6px">		<!-- 设置边框 -->
            <!--<source src="../img/WeChat_20220420153702.mp4" type="video/mp4" />		引用视频文件-->
          </video>
          <!--<img
              class="picture"
              src="../img/zhibo5.jpg"
              alt=""
          />-->
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i2.hdslb.com/bfs/face/03e7f3f6d88563038e275298c2cd942d2ac99d6a.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">白神遥Haruka</p></a>
                <p class="title">PUBG的苏帕海豹！</p>
                <p class="tag">虚拟主播</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/user_cover/c4feb13f58f01a5646869d64bc2c8ee5730b010c.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/d6ce0a652840166789873ea3b623e828af59b2e4.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">小菜刀夫斯基</p></a>
                <p class="title">什么标题都无法让你点进来</p>
                <p class="tag">视频聊天</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/user_cover/c4feb13f58f01a5646869d64bc2c8ee5730b010c.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/d6ce0a652840166789873ea3b623e828af59b2e4.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">小菜刀夫斯基</p></a>
                <p class="title">什么标题都无法让你点进来</p>
                <p class="tag">视频聊天</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/new_room_cover/2867490b8b069c35a158be5ba58abd7b7e6ca121.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/f3828cb7eb627cfdb334a10009d2b6171afb1535.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">打滚的白面包</p></a>
                <p class="title">造女儿</p>
                <p class="tag">绘画</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/user_cover/b64f38e5c5a9d8cff50c6a9ffda932ced2fe3ed3.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/386c8dfa4f00a87b30ce2959c118a189785ceb71.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">❀Sakulaˇ小舞</p></a>
                <p class="title">四叶草剧场：梦醒！~♪</p>
                <p class="tag">虚拟主播</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/new_room_cover/36f9e0c9f600f406292936c1b1f791b62242af5c.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/039020a19ae660d80f007dfc6fa2848cd06af3f1.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">绘伴-绘画教学课堂</p></a>
                <p class="title">【板绘教学课堂】</p>
                <p class="tag">绘画</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/user_cover/cf7523853dd80dd0b9e49d21479d26f3acf02a61.jpg@309w_174h_1c_100q.webp"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i2.hdslb.com/bfs/face/c482f464081bb49f65c7dc3edbd029c62f95fc85.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">哔哩哔哩王者荣耀赛事</p></a>
                <p class="title">努力学习丨朝六晚一</p>
                <p class="tag">陪伴学习</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/user_cover/c4feb13f58f01a5646869d64bc2c8ee5730b010c.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/d6ce0a652840166789873ea3b623e828af59b2e4.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">小菜刀夫斯基</p></a>
                <p class="title">什么标题都无法让你点进来</p>
                <p class="tag">视频聊天</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>
  <div class="all">
    <div align="left">
          <span style="font-size: 30px">
            <i class="fa fa-bookmark-o" style="color: gray" ></i>
            游戏
          </span>
      <span>
            <el-button round><i class="el-icon-refresh"></i>换一换</el-button>
          </span>
    </div>
    <!--<div class="top-comntent">
      <img
          style="padding-right: 15px; width: 36px; height: 36px"
          src="../img/zhibo.jpg"
          alt=""
      />
      <span class="video-title">
        <a
            style="font-size: 20px"
            href="https://live.bilibili.com/?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.1"
            target="blank"
        >正在直播</a
        >
        <div style="display: inline-block" class="text-info">
          <span>当前共有26409个在线直播</span>
        </div>
      </span>
      <span class="swap">
          <button class="btn">换一换</button>
          <button class="btn">更多</button>
      </span>
      <span class="other">
          <div style="display: inline-block" class="tab-switch">直播排行</div>
          <div style="display: inline-block" class="tab-switch">关注的主播</div>
          <div style="display: inline-block" class="tab-switch">为你推荐</div>
      </span>
    </div>-->
    <table class="tab" cellspacing="20">
      <tr>
        <td>
          <img
              class="picture"
              src="../img/zhibo1.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="../img/zhibo2.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">哔哩哔哩王者荣耀赛事</p></a>
                <p class="title">武汉eStarPro vs RW侠</p>
                <p class="tag">王者荣耀</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="../img/zhibo3.png"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="../img/zhibo4.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">幻境光影</p></a>
                <p class="title">走进比利时法兰得斯，全息...</p>
                <p class="tag">户外</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <video class="picture" width="320" height="240" controls autoplay style="border-radius: 6px">		<!-- 设置边框 -->
            <!--<source src="../img/WeChat_20220420153702.mp4" type="video/mp4" />		引用视频文件-->
          </video>
          <!--<img
              class="picture"
              src="../img/zhibo5.jpg"
              alt=""
          />-->
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i2.hdslb.com/bfs/face/03e7f3f6d88563038e275298c2cd942d2ac99d6a.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">白神遥Haruka</p></a>
                <p class="title">PUBG的苏帕海豹！</p>
                <p class="tag">虚拟主播</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/user_cover/c4feb13f58f01a5646869d64bc2c8ee5730b010c.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/d6ce0a652840166789873ea3b623e828af59b2e4.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">小菜刀夫斯基</p></a>
                <p class="title">什么标题都无法让你点进来</p>
                <p class="tag">视频聊天</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/user_cover/c4feb13f58f01a5646869d64bc2c8ee5730b010c.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/d6ce0a652840166789873ea3b623e828af59b2e4.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">小菜刀夫斯基</p></a>
                <p class="title">什么标题都无法让你点进来</p>
                <p class="tag">视频聊天</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/new_room_cover/2867490b8b069c35a158be5ba58abd7b7e6ca121.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/f3828cb7eb627cfdb334a10009d2b6171afb1535.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">打滚的白面包</p></a>
                <p class="title">造女儿</p>
                <p class="tag">绘画</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/user_cover/b64f38e5c5a9d8cff50c6a9ffda932ced2fe3ed3.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/386c8dfa4f00a87b30ce2959c118a189785ceb71.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">❀Sakulaˇ小舞</p></a>
                <p class="title">四叶草剧场：梦醒！~♪</p>
                <p class="tag">虚拟主播</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/new_room_cover/36f9e0c9f600f406292936c1b1f791b62242af5c.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/039020a19ae660d80f007dfc6fa2848cd06af3f1.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">绘伴-绘画教学课堂</p></a>
                <p class="title">【板绘教学课堂】</p>
                <p class="tag">绘画</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/user_cover/cf7523853dd80dd0b9e49d21479d26f3acf02a61.jpg@309w_174h_1c_100q.webp"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i2.hdslb.com/bfs/face/c482f464081bb49f65c7dc3edbd029c62f95fc85.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">哔哩哔哩王者荣耀赛事</p></a>
                <p class="title">努力学习丨朝六晚一</p>
                <p class="tag">陪伴学习</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/user_cover/c4feb13f58f01a5646869d64bc2c8ee5730b010c.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/d6ce0a652840166789873ea3b623e828af59b2e4.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">小菜刀夫斯基</p></a>
                <p class="title">什么标题都无法让你点进来</p>
                <p class="tag">视频聊天</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>
  <div class="all">
    <div align="left">
          <span style="font-size: 30px">
            <i class="fa fa-bookmark-o" style="color: gray" ></i>
            音乐
          </span>
      <span>
            <el-button round><i class="el-icon-refresh"></i>换一换</el-button>
          </span>
    </div>
    <!--<div class="top-comntent">
      <img
          style="padding-right: 15px; width: 36px; height: 36px"
          src="../img/zhibo.jpg"
          alt=""
      />
      <span class="video-title">
        <a
            style="font-size: 20px"
            href="https://live.bilibili.com/?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.1"
            target="blank"
        >正在直播</a
        >
        <div style="display: inline-block" class="text-info">
          <span>当前共有26409个在线直播</span>
        </div>
      </span>
      <span class="swap">
          <button class="btn">换一换</button>
          <button class="btn">更多</button>
      </span>
      <span class="other">
          <div style="display: inline-block" class="tab-switch">直播排行</div>
          <div style="display: inline-block" class="tab-switch">关注的主播</div>
          <div style="display: inline-block" class="tab-switch">为你推荐</div>
      </span>
    </div>-->
    <table class="tab" cellspacing="20">
      <tr>
        <td>
          <img
              class="picture"
              src="../img/zhibo1.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="../img/zhibo2.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">哔哩哔哩王者荣耀赛事</p></a>
                <p class="title">武汉eStarPro vs RW侠</p>
                <p class="tag">王者荣耀</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="../img/zhibo3.png"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="../img/zhibo4.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">幻境光影</p></a>
                <p class="title">走进比利时法兰得斯，全息...</p>
                <p class="tag">户外</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <video class="picture" width="320" height="240" controls autoplay style="border-radius: 6px">		<!-- 设置边框 -->
            <!--<source src="../img/WeChat_20220420153702.mp4" type="video/mp4" />		引用视频文件-->
          </video>
          <!--<img
              class="picture"
              src="../img/zhibo5.jpg"
              alt=""
          />-->
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i2.hdslb.com/bfs/face/03e7f3f6d88563038e275298c2cd942d2ac99d6a.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">白神遥Haruka</p></a>
                <p class="title">PUBG的苏帕海豹！</p>
                <p class="tag">虚拟主播</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/user_cover/c4feb13f58f01a5646869d64bc2c8ee5730b010c.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/d6ce0a652840166789873ea3b623e828af59b2e4.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">小菜刀夫斯基</p></a>
                <p class="title">什么标题都无法让你点进来</p>
                <p class="tag">视频聊天</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/user_cover/c4feb13f58f01a5646869d64bc2c8ee5730b010c.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/d6ce0a652840166789873ea3b623e828af59b2e4.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">小菜刀夫斯基</p></a>
                <p class="title">什么标题都无法让你点进来</p>
                <p class="tag">视频聊天</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/new_room_cover/2867490b8b069c35a158be5ba58abd7b7e6ca121.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/f3828cb7eb627cfdb334a10009d2b6171afb1535.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">打滚的白面包</p></a>
                <p class="title">造女儿</p>
                <p class="tag">绘画</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/user_cover/b64f38e5c5a9d8cff50c6a9ffda932ced2fe3ed3.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/386c8dfa4f00a87b30ce2959c118a189785ceb71.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">❀Sakulaˇ小舞</p></a>
                <p class="title">四叶草剧场：梦醒！~♪</p>
                <p class="tag">虚拟主播</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/new_room_cover/36f9e0c9f600f406292936c1b1f791b62242af5c.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/039020a19ae660d80f007dfc6fa2848cd06af3f1.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">绘伴-绘画教学课堂</p></a>
                <p class="title">【板绘教学课堂】</p>
                <p class="tag">绘画</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/user_cover/cf7523853dd80dd0b9e49d21479d26f3acf02a61.jpg@309w_174h_1c_100q.webp"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i2.hdslb.com/bfs/face/c482f464081bb49f65c7dc3edbd029c62f95fc85.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">哔哩哔哩王者荣耀赛事</p></a>
                <p class="title">努力学习丨朝六晚一</p>
                <p class="tag">陪伴学习</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/user_cover/c4feb13f58f01a5646869d64bc2c8ee5730b010c.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/d6ce0a652840166789873ea3b623e828af59b2e4.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">小菜刀夫斯基</p></a>
                <p class="title">什么标题都无法让你点进来</p>
                <p class="tag">视频聊天</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>
  <div class="all">
    <div align="left">
          <span style="font-size: 30px">
            <i class="fa fa-bookmark-o" style="color: gray" ></i>
            学习
          </span>
      <span>
            <el-button round><i class="el-icon-refresh"></i>换一换</el-button>
          </span>
    </div>
    <!--<div class="top-comntent">
      <img
          style="padding-right: 15px; width: 36px; height: 36px"
          src="../img/zhibo.jpg"
          alt=""
      />
      <span class="video-title">
        <a
            style="font-size: 20px"
            href="https://live.bilibili.com/?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.1"
            target="blank"
        >正在直播</a
        >
        <div style="display: inline-block" class="text-info">
          <span>当前共有26409个在线直播</span>
        </div>
      </span>
      <span class="swap">
          <button class="btn">换一换</button>
          <button class="btn">更多</button>
      </span>
      <span class="other">
          <div style="display: inline-block" class="tab-switch">直播排行</div>
          <div style="display: inline-block" class="tab-switch">关注的主播</div>
          <div style="display: inline-block" class="tab-switch">为你推荐</div>
      </span>
    </div>-->
    <table class="tab" cellspacing="20">
      <tr>
        <td>
          <img
              class="picture"
              src="../img/zhibo1.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="../img/zhibo2.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">哔哩哔哩王者荣耀赛事</p></a>
                <p class="title">武汉eStarPro vs RW侠</p>
                <p class="tag">王者荣耀</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="../img/zhibo3.png"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="../img/zhibo4.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">幻境光影</p></a>
                <p class="title">走进比利时法兰得斯，全息...</p>
                <p class="tag">户外</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <video class="picture" width="320" height="240" controls autoplay style="border-radius: 6px">		<!-- 设置边框 -->
            <!--<source src="../img/WeChat_20220420153702.mp4" type="video/mp4" />		引用视频文件-->
          </video>
          <!--<img
              class="picture"
              src="../img/zhibo5.jpg"
              alt=""
          />-->
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i2.hdslb.com/bfs/face/03e7f3f6d88563038e275298c2cd942d2ac99d6a.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">白神遥Haruka</p></a>
                <p class="title">PUBG的苏帕海豹！</p>
                <p class="tag">虚拟主播</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/user_cover/c4feb13f58f01a5646869d64bc2c8ee5730b010c.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/d6ce0a652840166789873ea3b623e828af59b2e4.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">小菜刀夫斯基</p></a>
                <p class="title">什么标题都无法让你点进来</p>
                <p class="tag">视频聊天</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/user_cover/c4feb13f58f01a5646869d64bc2c8ee5730b010c.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/d6ce0a652840166789873ea3b623e828af59b2e4.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">小菜刀夫斯基</p></a>
                <p class="title">什么标题都无法让你点进来</p>
                <p class="tag">视频聊天</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/new_room_cover/2867490b8b069c35a158be5ba58abd7b7e6ca121.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/f3828cb7eb627cfdb334a10009d2b6171afb1535.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">打滚的白面包</p></a>
                <p class="title">造女儿</p>
                <p class="tag">绘画</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/user_cover/b64f38e5c5a9d8cff50c6a9ffda932ced2fe3ed3.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/386c8dfa4f00a87b30ce2959c118a189785ceb71.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">❀Sakulaˇ小舞</p></a>
                <p class="title">四叶草剧场：梦醒！~♪</p>
                <p class="tag">虚拟主播</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/new_room_cover/36f9e0c9f600f406292936c1b1f791b62242af5c.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/039020a19ae660d80f007dfc6fa2848cd06af3f1.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">绘伴-绘画教学课堂</p></a>
                <p class="title">【板绘教学课堂】</p>
                <p class="tag">绘画</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/user_cover/cf7523853dd80dd0b9e49d21479d26f3acf02a61.jpg@309w_174h_1c_100q.webp"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i2.hdslb.com/bfs/face/c482f464081bb49f65c7dc3edbd029c62f95fc85.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">哔哩哔哩王者荣耀赛事</p></a>
                <p class="title">努力学习丨朝六晚一</p>
                <p class="tag">陪伴学习</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/user_cover/c4feb13f58f01a5646869d64bc2c8ee5730b010c.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/d6ce0a652840166789873ea3b623e828af59b2e4.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">小菜刀夫斯基</p></a>
                <p class="title">什么标题都无法让你点进来</p>
                <p class="tag">视频聊天</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>
  <div class="all">
    <div align="left">
          <span style="font-size: 30px">
            <i class="fa fa-bookmark-o" style="color: gray" ></i>
            鬼畜
          </span>
      <span>
            <el-button round><i class="el-icon-refresh"></i>换一换</el-button>
          </span>
    </div>
    <!--<div class="top-comntent">
      <img
          style="padding-right: 15px; width: 36px; height: 36px"
          src="../img/zhibo.jpg"
          alt=""
      />
      <span class="video-title">
        <a
            style="font-size: 20px"
            href="https://live.bilibili.com/?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.1"
            target="blank"
        >正在直播</a
        >
        <div style="display: inline-block" class="text-info">
          <span>当前共有26409个在线直播</span>
        </div>
      </span>
      <span class="swap">
          <button class="btn">换一换</button>
          <button class="btn">更多</button>
      </span>
      <span class="other">
          <div style="display: inline-block" class="tab-switch">直播排行</div>
          <div style="display: inline-block" class="tab-switch">关注的主播</div>
          <div style="display: inline-block" class="tab-switch">为你推荐</div>
      </span>
    </div>-->
    <table class="tab" cellspacing="20">
      <tr>
        <td>
          <img
              class="picture"
              src="../img/zhibo1.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="../img/zhibo2.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">哔哩哔哩王者荣耀赛事</p></a>
                <p class="title">武汉eStarPro vs RW侠</p>
                <p class="tag">王者荣耀</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="../img/zhibo3.png"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="../img/zhibo4.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">幻境光影</p></a>
                <p class="title">走进比利时法兰得斯，全息...</p>
                <p class="tag">户外</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <video class="picture" width="320" height="240" controls autoplay style="border-radius: 6px">		<!-- 设置边框 -->
            <!--<source src="../img/WeChat_20220420153702.mp4" type="video/mp4" />		引用视频文件-->
          </video>
          <!--<img
              class="picture"
              src="../img/zhibo5.jpg"
              alt=""
          />-->
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i2.hdslb.com/bfs/face/03e7f3f6d88563038e275298c2cd942d2ac99d6a.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">白神遥Haruka</p></a>
                <p class="title">PUBG的苏帕海豹！</p>
                <p class="tag">虚拟主播</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/user_cover/c4feb13f58f01a5646869d64bc2c8ee5730b010c.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/d6ce0a652840166789873ea3b623e828af59b2e4.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">小菜刀夫斯基</p></a>
                <p class="title">什么标题都无法让你点进来</p>
                <p class="tag">视频聊天</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/user_cover/c4feb13f58f01a5646869d64bc2c8ee5730b010c.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/d6ce0a652840166789873ea3b623e828af59b2e4.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">小菜刀夫斯基</p></a>
                <p class="title">什么标题都无法让你点进来</p>
                <p class="tag">视频聊天</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/new_room_cover/2867490b8b069c35a158be5ba58abd7b7e6ca121.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/f3828cb7eb627cfdb334a10009d2b6171afb1535.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">打滚的白面包</p></a>
                <p class="title">造女儿</p>
                <p class="tag">绘画</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/user_cover/b64f38e5c5a9d8cff50c6a9ffda932ced2fe3ed3.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/386c8dfa4f00a87b30ce2959c118a189785ceb71.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">❀Sakulaˇ小舞</p></a>
                <p class="title">四叶草剧场：梦醒！~♪</p>
                <p class="tag">虚拟主播</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/new_room_cover/36f9e0c9f600f406292936c1b1f791b62242af5c.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/039020a19ae660d80f007dfc6fa2848cd06af3f1.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">绘伴-绘画教学课堂</p></a>
                <p class="title">【板绘教学课堂】</p>
                <p class="tag">绘画</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/user_cover/cf7523853dd80dd0b9e49d21479d26f3acf02a61.jpg@309w_174h_1c_100q.webp"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i2.hdslb.com/bfs/face/c482f464081bb49f65c7dc3edbd029c62f95fc85.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">哔哩哔哩王者荣耀赛事</p></a>
                <p class="title">努力学习丨朝六晚一</p>
                <p class="tag">陪伴学习</p>
              </div>
            </div>
          </div>
        </td>
        <td>
          <img
              class="picture"
              src="https://i0.hdslb.com/bfs/live/user_cover/c4feb13f58f01a5646869d64bc2c8ee5730b010c.jpg"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <img class="face" src="https://i0.hdslb.com/bfs/face/d6ce0a652840166789873ea3b623e828af59b2e4.jpg" alt="">
              <div style="display: inline-block" class="txt">
                <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                  <p class="name">小菜刀夫斯基</p></a>
                <p class="title">什么标题都无法让你点进来</p>
                <p class="tag">视频聊天</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>
  </body>
  <!--<div class="login">
    <div class="form-box">
      <h1>Login</h1>
      <label><input v-model="username" type="text" placeholder="Username" class="username"></label>
      <label><input v-model="password" type="password" placeholder="Password" class="password"></label>
      <button type="submit" @click="click_login" class="login">Login</button>
    </div>
  </div>-->
  </html>
</template>

<script>
import qs from "qs";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Homepage",
  data(){
    return {
      Title:"视频连接中",
      islogin: false,
      username: '',
      password: '',
      dialogOfUpload: false,
      fileList: [],
      headers: {
        'Content-Type': 'multipart/form-data'
      },
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
      imgList:[
        {
          url:require('../img/fengmian1.webp')
        },
        {
          url:require('../img/fengmian2.webp')
        },
        {
          url:require('../img/fengmian3.webp')
        },
        {
          url:require('../img/fengmian4.webp')
        }
      ],
      videoList: [],
      video:[],
    }
  },
  created() {
    var i = 0;
    for(i=0;i<6;i++)
    {
      this.videoList.push({
        videoAuthor: '未知',
        videoId: '',
        videoUrl: '',
        videoCoverUrl: '',
        videoName: '视频连接中'
      });
    }
    this.$axios.get('/index/main').then(
        res => {
          for(i=0;i<6;i++)
          {
              this.videoList[i].videoAuthor= res.data.videoList[i].VideoAuthorName,
              this.videoList[i].videoId= res.data.videoList[i].id,
              this.videoList[i].videoUrl= res.data.videoList[i].VideoUrl,
              this.videoList[i].videoCoverUrl= res.data.videoList[i].VideoCoverUrl,
              this.videoList[i].videoName= res.data.videoList[i].VideoTitle
          }
        },
    );
  },

  methods:{
    open() {
      this.$notify({
        title: '站内通知',
        message: '请您先充钱再观看视频\n没钱还想白嫖？',
        offset: 100
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

    click1(){
      this.$store.state.videourl = this.videoList[event.srcElement.id].videoUrl;
      this.$store.state.videoname = this.videoList[event.srcElement.id].videoName;
      window.alert(this.$store.state.videourl);
    },

    click_login(){
      window.alert("here");
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

  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
html {
  width: 100%;
  height: 100%;
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
  padding: 0;
}
.name {
  float: left;
  line-height: 20px;
  text-align: left;
  margin-top: 5px;
  height: 45px;
  width: 240px;
  font-size: 14px;
  color: black;
  font-weight: 600;
  /* padding-left: 50px; */
}
.tag {
  font-size: 12px;
  line-height: 16px;
  color: #999;
  margin-top: 8px;
}
.title{
  float: left;
  text-align: left;
  font-size: 13px;
  color: gray;
  height: 30px;
  width: 240px;
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
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
</style>