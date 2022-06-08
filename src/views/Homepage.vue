<template>
  <html>
  <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <head>
  </head>
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
        <router-link  :to="'CreationCenter'">
          <el-button   type="primary" style="background: #fb7299;margin: 0;border: 0;outline: none;width: 110px;height: 35px;border-radius: 10px">
            <i class="el-icon-upload el-icon--right" style="margin: 0">
              创作中心
            </i></el-button>
        </router-link>
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
      <el-menu-item index="/friend_list" @click="click_centerself" style="width: 100px; font-size: 15px"><a>
        <i class="fa fa-heart" style="color: gray"></i>
        <span style="color: gray">
                  关注
                </span>
      </a></el-menu-item>
      <el-menu-item index="/user_center" @click="click_centerself" style="width: 100px; font-size: 15px"><a>
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
                <router-link to="/searching_box"><button @click="click_search1"  style="margin: 0;padding: 0;border: none;outline: none;top: 5px">
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
          <li @click="if_login('/saving_box')" style="display: inline; cursor: pointer" >
              <i class="fa fa-file-video-o" style="color: white"></i>
              <span style="color: white">
                  收藏夹&nbsp;&nbsp;&nbsp;
                </span>
          </li>
          <li style="display: inline">
            <router-link :to="'/Friend_list'" >
              <i class="fa fa-heart" style="color: white"></i>
              <span style="color: white" @click="click_centerself">
                  关注&nbsp;&nbsp;&nbsp;
                </span>
            </router-link>
          </li>
          <li style="display: inline">
            <router-link :to="'/User_center'" >
              <i class="fa fa-user-o" style="color: white"></i>
              <span style="color: white" @click="click_centerself">
                  个人中心
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
                    style="width: 100%;margin: 0;border: 0;padding: 0;outline: none;border-radius: 16px"
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
        <div v-if="this.isLogin == 1" style="position: absolute;left:1000px; top:-5px;z-index: 9999; display: inline-block">
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
        <div v-else  style="position: absolute; left: 1000px; top: -3px;z-index: 9999; display: inline-block;">
          <button style="width: 40px;height: 40px;border-radius: 50%;border-color: white;border-width: 1px">
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
        <el-carousel-item style="height: 400px">
          <router-link to="videoPage" @click="click1" id="6">
            <img :src="this.videoList[6].videoCoverUrl" width="100%" height="100%">
          </router-link>
        </el-carousel-item>
        <el-carousel-item style="height: 400px">
          <router-link to="videoPage" @click="click1" id="7">
            <img :src="this.videoList[7].videoCoverUrl" width="100%" height="100%">
          </router-link>
        </el-carousel-item>
        <el-carousel-item style="height: 400px">
          <router-link to="videoPage" @click="click1" id="8">
            <img :src="this.videoList[8].videoCoverUrl" width="100%" height="100%">
          </router-link>
        </el-carousel-item>
        <el-carousel-item style="height: 400px">
          <router-link to="videoPage" @click="click1" id="9">
            <img :src="this.videoList[9].videoCoverUrl" width="100%" height="100%">
          </router-link>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div>
      <table style="display: inline-block; left:675px; top:440px">
        <tr>
          <td style="width: 250px;padding-right: 6px">
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
                    <span v-for="tags in videoList[0].videoTags" :key="tags">
                      <router-link to="Searching_box" >
                        <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                          {{tags}}
                        </a>
                    </router-link>
                    </span>
                  <router-link to="User_center" >
                    <p class="title" @click="click_center(0)">{{this.videoList[0].videoAuthor}}&nbsp;播放:<b>{{this.videoList[0].videoviewnum}}</b>评论:<b>{{this.videoList[0].commentnum}}</b></p>
                  </router-link>
                </div>
              </div>
            </div>
          </td>
          <td style="width: 250px;padding-right: 6px">
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
                  <span v-for="tags in videoList[1].videoTags" :key="tags">
                      <router-link to="Searching_box">
                        <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                          {{tags}}
                        </a>
                    </router-link>
                    </span>
                  <router-link to="User_center">
                    <p class="title" @click="click_center(1)">{{this.videoList[1].videoAuthor}}&nbsp;播放:<b>{{this.videoList[1].videoviewnum}}</b>评论:<b>{{this.videoList[1].commentnum}}</b></p>
                  </router-link>
                </div>
              </div>
            </div>
          </td>
          <td style="width: 250px;padding-right: 6px">
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
                <span v-for="tags in videoList[2].videoTags" :key="tags">
                      <router-link to="Searching_box">
                        <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                          {{tags}}
                        </a>
                    </router-link>
                    </span>
                <router-link to="User_center">
                  <p class="title" @click="click_center(2)">{{this.videoList[2].videoAuthor}}&nbsp;播放:<b>{{this.videoList[2].videoviewnum}}</b>评论:<b>{{this.videoList[2].commentnum}}</b></p>
                </router-link>
              </div>
            </div>
          </div>
        </td>
        </tr>
        <tr>
          <td style="width: 250px;padding-right: 6px">
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
                  <span v-for="tags in videoList[3].videoTags" :key="tags">
                      <router-link to="Searching_box" >
                        <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                          {{tags}}
                        </a>
                    </router-link>
                    </span>

                  <router-link to="User_center">
                    <p class="title" @click="click_center(3)">{{this.videoList[3].videoAuthor}}&nbsp;播放:<b>{{this.videoList[3].videoviewnum}}</b>评论:<b>{{this.videoList[3].commentnum}}</b></p>
                  </router-link>

                </div>
              </div>
            </div>
          </td>
          <td style="width: 250px;padding-right: 6px">
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
                  <span v-for="tags in videoList[4].videoTags" :key="tags">
                      <router-link to="Searching_box" >
                        <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                          {{tags}}
                        </a>
                    </router-link>
                    </span>

                  <router-link to="User_center">
                    <p class="title" @click="click_center(4)">{{this.videoList[4].videoAuthor}}&nbsp;播放:<b>{{this.videoList[4].videoviewnum}}</b>评论:<b>{{this.videoList[4].commentnum}}</b></p>
                  </router-link>

                </div>
              </div>
            </div>
          </td>
          <td style="width: 250px;padding-right: 6px">
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
                  <span v-for="tags in videoList[5].videoTags" :key="tags">
                      <router-link to="Searching_box" >
                        <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                          {{tags}}
                        </a>
                    </router-link>
                    </span>

                  <router-link to="User_center">
                    <p class="title" @click="click_center(5)">{{this.videoList[5].videoAuthor}}&nbsp;播放:<b>{{this.videoList[5].videoviewnum}}</b>评论:<b>{{this.videoList[5].commentnum}}</b></p>
                  </router-link>

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
            <el-button @click="into1" round><i class="el-icon-plus"></i>进入该分区</el-button>
          </span>
    </div>
    <table class="tab" cellspacing="35">
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
                  <div v-for="tags in videoList[10].videoTags" :key="tags">
                      <router-link to="Searching_box" >
                        <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                          {{tags}}
                        </a>
                    </router-link>
                  </div>

                <router-link to="User_center" @click="click_center(this.videoList[10].videoAuthorId)">
                  <p class="title">{{this.videoList[10].videoAuthor}}&nbsp;播放:<b>{{this.videoList[10].videoviewnum}}</b>评论:<b>{{this.videoList[10].commentnum}}</b></p>
                </router-link>

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
                <div v-for="tags in videoList[11].videoTags" :key="tags">
                  <router-link to="Searching_box" >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[11].videoAuthorId)">
                  <p class="title">{{this.videoList[11].videoAuthor}}&nbsp;播放:<b>{{this.videoList[11].videoviewnum}}</b>评论:<b>{{this.videoList[11].commentnum}}</b></p>
                </router-link>

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
                <div v-for="tags in videoList[12].videoTags" :key="tags">
                  <router-link to="Searching_box" >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[12].videoAuthorId)">
                  <p class="title">{{this.videoList[12].videoAuthor}}&nbsp;播放:<b>{{this.videoList[12].videoviewnum}}</b>评论:<b>{{this.videoList[12].commentnum}}</b></p>
                </router-link>

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
                <div v-for="tags in videoList[13].videoTags" :key="tags">
                  <router-link to="Searching_box" >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>
        <router-link to="User_center" @click="click_center(this.videoList[13].videoAuthorId)">
                  <p class="title">{{this.videoList[13].videoAuthor}}&nbsp;播放:<b>{{this.videoList[13].videoviewnum}}</b>评论:<b>{{this.videoList[13].commentnum}}</b></p>
                </router-link>

              </div>
            </div>
          </div>
        </td>
      </tr>
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
                <div v-for="tags in videoList[14].videoTags" :key="tags">
                  <router-link to="Searching_box" >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[14].videoAuthorId)">
                  <p class="title">{{this.videoList[14].videoAuthor}}&nbsp;播放:<b>{{this.videoList[14].videoviewnum}}</b>评论:<b>{{this.videoList[14].commentnum}}</b></p>
                </router-link>

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
                <div v-for="tags in videoList[15].videoTags" :key="tags">
                  <router-link to="Searching_box" >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[15].videoAuthorId)">
                  <p class="title">{{this.videoList[15].videoAuthor}}&nbsp;播放:<b>{{this.videoList[15].videoviewnum}}</b>评论:<b>{{this.videoList[15].commentnum}}</b></p>
                </router-link>

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
                <div v-for="tags in videoList[16].videoTags" :key="tags">
                  <router-link to="Searching_box" >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[16].videoAuthorId)">
                  <p class="title">{{this.videoList[16].videoAuthor}}&nbsp;播放:<b>{{this.videoList[16].videoviewnum}}</b>评论:<b>{{this.videoList[16].commentnum}}</b></p>
                </router-link>

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
                <div v-for="tags in videoList[17].videoTags" :key="tags">
                  <router-link to="Searching_box" >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[17].videoAuthorId)">
                  <p class="title">{{this.videoList[17].videoAuthor}}&nbsp;播放:<b>{{this.videoList[17].videoviewnum}}</b>评论:<b>{{this.videoList[17].commentnum}}</b></p>
                </router-link>

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
            <el-button @click="into2" round><i class="el-icon-plus"></i>进入该分区</el-button>
          </span>
    </div>
    <table class="tab" cellspacing="35">
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
                <div v-for="tags in videoList[18].videoTags" :key="tags">
                  <router-link to="Searching_box" >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[18].videoAuthorId)">
                  <p class="title">{{this.videoList[18].videoAuthor}}&nbsp;播放:<b>{{this.videoList[18].videoviewnum}}</b>评论:<b>{{this.videoList[18].commentnum}}</b></p>
                </router-link>

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
                <div v-for="tags in videoList[19].videoTags" :key="tags">
                  <router-link to="Searching_box" >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>
       <router-link to="User_center" @click="click_center(this.videoList[19].videoAuthorId)">
                  <p class="title">{{this.videoList[19].videoAuthor}}&nbsp;播放:<b>{{this.videoList[19].videoviewnum}}</b>评论:<b>{{this.videoList[19].commentnum}}</b></p>
                </router-link>

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
                <div v-for="tags in videoList[20].videoTags" :key="tags">
                  <router-link to="Searching_box" >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[20].videoAuthorId)">
                  <p class="title">{{this.videoList[20].videoAuthor}}&nbsp;播放:<b>{{this.videoList[20].videoviewnum}}</b>评论:<b>{{this.videoList[20].commentnum}}</b></p>
                </router-link>

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
                <div v-for="tags in videoList[21].videoTags" :key="tags">
                  <router-link to="Searching_box" >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[21].videoAuthorId)">
                  <p class="title">{{this.videoList[21].videoAuthor}}&nbsp;播放:<b>{{this.videoList[21].videoviewnum}}</b>评论:<b>{{this.videoList[21].commentnum}}</b></p>
                </router-link>

              </div>
            </div>
          </div>
        </td>
      </tr>
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
                <div v-for="tags in videoList[22].videoTags" :key="tags">
                  <router-link to="Searching_box" >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[22].videoAuthorId)">
                  <p class="title">{{this.videoList[22].videoAuthor}}&nbsp;播放:<b>{{this.videoList[22].videoviewnum}}</b>评论:<b>{{this.videoList[22].commentnum}}</b></p>
                </router-link>

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
                <div v-for="tags in videoList[23].videoTags" :key="tags">
                  <router-link to="Searching_box" >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[23].videoAuthorId)">
                  <p class="title">{{this.videoList[23].videoAuthor}}&nbsp;播放:<b>{{this.videoList[23].videoviewnum}}</b>评论:<b>{{this.videoList[23].commentnum}}</b></p>
                </router-link>

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
                <div v-for="tags in videoList[24].videoTags" :key="tags">
                  <router-link to="Searching_box" >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[24].videoAuthorId)">
                  <p class="title">{{this.videoList[24].videoAuthor}}&nbsp;播放:<b>{{this.videoList[24].videoviewnum}}</b>评论:<b>{{this.videoList[24].commentnum}}</b></p>
                </router-link>

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
                <div v-for="tags in videoList[25].videoTags" :key="tags">
                  <router-link to="Searching_box" >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[25].videoAuthorId)">
                  <p class="title">{{this.videoList[25].videoAuthor}}&nbsp;播放:<b>{{this.videoList[25].videoviewnum}}</b>评论:<b>{{this.videoList[25].commentnum}}</b></p>
                </router-link>

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
            <el-button @click="into3" round><i class="el-icon-plus"></i>进入该分区</el-button>
          </span>
    </div>
    <table class="tab" cellspacing="35">
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
                <div v-for="tags in videoList[26].videoTags" :key="tags">
                  <router-link to="Searching_box" >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[26].videoAuthorId)">
                  <p class="title">{{this.videoList[26].videoAuthor}}&nbsp;播放:<b>{{this.videoList[26].videoviewnum}}</b>评论:<b>{{this.videoList[26].commentnum}}</b></p>
                </router-link>

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
                <div v-for="tags in videoList[27].videoTags" :key="tags">
                  <router-link to="Searching_box" >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[27].videoAuthorId)">
                  <p class="title">{{this.videoList[27].videoAuthor}}&nbsp;播放:<b>{{this.videoList[27].videoviewnum}}</b>评论:<b>{{this.videoList[27].commentnum}}</b></p>
                </router-link>

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
                <div v-for="tags in videoList[28].videoTags" :key="tags">
                  <router-link to="Searching_box" >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[28].videoAuthorId)">
                  <p class="title">{{this.videoList[28].videoAuthor}}&nbsp;播放:<b>{{this.videoList[28].videoviewnum}}</b>评论:<b>{{this.videoList[28].commentnum}}</b></p>
                </router-link>

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
                <div v-for="tags in videoList[29].videoTags" :key="tags">
                  <router-link to="Searching_box" >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[29].videoAuthorId)">
                  <p class="title">{{this.videoList[29].videoAuthor}}&nbsp;播放:<b>{{this.videoList[29].videoviewnum}}</b>评论:<b>{{this.videoList[29].commentnum}}</b></p>
                </router-link>

              </div>
            </div>
          </div>
        </td>
      </tr>
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
                <div v-for="tags in videoList[30].videoTags" :key="tags">
                  <router-link to="Searching_box" >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[30].videoAuthorId)">
                  <p class="title">{{this.videoList[30].videoAuthor}}&nbsp;播放:<b>{{this.videoList[30].videoviewnum}}</b>评论:<b>{{this.videoList[30].commentnum}}</b></p>
                </router-link>

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
                <div v-for="tags in videoList[31].videoTags" :key="tags">
                  <router-link to="Searching_box" >
                    <a @click="click_search2(tags)"  href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[31].videoAuthorId)">
                  <p class="title">{{this.videoList[31].videoAuthor}}&nbsp;播放:<b>{{this.videoList[31].videoviewnum}}</b>评论:<b>{{this.videoList[31].commentnum}}</b></p>
                </router-link>

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
                <div v-for="tags in videoList[32].videoTags" :key="tags">
                  <router-link to="Searching_box" >
                    <a @click="click_search2(tags)"  href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[32].videoAuthorId)">
                  <p class="title">{{this.videoList[32].videoAuthor}}&nbsp;播放:<b>{{this.videoList[32].videoviewnum}}</b>评论:<b>{{this.videoList[32].commentnum}}</b></p>
                </router-link>

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
                <div v-for="tags in videoList[33].videoTags" :key="tags">
                  <router-link to="Searching_box" >
                    <a @click="click_search2(tags)"  href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[33].videoAuthorId)">
                  <p class="title">{{this.videoList[33].videoAuthor}}&nbsp;播放:<b>{{this.videoList[33].videoviewnum}}</b>评论:<b>{{this.videoList[33].commentnum}}</b></p>
                </router-link>

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
            <el-button @click="into4" round><i class="el-icon-plus"></i>进入该分区</el-button>
          </span>
    </div>
    <table class="tab" cellspacing="35">
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
                <div v-for="tags in videoList[34].videoTags" :key="tags">
                  <router-link to="Searching_box" >
                    <a @click="click_search2(tags)"  href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[34].videoAuthorId)">
                  <p class="title">{{this.videoList[34].videoAuthor}}&nbsp;播放:<b>{{this.videoList[34].videoviewnum}}</b>评论:<b>{{this.videoList[34].commentnum}}</b></p>
                </router-link>

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
                <div v-for="tags in videoList[35].videoTags" :key="tags">
                  <router-link to="Searching_box" >
                    <a @click="click_search2(tags)"  href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[35].videoAuthorId)">
                  <p class="title">{{this.videoList[35].videoAuthor}}&nbsp;播放:<b>{{this.videoList[35].videoviewnum}}</b>评论:<b>{{this.videoList[35].commentnum}}</b></p>
                </router-link>

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
                <div v-for="tags in videoList[36].videoTags" :key="tags">
                  <router-link to="Searching_box"  >
                    <a @click="click_search2(tags)"  href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[36].videoAuthorId)">
                  <p class="title">{{this.videoList[36].videoAuthor}}&nbsp;播放:<b>{{this.videoList[36].videoviewnum}}</b>评论:<b>{{this.videoList[36].commentnum}}</b></p>
                </router-link>

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
                <div v-for="tags in videoList[37].videoTags" :key="tags">
                  <router-link to="Searching_box"  >
                    <a @click="click_search2(tags)"  href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[37].videoAuthorId)">
                  <p class="title">{{this.videoList[37].videoAuthor}}&nbsp;播放:<b>{{this.videoList[37].videoviewnum}}</b>评论:<b>{{this.videoList[37].commentnum}}</b></p>
                </router-link>

              </div>
            </div>
          </div>
        </td>
      </tr>
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
                <div v-for="tags in videoList[38].videoTags" :key="tags">
                  <router-link to="Searching_box"  >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[38].videoAuthorId)">
                  <p class="title">{{this.videoList[38].videoAuthor}}&nbsp;播放:<b>{{this.videoList[38].videoviewnum}}</b>评论:<b>{{this.videoList[38].commentnum}}</b></p>
                </router-link>

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
                <div v-for="tags in videoList[39].videoTags" :key="tags">
                  <router-link to="Searching_box"  >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[39].videoAuthorId)">
                  <p class="title">{{this.videoList[39].videoAuthor}}&nbsp;播放:<b>{{this.videoList[39].videoviewnum}}</b>评论:<b>{{this.videoList[39].commentnum}}</b></p>
                </router-link>

              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[40].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="40" class="name" @click="click1">{{this.videoList[40].videoName}}</p></router-link></a>
                <div v-for="tags in videoList[40].videoTags" :key="tags">
                  <router-link to="Searching_box"  >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[40].videoAuthorId)">
                  <p class="title">{{this.videoList[40].videoAuthor}}&nbsp;播放:<b>{{this.videoList[40].videoviewnum}}</b>评论:<b>{{this.videoList[40].commentnum}}</b></p>
                </router-link>

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
                <div v-for="tags in videoList[41].videoTags" :key="tags">
                  <router-link to="Searching_box"  >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[41].videoAuthorId)">
                  <p class="title">{{this.videoList[41].videoAuthor}}&nbsp;播放:<b>{{this.videoList[41].videoviewnum}}</b>评论:<b>{{this.videoList[41].commentnum}}</b></p>
                </router-link>

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
            <el-button @click="into5" round><i class="el-icon-plus"></i>进入该分区</el-button>
          </span>
    </div>
    <table class="tab" cellspacing="35">
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
                <div v-for="tags in videoList[42].videoTags" :key="tags">
                  <router-link to="Searching_box"  >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[42].videoAuthorId)">
                  <p class="title">{{this.videoList[42].videoAuthor}}&nbsp;播放:<b>{{this.videoList[42].videoviewnum}}</b>评论:<b>{{this.videoList[42].commentnum}}</b></p>
                </router-link>

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
                <div v-for="tags in videoList[43].videoTags" :key="tags">
                  <router-link to="Searching_box"  >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[43].videoAuthorId)">
                  <p class="title">{{this.videoList[43].videoAuthor}}&nbsp;播放:<b>{{this.videoList[43].videoviewnum}}</b>评论:<b>{{this.videoList[43].commentnum}}</b></p>
                </router-link>

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
                <div v-for="tags in videoList[44].videoTags" :key="tags">
                  <router-link to="Searching_box" >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[44].videoAuthorId)">
                  <p class="title">{{this.videoList[44].videoAuthor}}&nbsp;播放:<b>{{this.videoList[44].videoviewnum}}</b>评论:<b>{{this.videoList[44].commentnum}}</b></p>
                </router-link>

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
                <div v-for="tags in videoList[45].videoTags" :key="tags">
                  <router-link to="Searching_box"  >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[45].videoAuthorId)">
                  <p class="title">{{this.videoList[45].videoAuthor}}&nbsp;播放:<b>{{this.videoList[45].videoviewnum}}</b>评论:<b>{{this.videoList[45].commentnum}}</b></p>
                </router-link>

              </div>
            </div>
          </div>
        </td>
      </tr>
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
                <div v-for="tags in videoList[46].videoTags" :key="tags">
                  <router-link to="Searching_box"  >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[46].videoAuthorId)">
                  <p class="title">{{this.videoList[46].videoAuthor}}&nbsp;播放:<b>{{this.videoList[46].videoviewnum}}</b>评论:<b>{{this.videoList[46].commentnum}}</b></p>
                </router-link>

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
                <div v-for="tags in videoList[47].videoTags" :key="tags">
                  <router-link to="Searching_box"  >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>
       <router-link to="User_center" @click="click_center(this.videoList[47].videoAuthorId)">
                  <p class="title">{{this.videoList[47].videoAuthor}}&nbsp;播放:<b>{{this.videoList[47].videoviewnum}}</b>评论:<b>{{this.videoList[47].commentnum}}</b></p>
                </router-link>

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
                <div v-for="tags in videoList[48].videoTags" :key="tags">
                  <router-link to="Searching_box"  >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[48].videoAuthorId)">
                  <p class="title">{{this.videoList[48].videoAuthor}}&nbsp;播放:<b>{{this.videoList[48].videoviewnum}}</b>评论:<b>{{this.videoList[48].commentnum}}</b></p>
                </router-link>

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
                <div v-for="tags in videoList[49].videoTags" :key="tags">
                  <router-link to="Searching_box"  >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[49].videoAuthorId)">
                  <p class="title">{{this.videoList[49].videoAuthor}}&nbsp;播放:<b>{{this.videoList[49].videoviewnum}}</b>评论:<b>{{this.videoList[49].commentnum}}</b></p>
                </router-link>

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
            <el-button @click="into6" round><i class="el-icon-plus"></i>进入该分区</el-button>
          </span>
    </div>
    <table class="tab" cellspacing="35">
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
                <div v-for="tags in videoList[50].videoTags" :key="tags">
                  <router-link to="Searching_box"  >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[50].videoAuthorId)">
                  <p class="title">{{this.videoList[50].videoAuthor}}&nbsp;播放:<b>{{this.videoList[50].videoviewnum}}</b>评论:<b>{{this.videoList[50].commentnum}}</b></p>
                </router-link>

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
                <div v-for="tags in videoList[51].videoTags" :key="tags">
                  <router-link to="Searching_box" >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[51].videoAuthorId)">
                  <p class="title">{{this.videoList[51].videoAuthor}}&nbsp;播放:<b>{{this.videoList[51].videoviewnum}}</b>评论:<b>{{this.videoList[51].commentnum}}</b></p>
                </router-link>

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
                <div v-for="tags in videoList[52].videoTags" :key="tags">
                  <router-link to="Searching_box" >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[52].videoAuthorId)">
                  <p class="title">{{this.videoList[52].videoAuthor}}&nbsp;播放:<b>{{this.videoList[52].videoviewnum}}</b>评论:<b>{{this.videoList[52].commentnum}}</b></p>
                </router-link>

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
                <div v-for="tags in videoList[53].videoTags" :key="tags">
                  <router-link to="Searching_box"  >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[53].videoAuthorId)">
                  <p class="title">{{this.videoList[53].videoAuthor}}&nbsp;播放:<b>{{this.videoList[53].videoviewnum}}</b>评论:<b>{{this.videoList[53].commentnum}}</b></p>
                </router-link>

              </div>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[54].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="54" class="name" @click="click1">{{this.videoList[54].videoName}}</p></router-link></a>
                <div v-for="tags in videoList[54].videoTags" :key="tags">
                  <router-link to="Searching_box"  >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[54].videoAuthorId)">
                  <p class="title">{{this.videoList[54].videoAuthor}}&nbsp;播放:<b>{{this.videoList[54].videoviewnum}}</b>评论:<b>{{this.videoList[54].commentnum}}</b></p>
                </router-link>

              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[55].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="55" class="name" @click="click1">{{this.videoList[55].videoName}}</p></router-link></a>
                <div v-for="tags in videoList[55].videoTags" :key="tags">
                  <router-link to="Searching_box"  >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[55].videoAuthorId)">
                  <p class="title">{{this.videoList[55].videoAuthor}}&nbsp;播放:<b>{{this.videoList[55].videoviewnum}}</b>评论:<b>{{this.videoList[55].commentnum}}</b></p>
                </router-link>

              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[56].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="56" class="name" @click="click1">{{this.videoList[56].videoName}}</p></router-link></a>
                <div v-for="tags in videoList[56].videoTags" :key="tags">
                  <router-link to="Searching_box"  >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[56].videoAuthorId)">
                  <p class="title">{{this.videoList[56].videoAuthor}}&nbsp;播放:<b>{{this.videoList[56].videoviewnum}}</b>评论:<b>{{this.videoList[56].commentnum}}</b></p>
                </router-link>

              </div>
            </div>
          </div>
        </td>
        <td class="fenqu">
          <img
              class="picture1"
              :src="this.videoList[57].videoCoverUrl"
              alt=""
              style="border-radius: 6px"
          />
          <div class="up">
            <div class="up-cover">
              <div style="float: left" class="txt">
                <a target="blank">
                  <router-link to="/videoPage"><p id="57" class="name" @click="click1">{{this.videoList[57].videoName}}</p></router-link></a>
                <div v-for="tags in videoList[57].videoTags" :key="tags">
                  <router-link to="Searching_box"  >
                    <a @click="click_search2(tags)" href="#" class="badge badge-secondary" style="float: left;margin-bottom: 5px;color: white;margin-right: 5px">
                      {{tags}}
                    </a>
                  </router-link>
                </div>

                <router-link to="User_center" @click="click_center(this.videoList[57].videoAuthorId)">
                  <p class="title">{{this.videoList[57].videoAuthor}}&nbsp;播放:<b>{{this.videoList[57].videoviewnum}}</b>评论:<b>{{this.videoList[57].commentnum}}</b></p>
                </router-link>

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
import user from "@/store/user";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Homepage",
  data(){
    return {
      tmp:0,
      userhead:'',
      username:'',
      userid: 0,
      Title:"视频连接中",
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
      videoList: [],
    }
  },
  created() {

    var i = 0;
    for(i=0;i<58;i++)
    {
      this.videoList.push({
        videoAuthorId: '5',
        videoAuthor: '未知',
        videoId: '',
        videoUrl: '',
        videoCoverUrl: '',
        videoName: '视频连接中a',
        videolike: '',
        videofavourite: '',
        videoviewnum:0,
        videouploadtime:'',
        videoTags:[
        ],
        commentnum:0,
      });
    }
    this.$axios.get('/index/main').then(
        res => {
          for(i=0;i<10;i++)
          {
              this.videoList[i].videoAuthor= res.data.videoList[i].VideoAuthorName,
              this.videoList[i].videoAuthorId= res.data.videoList[i].VideoAuthor,
              this.videoList[i].videoId= res.data.videoList[i].id,
              this.videoList[i].videoUrl= res.data.videoList[i].VideoUrl,
              this.videoList[i].videoCoverUrl= res.data.videoList[i].VideoCoverUrl,
              this.videoList[i].videoName= res.data.videoList[i].VideoTitle,
              this.videoList[i].videolike= res.data.videoList[i].VideoLike,
              this.videoList[i].videofavourite= res.data.videoList[i].VideoFavourite,
              this.videoList[i].videoviewnum= res.data.videoList[i].VideoViewCounts,
              this.videoList[i].videouploadtime= res.data.videoList[i].VideoUploadTime,
              this.videoList[i].videoTags = res.data.videoList[i].VideoTags,
              this.videoList[i].commentnum = res.data.videoList[i].CommentNum
          }
        },
    );
    this.$axios.get('index/main/area/1').then(//动画分区
        res => {
          for(i=10;i<18;i++)
          {
            this.videoList[i].videoAuthor= res.data.videoList[i-10].VideoAuthorName,
            this.videoList[i].videoAuthorId= res.data.videoList[i-10].VideoAuthor,
            this.videoList[i].videoId= res.data.videoList[i-10].id,
            this.videoList[i].videoUrl= res.data.videoList[i-10].VideoUrl,
            this.videoList[i].videoCoverUrl= res.data.videoList[i-10].VideoCoverUrl,
            this.videoList[i].videoName= res.data.videoList[i-10].VideoTitle,
            this.videoList[i].videolike= res.data.videoList[i-10].VideoLike,
            this.videoList[i].videofavourite= res.data.videoList[i-10].VideoFavourite,
            this.videoList[i].videoviewnum= res.data.videoList[i-10].VideoViewCounts,
            this.videoList[i].videouploadtime= res.data.videoList[i-10].VideoUploadTime,
            this.videoList[i].videoTags = res.data.videoList[i-10].VideoTags,
                this.videoList[i].commentnum = res.data.videoList[i-10].CommentNum
          }
        },
    );
    this.$axios.get('index/main/area/2').then(//电影分区
        res => {
          for(i=18;i<26;i++)
          {
                this.videoList[i].videoAuthor= res.data.videoList[i-18].VideoAuthorName,
                this.videoList[i].videoAuthorId= res.data.videoList[i-18].VideoAuthor,
                this.videoList[i].videoId= res.data.videoList[i-18].id,
                this.videoList[i].videoUrl= res.data.videoList[i-18].VideoUrl,
                this.videoList[i].videoCoverUrl= res.data.videoList[i-18].VideoCoverUrl,
                this.videoList[i].videoName= res.data.videoList[i-18].VideoTitle,
                this.videoList[i].videolike= res.data.videoList[i-18].VideoLike,
                this.videoList[i].videofavourite= res.data.videoList[i-18].VideoFavourite,
                this.videoList[i].videoviewnum= res.data.videoList[i-18].VideoViewCounts,
                this.videoList[i].videouploadtime= res.data.videoList[i-18].VideoUploadTime,
                this.videoList[i].videoTags = res.data.videoList[i-18].VideoTags,
                    this.videoList[i].commentnum = res.data.videoList[i-18].CommentNum
          }
        },
    );
    this.$axios.get('index/main/area/3').then(//游戏分区
        res => {
          for(i=26;i<34;i++)
          {
                this.videoList[i].videoAuthor= res.data.videoList[i-26].VideoAuthorName,
                this.videoList[i].videoAuthorId= res.data.videoList[i-26].VideoAuthor,
                this.videoList[i].videoId= res.data.videoList[i-26].id,
                this.videoList[i].videoUrl= res.data.videoList[i-26].VideoUrl,
                this.videoList[i].videoCoverUrl= res.data.videoList[i-26].VideoCoverUrl,
                this.videoList[i].videoName= res.data.videoList[i-26].VideoTitle,
                this.videoList[i].videolike= res.data.videoList[i-26].VideoLike,
                this.videoList[i].videofavourite= res.data.videoList[i-26].VideoFavourite,
                this.videoList[i].videoviewnum= res.data.videoList[i-26].VideoViewCounts,
                this.videoList[i].videouploadtime= res.data.videoList[i-26].VideoUploadTime,
                this.videoList[i].videoTags = res.data.videoList[i-26].VideoTags,
                    this.videoList[i].commentnum = res.data.videoList[i-26].CommentNum
          }
        },
    );
    this.$axios.get('index/main/area/4').then(//音乐分区
        res => {
          for(i=34;i<42;i++)
          {
            this.videoList[i].videoAuthor= res.data.videoList[i-34].VideoAuthorName,
                this.videoList[i].videoAuthorId= res.data.videoList[i-34].VideoAuthor,
                this.videoList[i].videoId= res.data.videoList[i-34].id,
                this.videoList[i].videoUrl= res.data.videoList[i-34].VideoUrl,
                this.videoList[i].videoCoverUrl= res.data.videoList[i-34].VideoCoverUrl,
                this.videoList[i].videoName= res.data.videoList[i-34].VideoTitle,
                this.videoList[i].videolike= res.data.videoList[i-34].VideoLike,
                this.videoList[i].videofavourite= res.data.videoList[i-34].VideoFavourite,
                this.videoList[i].videoviewnum= res.data.videoList[i-34].VideoViewCounts,
                this.videoList[i].videouploadtime= res.data.videoList[i-34].VideoUploadTime,
                this.videoList[i].videoTags = res.data.videoList[i-34].VideoTags,
                this.videoList[i].commentnum = res.data.videoList[i-34].CommentNum
          }
        },
    );
    this.$axios.get('index/main/area/5').then(//学习分区
        res => {
          for(i=42;i<50;i++)
          {
            this.videoList[i].videoAuthor= res.data.videoList[i-42].VideoAuthorName,
                this.videoList[i].videoAuthorId= res.data.videoList[i-42].VideoAuthor,
                this.videoList[i].videoId= res.data.videoList[i-42].id,
                this.videoList[i].videoUrl= res.data.videoList[i-42].VideoUrl,
                this.videoList[i].videoCoverUrl= res.data.videoList[i-42].VideoCoverUrl,
                this.videoList[i].videoName= res.data.videoList[i-42].VideoTitle,
                this.videoList[i].videolike= res.data.videoList[i-42].VideoLike,
                this.videoList[i].videofavourite= res.data.videoList[i-42].VideoFavourite,
                this.videoList[i].videoviewnum= res.data.videoList[i-42].VideoViewCounts,
                this.videoList[i].videouploadtime= res.data.videoList[i-42].VideoUploadTime,
                this.videoList[i].videoTags = res.data.videoList[i-42].VideoTags,
                this.videoList[i].commentnum = res.data.videoList[i-42].CommentNum
          }
        },
    );
    this.$axios.get('index/main/area/6').then(//鬼畜分区
        res => {
          for(i=50;i<58;i++)
          {
            this.videoList[i].videoAuthor= res.data.videoList[i-50].VideoAuthorName,
                this.videoList[i].videoAuthorId= res.data.videoList[i-50].VideoAuthor,
                this.videoList[i].videoId= res.data.videoList[i-50].id,
                this.videoList[i].videoUrl= res.data.videoList[i-50].VideoUrl,
                this.videoList[i].videoCoverUrl= res.data.videoList[i-50].VideoCoverUrl,
                this.videoList[i].videoName= res.data.videoList[i-50].VideoTitle,
                this.videoList[i].videolike= res.data.videoList[i-50].VideoLike,
                this.videoList[i].videofavourite= res.data.videoList[i-50].VideoFavourite,
                this.videoList[i].videoviewnum= res.data.videoList[i-50].VideoViewCounts,
                this.videoList[i].videouploadtime= res.data.videoList[i-50].VideoUploadTime,
                this.videoList[i].videoTags = res.data.videoList[i-50].VideoTags,
                this.videoList[i].commentnum = res.data.videoList[i-50].CommentNum
          }
        },
    );
      const userInfo = user.getters.getUser(user.state());
      console.log(userInfo);
      if (userInfo) {
        this.userhead = userInfo.user.UserProfilePhotoUrl;
        this.username = userInfo.user.username;
        this.isLogin = 1;
        this.userid = userInfo.user.userid;
      } else {
        this.isLogin = 0;
      }
  },

  methods:{
    if_login(dir){
      if(this.isLogin===0){
        this.$router.push('/try_login');
      }
      else{
        this.$router.push(dir);
        this.click_centerself();
      }
    },
    into1(){
      //this.$message.success("进入动画分区");
      sessionStorage.setItem('part', JSON.stringify(1));
      this.$router.push('/part_show');
    },
    into2(){
      //this.$message.success("进入动画分区");
      sessionStorage.setItem('part', JSON.stringify(2));
      this.$router.push('/part_show');
    },
    into3(){
      //this.$message.success("进入动画分区");
      sessionStorage.setItem('part', JSON.stringify(3));
      this.$router.push('/part_show');
    },
    into4(){
      //this.$message.success("进入动画分区");
      sessionStorage.setItem('part', JSON.stringify(4));
      this.$router.push('/part_show');
    },
    into5(){
      //this.$message.success("进入动画分区");
      sessionStorage.setItem('part', JSON.stringify(5));
      this.$router.push('/part_show');
    },
    into6(){
      //this.$message.success("进入动画分区");
      sessionStorage.setItem('part', JSON.stringify(6));
      this.$router.push('/part_show');
    },
    click_search(){
      sessionStorage.setItem('message', JSON.stringify(this.$refs.search.value));
    },
    click_search1(){
      sessionStorage.setItem('message', JSON.stringify(this.$refs.search1.value));
    },
    click_search2(args){
      sessionStorage.setItem('message', JSON.stringify(args));
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
      this.$store.state.videoauthorid=this.videoList[event.srcElement.id].videoAuthorId;
      this.$store.state.videoviewcounts = this.videoList[event.srcElement.id].videoviewnum;
      this.$store.state.videouploadtime = this.videoList[event.srcElement.id].videouploadtime;
      sessionStorage.setItem('videoname', JSON.stringify(this.$store.state.videoname));
      sessionStorage.setItem('videoid', JSON.stringify(this.$store.state.videoid));
      sessionStorage.setItem('videourl', JSON.stringify(this.$store.state.videourl));
      sessionStorage.setItem('videoauthorid', JSON.stringify(this.$store.state.videoauthorid));
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
  height: 25px;
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
  padding-right: 35px;
}
.picture1 {
  height: 200px;
  width: 300px;
}
</style>