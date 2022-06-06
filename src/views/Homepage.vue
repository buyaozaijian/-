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
          <img :src="this.$store.state.userhead" style="width: 40px;height: 40px;border-radius: 50%">
        </router-link>
      </div>
      <div style="position: absolute;left:1050px; top:20px;z-index: 9999; display: inline-block;color: gray">
        <a style="color: gray">
          {{this.$store.state.username}}
        </a>
      </div>
      <div style="position: absolute;left:1350px; top:15px;z-index: 9999; display: inline-block;margin: 0;border: 0;outline: none">
        <router-link  :to="'CreationCenter'">
          <el-button   type="primary" style="background: #fb7299;margin: 0;border: 0;outline: none;width: 110px;height: 35px;border-radius: 10px">
            <i class="el-icon-upload el-icon--right" style="margin: 0">
              创作中心
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
        <div v-if="this.$store.state.islogin==true" style="position: absolute;left:1000px; top:-5px;z-index: 9999; display: inline-block">
          <el-popover
              placement="top-start"
              :title= this.$store.state.username
              width="300"
              trigger="hover"
              left="">
            <div>
              <div>
                id:{{this.$store.state.userid}}
              </div>
            </div>
            <router-link :to="'User_center'" slot="reference">
              <img :src="this.$store.state.userhead" style="width: 40px;height: 40px;border-radius: 50%;border-color: white;border-width: 1px">
            </router-link>
          </el-popover>
        </div>
        <div v-else  style="position: absolute; left: 1000px; top: -3px;z-index: 9999; display: inline-block;">
          <button  @click="dialogFormVisible = true" style="width: 40px;height: 40px;border-radius: 50%;border-color: white;border-width: 1px">
            <router-link to="/try_login"><span style="color: #0b95f1">
                登录
              </span></router-link>
          </button>
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
          <i class="fa fa-paper-plane-o" style="color: white"></i>
          <el-button
              plain
              @click="open"
              style="background:rgba(0,0,0,0%);border: 1px solid rgba(20,81,154,0);color: white;font-size: 15px;padding: 0">
            &ensp;站内通知
          </el-button>
        </div>
       <!-- <div v-else  style="position: absolute; left: 1000px; top: -3px;z-index: 9999; display: inline-block;">
          <button  @click="dialogFormVisible = true" style="width: 40px;height: 40px;border-radius: 50%;border-color: white;border-width: 1px">
              <router-link to="/try_login"><span style="color: #0b95f1">
                登录
              </span></router-link>
          </button>
        </div>-->
      </div>
    </div>
  </header>
  <div class="zouma">
    <div>
      <el-carousel indicator-position="outside" style=" display: inline-block; left: -370px; border-radius: 4px;top: 0px;
           width: 550px; height: 400px" >
        <el-carousel-item v-for="(img,index) in imgList" :key="index" style="height: 400px">
          <img :src="img.url" width="100%" height="100%">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div>
      <table style="display: inline-block; left:675px; top:440px" cellspacing="6">
        <tr>
          <td style="width: 250px">
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
          <td style="width: 250px">
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
          <td style="width: 250px">
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
          <td style="width: 250px">
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
          <td style="width: 250px">
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
          <td style="width: 250px">
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
    <table class="tab" cellspacing="35">
      <tr>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[6].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="6" class="name" @click="click1">{{this.videoList[6].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[6].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[7].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="7" class="name" @click="click1">{{this.videoList[7].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[7].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[8].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="8" class="name" @click="click1">{{this.videoList[8].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[8].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[9].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="9" class="name" @click="click1">{{this.videoList[9].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[9].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[10].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="10" class="name" @click="click1">{{this.videoList[10].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[10].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[11].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="11" class="name" @click="click1">{{this.videoList[11].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[11].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[12].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="12" class="name" @click="click1">{{this.videoList[12].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[12].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[13].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="13" class="name" @click="click1">{{this.videoList[13].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[13].videoAuthor}}</p>
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
    <table class="tab" cellspacing="35">
      <tr>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[14].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="14" class="name" @click="click1">{{this.videoList[14].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[14].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[15].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="15" class="name" @click="click1">{{this.videoList[15].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[15].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[16].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="16" class="name" @click="click1">{{this.videoList[16].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[16].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[17].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="17" class="name" @click="click1">{{this.videoList[17].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[17].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[18].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="18" class="name" @click="click1">{{this.videoList[18].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[18].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[19].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="19" class="name" @click="click1">{{this.videoList[19].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[19].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[20].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="20" class="name" @click="click1">{{this.videoList[20].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[20].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[21].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="21" class="name" @click="click1">{{this.videoList[21].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[21].videoAuthor}}</p>
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
    <table class="tab" cellspacing="35">
      <tr>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[22].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="22" class="name" @click="click1">{{this.videoList[22].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[22].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[23].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="23" class="name" @click="click1">{{this.videoList[23].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[23].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[24].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="24" class="name" @click="click1">{{this.videoList[24].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[24].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[25].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="25" class="name" @click="click1">{{this.videoList[25].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[25].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[26].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="26" class="name" @click="click1">{{this.videoList[26].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[26].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[27].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="27" class="name" @click="click1">{{this.videoList[27].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[27].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[28].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="28" class="name" @click="click1">{{this.videoList[28].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[28].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[29].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="29" class="name" @click="click1">{{this.videoList[29].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[29].videoAuthor}}</p>
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
    <table class="tab" cellspacing="35">
      <tr>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[30].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="30" class="name" @click="click1">{{this.videoList[30].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[30].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[31].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="31" class="name" @click="click1">{{this.videoList[31].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[31].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[32].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="32" class="name" @click="click1">{{this.videoList[32].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[32].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[33].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="33" class="name" @click="click1">{{this.videoList[33].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[33].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[34].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="34" class="name" @click="click1">{{this.videoList[34].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[34].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[35].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="35" class="name" @click="click1">{{this.videoList[35].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[35].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[36].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="36" class="name" @click="click1">{{this.videoList[36].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[36].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[37].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="37" class="name" @click="click1">{{this.videoList[37].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[37].videoAuthor}}</p>
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
    <table class="tab" cellspacing="35">
      <tr>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[38].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="38" class="name" @click="click1">{{this.videoList[38].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[38].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[39].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="39" class="name" @click="click1">{{this.videoList[39].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[39].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[38].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="40" class="name" @click="click1">{{this.videoList[40].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[40].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[41].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="41" class="name" @click="click1">{{this.videoList[41].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[41].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[42].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="42" class="name" @click="click1">{{this.videoList[42].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[42].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[43].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="43" class="name" @click="click1">{{this.videoList[43].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[43].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[44].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="44" class="name" @click="click1">{{this.videoList[44].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[44].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[45].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="45" class="name" @click="click1">{{this.videoList[45].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[45].videoAuthor}}</p>
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
    <table class="tab" cellspacing="35">
      <tr>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[46].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="46" class="name" @click="click1">{{this.videoList[46].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[46].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[47].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="47" class="name" @click="click1">{{this.videoList[47].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[47].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[48].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="48" class="name" @click="click1">{{this.videoList[48].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[48].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[49].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="49" class="name" @click="click1">{{this.videoList[49].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[49].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[50].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="50" class="name" @click="click1">{{this.videoList[50].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[50].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[51].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="51" class="name" @click="click1">{{this.videoList[51].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[51].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[52].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="52" class="name" @click="click1">{{this.videoList[52].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[52].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[53].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="53" class="name" @click="click1">{{this.videoList[53].videoName}}</p></router-link></a>
                <p class="title">{{this.videoList[53].videoAuthor}}</p>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>
  </body>
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
      //islogin: JSON.parse(sessionStorage.getItem('IFLOGIN')),
      //username: JSON.parse(sessionStorage.getItem('IFLOGIN')),
     // userid: JSON.parse(sessionStorage.getItem('USERID')),
      //userhead: JSON.parse(sessionStorage.getItem('USERHEAD')),
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
      isLogin: false
    }
  },
  created() {
    var i = 0;
    for(i=0;i<54;i++)
    {
      this.videoList.push({
        videoAuthor: '未知',
        videoId: '',
        videoUrl: '',
        videoCoverUrl: '',
        videoName: '视频连接中',
        videolike: '',
        videofavourite: '',
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
              this.videoList[i].videoName= res.data.videoList[i].VideoTitle,
              this.videoList[i].videolike= res.data.videoList[i].videolike,
              this.videoList[i].videofavourite= res.data.videoList[i].videofavourite

          }
        },
    );
    this.$axios.get('index/main/area/1').then(//动画分区
        res => {
          for(i=6;i<14;i++)
          {
            this.videoList[i].videoAuthor= res.data.videoList[i-6].VideoAuthorName,
            this.videoList[i].videoId= res.data.videoList[i-6].id,
            this.videoList[i].videoUrl= res.data.videoList[i-6].VideoUrl,
            this.videoList[i].videoCoverUrl= res.data.videoList[i-6].VideoCoverUrl,
            this.videoList[i].videoName= res.data.videoList[i-6].VideoTitle,
                this.videoList[i].videolike= res.data.videoList[i-6].videolike,
                this.videoList[i].videofavourite= res.data.videoList[i-6].videofavourite
          }
        },
    );
    this.$axios.get('index/main/area/2').then(//电影分区
        res => {
          for(i=14;i<22;i++)
          {
            this.videoList[i].videoAuthor= res.data.videoList[i-14].VideoAuthorName,
                this.videoList[i].videoId= res.data.videoList[i-14].id,
                this.videoList[i].videoUrl= res.data.videoList[i-14].VideoUrl,
                this.videoList[i].videoCoverUrl= res.data.videoList[i-14].VideoCoverUrl,
                this.videoList[i].videoName= res.data.videoList[i-14].VideoTitle,
                this.videoList[i].videolike= res.data.videoList[i-14].videolike,
                this.videoList[i].videofavourite= res.data.videoList[i-14].videofavourite
          }
        },
    );
    this.$axios.get('index/main/area/3').then(//游戏分区
        res => {
          for(i=22;i<30;i++)
          {
            this.videoList[i].videoAuthor= res.data.videoList[i-22].VideoAuthorName,
                this.videoList[i].videoId= res.data.videoList[i-22].id,
                this.videoList[i].videoUrl= res.data.videoList[i-22].VideoUrl,
                this.videoList[i].videoCoverUrl= res.data.videoList[i-22].VideoCoverUrl,
                this.videoList[i].videoName= res.data.videoList[i-22].VideoTitle,
                this.videoList[i].videolike= res.data.videoList[i-22].videolike,
                this.videoList[i].videofavourite= res.data.videoList[i-22].videofavourite
          }
        },
    );
    this.$axios.get('index/main/area/4').then(//音乐分区
        res => {
          for(i=30;i<38;i++)
          {
            this.videoList[i].videoAuthor= res.data.videoList[i-30].VideoAuthorName,
                this.videoList[i].videoId= res.data.videoList[i-30].id,
                this.videoList[i].videoUrl= res.data.videoList[i-30].VideoUrl,
                this.videoList[i].videoCoverUrl= res.data.videoList[i-30].VideoCoverUrl,
                this.videoList[i].videoName= res.data.videoList[i-30].VideoTitle,
                this.videoList[i].videolike= res.data.videoList[i-30].videolike,
                this.videoList[i].videofavourite= res.data.videoList[i-30].videofavourite
          }
        },
    );
    this.$axios.get('index/main/area/5').then(//学习分区
        res => {
          for(i=38;i<46;i++)
          {
            this.videoList[i].videoAuthor= res.data.videoList[i-38].VideoAuthorName,
                this.videoList[i].videoId= res.data.videoList[i-38].id,
                this.videoList[i].videoUrl= res.data.videoList[i-38].VideoUrl,
                this.videoList[i].videoCoverUrl= res.data.videoList[i-38].VideoCoverUrl,
                this.videoList[i].videoName= res.data.videoList[i-38].VideoTitle,
                this.videoList[i].videolike= res.data.videoList[i-38].videolike,
                this.videoList[i].videofavourite= res.data.videoList[i-38].videofavourite
          }
        },
    );
    this.$axios.get('index/main/area/6').then(//鬼畜分区
        res => {
          for(i=46;i<54;i++)
          {
            this.videoList[i].videoAuthor= res.data.videoList[i-46].VideoAuthorName,
                this.videoList[i].videoId= res.data.videoList[i-46].id,
                this.videoList[i].videoUrl= res.data.videoList[i-46].VideoUrl,
                this.videoList[i].videoCoverUrl= res.data.videoList[i-46].VideoCoverUrl,
                this.videoList[i].videoName= res.data.videoList[i-46].VideoTitle,
                this.videoList[i].videolike= res.data.videoList[i-46].videolike,
                this.videoList[i].videofavourite= res.data.videoList[i-46].videofavourite
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
      this.$store.state.videoid = this.videoList[event.srcElement.id].videoId;
      this.$store.state.videolike=this.videoList[event.srcElement.id].videolike;
      this.$store.state.videofavourite=this.videoList[event.srcElement.id].videofavourite;
      this.$store.state.videoauthor=this.videoList[event.srcElement.id].videoAuthor;
      //this.$store.state.videoname = 'cnm';
      //this.$store.state.videoid = 1;
      //this.$store.state.videourl = 'https://video-1310787519.cos.ap-beijing.myqcloud.com/test_video/76c8b338-48aa-40f7-81f9-fb0ec1e6b649.mp4';
      sessionStorage.setItem('videoname', JSON.stringify(this.$store.state.videoname));
      sessionStorage.setItem('videoid', JSON.stringify(this.$store.state.videoid));
      sessionStorage.setItem('videourl', JSON.stringify(this.$store.state.videourl));
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
  padding-bottom: 700px;
}
.zouma{
  padding-right: 95px;
  padding-left: 105px;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 200px;
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
.fenqu {
  width: 250px;
}
.picture1 {
  height: 200px;
  width: 300px;
}
</style>