<template>
  <html>
  <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">
  <body>
  <!--<div style="position: fixed;z-index: 9999;width: 100%;">
    <el-menu
        :default-active="this.$router.path"
        router
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
      <div style="position: absolute;left:1000px; top:10px;z-index: 9999; display: inline-block">
        <el-avatar icon="el-icon-user-solid">
        </el-avatar>
      </div>
      <div style="position: absolute;left:1050px; top:20px;z-index: 9999; display: inline-block;color: whitesmoke">
        <a style="color: whitesmoke">
          高进进进进
        </a>
      </div>
      <div style="position: absolute; left: 1200px; top: 22px;z-index: 9999; display: inline-block">
        <i class="fa fa-paper-plane-o" style="color: whitesmoke"></i>
        <el-button
            plain
            @click="open"
            style="background:rgba(0,0,0,0%);border: 1px solid rgba(20,81,154,0);color: whitesmoke;font-size: 15px">
          &ensp;站内通知
        </el-button>
      </div>
      <el-menu-item index="/" style="width: 100px;"><a>
        <i class="fa fa-bank" style="color: whitesmoke"></i>
        <span style="color: whitesmoke;">
                  首页&nbsp;&nbsp;&nbsp;
                </span>
      </a></el-menu-item>
      <el-menu-item index="/user_center" style="width: 100px;"><a>
        <i class="fa fa-user-o" style="color:whitesmoke"></i>
        <span style="color: whitesmoke">
                  个人中心
                </span>
      </a></el-menu-item>
      <el-menu-item index="/saving_box" style="width: 100px;"><a>
        <i class="fa fa-file-video-o" style="color: whitesmoke"></i>
        <span style="color: whitesmoke">
                  收藏夹
                </span>
      </a></el-menu-item>
      <el-menu-item index="friend_list" style="width: 100px;"><a>
        <i class="fa fa-heart" style="color: whitesmoke"></i>
        <span style="color: whitesmoke">
                  关注
                </span>
      </a></el-menu-item>
      <div style="position:absolute; left:600px; top:10px; border:#000 1px;border: 1px solid rgba(20,81,154,0);">
        <form action="" class="parent">
          <input type="text" class="search">
          <input type="button" name=""  class="btn" style="z-index:1" >
        </form>
      </div>
    </el-menu>
  </div>-->
  <div v-if="this.needFixed == true" style="position: fixed;z-index: 9999;width: 100%;">
    <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="whitesmoke"
        text-color="#fff"
        active-text-color="#ffd04b">
      <div style="position: absolute;left:1000px; top:13px;z-index: 9999; display: inline-block">
        <router-link :to="'User_center'">
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
            <i class="el-icon-upload el-icon--right">
              上传&ensp;
            </i></el-button>
        </router-link>
      </div>
      <div style="position: absolute; left: 1200px; top: 22px;z-index: 9999; display: inline-block">
        <i class="fa fa-paper-plane-o" style="color: gray"></i>
        <el-button
            plain
            @click="open"
            style="background:rgba(0,0,0,0%);border: 1px solid rgba(20,81,154,0);color: gray;font-size: 15px">
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
        <router-link :to="'User_center'">
          <i class="fa fa-user-o" style="color:gray"></i>
          <span style="color: gray">
                  个人中心
                </span>
        </router-link></el-menu-item>
      <el-menu-item index="3" style="width: 100px; font-size: 15px">
        <router-link :to="'Saving_box'">
        <i class="fa fa-file-video-o" style="color: gray"></i>
        <span style="color: gray">
                  收藏夹
                </span>
      </router-link></el-menu-item>
      <el-menu-item index="4" style="width: 100px; font-size: 15px">
        <router-link :to="'Friend_list'">
        <i class="fa fa-heart" style="color: gray"></i>
        <span style="color: gray">
                  关注
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
            <router-link :to="'User_center'">
              <i class="fa fa-user-o" style="color:black"></i>
              <span style="color: black">
                  个人中心&nbsp;&nbsp;&nbsp;
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
                    style="width: 100%;margin: 0;border: 0;padding: 0;outline: none;border-radius: 16px;background: whitesmoke"
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
        <img class="big-head"  style="  height: 70px;width: 70px;border-radius: 50%;" src="../img/touxiang1.jpg">
      </a>
    </div>
    <div class="username" style="position:absolute; left:140px;top:70px;color: black;font-size: 20px">高进进进进</div>
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
    <i class="el-icon-goods" style="position: absolute;left:20px;top:25px;"></i>
    <div style="position:absolute;left:55px;top:0px;">
      <el-menu :default-active="this.$router.path" router class="el-menu-demo" mode="horizontal" @select="handleSelect"  background-color="whitesmoke"
               text-color="black"
               active-text-color="#eee" >
        <el-menu-item index="" style="width: 135px;height:60px;color: #0b95f1">全部</el-menu-item>
        <el-menu-item index="" style="width: 135px;height:60px;color: #0b95f1">动画</el-menu-item>
        <el-menu-item index="" style="width: 135px;height:60px;color: #0b95f1">电影</el-menu-item>
        <el-menu-item index="" style="width: 135px;height:60px;color: #0b95f1">游戏</el-menu-item>
        <el-menu-item index="" style="width: 135px;height:60px;color: #0b95f1">音乐</el-menu-item>
        <el-menu-item index="" style="width: 135px;height:60px;color: #0b95f1">学习</el-menu-item>
        <el-menu-item index="" style="width: 135px;height:60px;color: #0b95f1">鬼畜</el-menu-item>
      </el-menu>
    </div>
    <div style="position: relative;top: 100px;left: 25px">
      <table style="border-spacing:10px 25px;">
        <tr>
          <td>
            <img
                class="picture"
                src="../img/fengmian1.webp"
                alt=""
                style="border-radius: 6px"
            />
            <div class="up">
              <div class="up-cover">
                <div style="float: left" class="txt">
                  <router-link :to="'/videoPage'">
                    <p class="name">【LOL】20G2MSI宣传片——上单教父</p>
                    <span class="title">
                      g2电子经济俱乐部
                      <span style="float: right">
                  <el-dropdown @command="handleCommand">
                  <span class="el-dropdown-link">
                  <i class="fa fa-navicon"></i>
                  </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="a">取消收藏</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </span>
                    </span>
                  </router-link>
                </div>

              </div>
            </div>
          </td>
          <td>
            <img
                class="picture"
                src="../img/fengmian2.webp"
                alt=""
                style="border-radius: 6px"
            />
            <div class="up">
              <div class="up-cover">
                <div style="display: inline-block" class="txt">
                  <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                    <p class="name">【ADC玄学技巧】职业选手的对线压制力为什么这么强</p></a>
                  <span class="title">
                    不知名up主
                    <span style="float: right">
                  <el-dropdown @command="handleCommand">
                  <span class="el-dropdown-link">
                  <i class="fa fa-navicon"></i>
                  </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="a">取消收藏</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </span>
                  </span>
                </div>
              </div>
            </div>
          </td>
          <td>
            <img
                class="picture"
                src="../img/fengmian3.webp"
                alt=""
                style="border-radius: 6px"
            />
            <div class="up">
              <div class="up-cover">
                <div style="display: inline-block" class="txt">
                  <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                    <p class="name">【爆肝特效】三 国 第 一 战 神</p></a>
                    <span class="title">
                      高进进进
                      <span style="float: right">
                  <el-dropdown @command="handleCommand">
                  <span class="el-dropdown-link">
                  <i class="fa fa-navicon"></i>
                  </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="a">取消收藏</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </span>
                    </span>
                </div>
              </div>
            </div>
          </td>
          <td>
            <img
                class="picture"
                src="../img/fengmian4.webp"
                alt=""
                style="border-radius: 6px"
            />
            <div class="up">
              <div class="up-cover">
                <div style="display: inline-block" class="txt">
                  <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                    <p class="name">反 向 面 试 PUA</p></a>
                    <span class="title">
                      不说再见
                      <span style="float: right">
                  <el-dropdown @command="handleCommand">
                  <span class="el-dropdown-link">
                  <i class="fa fa-navicon"></i>
                  </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="a">取消收藏</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </span>
                    </span>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <img
                class="picture"
                src="../img/fengmian5.webp"
                alt=""
                style="border-radius: 6px"
            />
            <div class="up">
              <div class="up-cover">
                <div style="display: inline-block" class="txt">
                  <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                    <p class="name">&ensp;这首歌能否治愈你</p></a>
                    <span class="title">&ensp;
                      错过他很遗憾吧
                      <span style="float: right">
                  <el-dropdown @command="handleCommand">
                  <span class="el-dropdown-link">
                  <i class="fa fa-navicon"></i>
                  </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="a">取消收藏</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </span>
                    </span>
                </div>
              </div>
            </div>
          </td>
          <td>
            <img
                class="picture"
                src="../img/fengmian6.webp"
                alt=""
                style="border-radius: 6px"
            />
            <div class="up">
              <div class="up-cover">
                <div style="display: inline-block" class="txt">
                  <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                    <p class="name">这一吹，吹出了整个盛夏</p></a>
                    <span class="title">
                      ZB龙哥
                      <span style="float: right">
                  <el-dropdown @command="handleCommand">
                  <span class="el-dropdown-link">
                  <i class="fa fa-navicon"></i>
                  </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="a">取消收藏</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </span>
                    </span>
                </div>
              </div>
            </div>
          </td>
          <td>
          <img
              class="picture"
              src="../img/fengmian1.webp"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <router-link :to="'/videoPage'">
                  <p class="name">【LOL】20G2MSI宣传片——上单教父</p>
                  <span class="title">
                      g2电子经济俱乐部
                    </span>
                </router-link>
              </div>
            </div>
          </div>
        </td>
          <td>
            <img
                class="picture"
                src="../img/fengmian2.webp"
                alt=""
                style="border-radius: 6px"
            />
            <div class="up">
              <div class="up-cover">
                <div style="display: inline-block" class="txt">
                  <a href="https://live.bilibili.com/13?spm_id_from=333.851.b_62696c695f7265706f72745f6c697665.3" target="blank">
                    <p class="name">【ADC玄学技巧】职业选手的对线压制力为什么这么强</p></a>
                    <span class="title">
                      不知名up主
                      <span style="float: right">
                  <el-dropdown @command="handleCommand">
                  <span class="el-dropdown-link">
                  <i class="fa fa-navicon"></i>
                  </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="a">取消收藏</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </span>
                    </span>
                </div>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
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
  name: "User_center",
  data(){
    return {
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
      formLabelWidth: '120px'
    }
  },

  methods:{
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
    handleCommand(command) {
      this.$message('click on item ' + command);
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
  left:420px;
  top:70px;
  width:1000px;
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