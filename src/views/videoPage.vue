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
        </router-link>
      </el-menu-item>
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
          <img src="../img/touxiang1.jpg" style="width: 50px;height: 50px;border-radius: 50%;border-color: white;border-width: 1px">
        </router-link>
      </el-popover>
    </span>
    <div style="display: inline-block">
      <div style="text-align: left;color: #fb7299;width: 250px">
        高进进进进
      </div>
      <div style="text-align: left;font-size: 13px;width: 250px">
        一旦接受了自己的软弱，那我就是无敌的
      </div>
      <div style="margin-top: 10px;float: left;width: 230px">
        <el-button style="background: #00AEEC;float: left;width: 170px;height: 35px" type="primary">关注：10.7万</el-button>
        <span style="float: right;">
                  <el-dropdown @command="handleCommand">
                  <span class="el-dropdown-link">
                  <i class="fa fa-navicon" style="font-size: 30px"></i>
                  </span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item command="a">取消关注</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </span>
      </div>
    </div>
    <div style="text-align: left;margin-top: 50px;margin-bottom: 30px;font-family: 微软雅黑">
        他的视频还有
    </div>
    <div>
      <ul style="list-style: none">
        <li style="margin-bottom:55px;width: 370px;height: 40px">
          <img src="../img/fengmian7.webp" style="width: 150px;float: left;border-radius: 8px;margin-right: 10px">
          <div>
            <div style="font-size: 15px;text-align: left;font-family: '微软雅黑 Light';font-weight: 600;height: 40px">
              为啥脱坑白银要练佛爷，掌握全英雄就是不死战神
            </div>
            <div style="float: left;margin-top: 5px;font-size: 13px;color: gray;width: 140px;text-align: left">
              打野哈哈
            </div>
            <div style="float: left;margin-top: 3px;font-size: 13px;color: gray;width: 140px;text-align: left">
              播放123&ensp;评论123
            </div>
          </div>
        </li>
        <li style="margin-bottom:55px;width: 370px;height: 40px">
          <img src="../img/fengmian8.webp" style="width: 150px;float: left;border-radius: 8px;margin-right: 10px">
          <div>
            <div style="font-size: 15px;text-align: left;font-family: '微软雅黑 Light';font-weight: 600;height: 40px">
              【打野茶茶】0操作也能上钻石
            </div>
            <div style="float: left;margin-top: 5px;font-size: 13px;color: gray;width: 140px;text-align: left">
              国服最强打野
            </div>
            <div style="float: left;margin-top: 3px;font-size: 13px;color: gray;width: 140px;text-align: left">
              播放1203&ensp;评论323
            </div>
          </div>
        </li>
        <li style="margin-bottom:55px;width: 370px;height: 40px">
          <img src="../img/fengmian9.webp" style="width: 150px;float: left;border-radius: 8px;margin-right: 10px">
          <div>
            <div style="font-size: 15px;text-align: left;font-family: '微软雅黑 Light';font-weight: 600;height: 40px">
              军！训！UZI！
            </div>
            <div style="float: left;margin-top: 5px;font-size: 13px;color: gray;width: 160px;text-align: left">
              打野哈哈
            </div>
            <div style="float: left;margin-top: 3px;font-size: 13px;color: gray;width: 160px;text-align: left">
              播放123&ensp;评论123
            </div>
          </div>
        </li>
        <li style="margin-bottom:55px;width: 370px;height: 40px">
          <img src="../img/fengmian1.webp" style="width: 150px;float: left;border-radius: 8px;margin-right: 10px">
          <div>
            <div style="font-size: 15px;text-align: left;font-family: '微软雅黑 Light';font-weight: 600;">
              【LOL】20G2MSI宣传片——上单教父
            </div>
            <div style="float: left;margin-top: 5px;font-size: 13px;color: gray;width: 160px;text-align: left">
              g2电子经济俱乐部
            </div>
            <div style="float: left;margin-top: 3px;font-size: 13px;color: gray;width: 160px;text-align: left">
              播放123&ensp;评论123
            </div>
          </div>
        </li>
        <li style="margin-bottom:55px;width: 370px;height: 40px">
          <img src="../img/fengmian2.webp" style="width: 150px;float: left;border-radius: 8px;margin-right: 10px">
          <div>
            <div style="font-size: 15px;text-align: left;font-family: '微软雅黑 Light';font-weight: 600;height: 40px">
              【ADC玄学技巧】职业选手的对线压制力为什么这么强
            </div>
            <div style="float: left;margin-top: 5px;font-size: 13px;color: gray;width: 160px;text-align: left">
              不知名up主
            </div>
            <div style="float: left;margin-top: 3px;font-size: 13px;color: gray;width: 160px;text-align: left">
              播放123&ensp;评论123
            </div>
          </div>
        </li>
        <li style="margin-bottom:55px;width: 370px;height: 40px">
          <img src="../img/fengmian3.webp" style="width: 150px;float: left;border-radius: 8px;margin-right: 10px">
          <div>
            <div style="font-size: 15px;text-align: left;font-family: '微软雅黑 Light';font-weight: 600;height: 40px">
              为啥脱坑白银要练佛爷，掌握全英雄就是不死战神
            </div>
            <div style="float: left;margin-top: 5px;font-size: 13px;color: gray;width: 160px;text-align: left">
              打野哈哈
            </div>
            <div style="float: left;margin-top: 3px;font-size: 13px;color: gray;width: 160px;text-align: left">
              播放123&ensp;评论123
            </div>
          </div>
        </li>
        <li style="margin-bottom:55px;width: 370px;height: 40px">
          <img src="../img/fengmian4.webp" style="width: 150px;float: left;border-radius: 8px;margin-right: 10px">
          <div>
            <div style="font-size: 15px;text-align: left;font-family: '微软雅黑 Light';font-weight: 600;height: 40px">
              为啥脱坑白银要练佛爷，掌握全英雄就是不死战神
            </div>
            <div style="float: left;margin-top: 5px;font-size: 13px;color: gray;width: 160px;text-align: left">
              打野哈哈
            </div>
            <div style="float: left;margin-top: 3px;font-size: 13px;color: gray;width: 160px;text-align: left">
              播放123&ensp;评论123
            </div>
          </div>
        </li>
        <li style="margin-bottom:55px;width: 370px;height: 40px">
          <img src="../img/fengmian5.webp" style="width: 150px;float: left;border-radius: 8px;margin-right: 10px">
          <div>
            <div style="font-size: 15px;text-align: left;font-family: '微软雅黑 Light';font-weight: 600;height: 40px">
              为啥脱坑白银要练佛爷，掌握全英雄就是不死战神
            </div>
            <div style="float: left;margin-top: 5px;font-size: 13px;color: gray;width: 160px;text-align: left">
              打野哈哈
            </div>
            <div style="float: left;margin-top: 3px;font-size: 13px;color: gray;width: 160px;text-align: left">
              播放123&ensp;评论123
            </div>
          </div>
        </li>
        <li style="margin-bottom:55px;width: 370px;height: 40px">
          <img src="../img/fengmian6.webp" style="width: 150px;float: left;border-radius: 8px;margin-right: 10px">
          <div>
            <div style="font-size: 15px;text-align: left;font-family: '微软雅黑 Light';font-weight: 600;height: 40px">
              为啥脱坑白银要练佛爷，掌握全英雄就是不死战神
            </div>
            <div style="float: left;margin-top: 5px;font-size: 13px;color: gray;width: 160px;text-align: left">
              打野哈哈
            </div>
            <div style="float: left;margin-top: 3px;font-size: 13px;color: gray;width: 160px;text-align: left">
              播放123&ensp;评论123
            </div>
          </div>
        </li>
        <li style="margin-bottom:55px;width: 370px;height: 40px">
          <img src="../img/fengmian7.webp" style="width: 150px;float: left;border-radius: 8px;margin-right: 10px">
          <div>
            <div style="font-size: 15px;text-align: left;font-family: '微软雅黑 Light';font-weight: 600;height: 40px">
              为啥脱坑白银要练佛爷，掌握全英雄就是不死战神
            </div>
            <div style="float: left;margin-top: 5px;font-size: 13px;color: gray;width: 160px;text-align: left">
              打野哈哈
            </div>
            <div style="float: left;margin-top: 3px;font-size: 13px;color: gray;width: 160px;text-align: left">
              播放123&ensp;评论123
            </div>
          </div>
        </li>
        <li style="margin-bottom:55px;width: 370px;height: 40px">
          <img src="../img/fengmian7.webp" style="width: 150px;float: left;border-radius: 8px;margin-right: 10px">
          <div>
            <div style="font-size: 15px;text-align: left;font-family: '微软雅黑 Light';font-weight: 600;height: 40px">
              为啥脱坑白银要练佛爷，掌握全英雄就是不死战神
            </div>
            <div style="float: left;margin-top: 5px;font-size: 13px;color: gray;width: 160px;text-align: left">
              打野哈哈
            </div>
            <div style="float: left;margin-top: 3px;font-size: 13px;color: gray;width: 160px;text-align: left">
              播放123&ensp;评论123
            </div>
          </div>
        </li>
        <li style="margin-bottom:55px;width: 370px;height: 40px">
          <img src="../img/fengmian7.webp" style="width: 150px;float: left;border-radius: 8px;margin-right: 10px">
          <div>
            <div style="font-size: 15px;text-align: left;font-family: '微软雅黑 Light';font-weight: 600;height: 40px">
              为啥脱坑白银要练佛爷，掌握全英雄就是不死战神
            </div>
            <div style="float: left;margin-top: 5px;font-size: 13px;color: gray;width: 160px;text-align: left">
              打野哈哈
            </div>
            <div style="float: left;margin-top: 3px;font-size: 13px;color: gray;width: 160px;text-align: left">
              播放123&ensp;评论123
            </div>
          </div>
        </li>
        <li style="margin-bottom:55px;width: 370px;height: 40px">
          <img src="../img/fengmian7.webp" style="width: 150px;float: left;border-radius: 8px;margin-right: 10px">
          <div>
            <div style="font-size: 15px;text-align: left;font-family: '微软雅黑 Light';font-weight: 600;height: 40px">
              为啥脱坑白银要练佛爷，掌握全英雄就是不死战神
            </div>
            <div style="float: left;margin-top: 5px;font-size: 13px;color: gray;width: 160px;text-align: left">
              打野哈哈
            </div>
            <div style="float: left;margin-top: 3px;font-size: 13px;color: gray;width: 160px;text-align: left">
              播放123&ensp;评论123
            </div>
          </div>
        </li>
        <li style="margin-bottom:55px;width: 370px;height: 40px">
          <img src="../img/fengmian7.webp" style="width: 150px;float: left;border-radius: 8px;margin-right: 10px">
          <div>
            <div style="font-size: 15px;text-align: left;font-family: '微软雅黑 Light';font-weight: 600;height: 40px">
              为啥脱坑白银要练佛爷，掌握全英雄就是不死战神
            </div>
            <div style="float: left;margin-top: 5px;font-size: 13px;color: gray;width: 160px;text-align: left">
              打野哈哈
            </div>
            <div style="float: left;margin-top: 3px;font-size: 13px;color: gray;width: 160px;text-align: left">
              播放123&ensp;评论123
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <div style="width: 800px">
    <div>
      <video controls class="video">
        <source  :src = "this.$store.state.videourl" id = "视频内容"> 视频播放内容的位置
      </video>
    </div>
    <div class="operation">
      <el-divider></el-divider>
      <div style="float: left; width: 100px">
        <button v-if="this.iflike===0" @click="like" class="fa fa-thumbs-up" style="margin: 0; border: 0; outline: none; background: white; color: gray; font-size: 30px;"></button>
        <button v-else @click="likecancall" class="fa fa-thumbs-up" style="margin: 0; border: 0; outline: none; background: white; color: hotpink; font-size: 30px;"></button>
      </div>
      <div style="float: left; width: 50px; height: 40px; font-size: 15px; position: relative; top: 5px; left: -33px">
        {{this.$store.state.videolike}}
      </div>
      <div style="float: left; width: 100px">
        <button v-if="ifcollection===0" @click="collect" class="el-icon-star-off" style="margin: 0; border: 0; outline: none; background: white; color: gray; font-size: 30px;"></button>
        <button v-else  @click="collectcall" class="el-icon-star-off" style="margin: 0; border: 0; outline: none; background: white; color: hotpink; font-size: 30px;"></button>
      </div>
      <div style="float: left; width: 50px; height: 40px; font-size: 15px; position: relative; top: 5px; left: -35px">
        {{this.$store.state.videofavourite}}
      </div>
      <div style="float: right; width: 100px">
        <el-button v-if="ifconcerns===0" @click="concern" type="danger" style="position: relative; background: #fb7299; position: relative; top: -5px">关注</el-button>
        <el-button v-else @click="concerncancall" type="danger" style="position: relative; background: gray; position: relative; top: -5px">已关注</el-button>
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
          <img src="../img/touxiang1.jpg" style="width: 40px;height: 40px;border-radius: 50%">
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
        <div>&nbsp;</div>
        <div>{{comment.comment_in}}</div>
      </div>
    </div>
    <!--<div class="comment">
      <div class="lon">
        <a href="https://element.eleme.cn/#/zh-CN/component/button">
          <img class="big-head" src="../img/picture1.webp">
        </a>
      </div>
      <div class="con">
        <div class="big-name"><a href="https://element.eleme.cn/#/zh-CN/component/button"><b>胡巨</b></a></div>
        <div class="comment-content" style="font-size: 20px; position: relative;">
          深林之晦三眠茧，绕指之柔百炼钢。
          玉蝶穿花零碎锦，一天飞絮斗轻狂。
        </div>
        <div class="comment-date" style="color:#9195a3; position: relative; top: 15px">
          2022-04-12 15:00
          &nbsp;&nbsp;
          <button class="fa fa-thumbs-o-up" style="margin: 0; border: 0; outline: none; background: white; color: gray"></button>
          1557
          &nbsp;&nbsp;
          回复
        </div>
        <div class="comment-reply" style="height: 130px">
          <div style="height: 50px">
            <a href="https://element.eleme.cn/#/zh-CN/component/button">
              <img class="small-head" src="../img/picture2.webp">
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://element.eleme.cn/#/zh-CN/component/button" style="position: relative; top: -15px;">
              <b>JGG</b>
            </a>
          </div>
          <div style="font-size: 20px; height: 50px;">
            笑望沧溟千军破，策定乾坤算因果。无觉无惧轻生死，非神非鬼似封魔。
          </div>
          <div class="comment-date" style="color:#9195a3">
            2022-04-12 15:00
            &nbsp;&nbsp;
            <button class="fa fa-thumbs-o-up" style="margin: 0; border: 0; outline: none; background: white; color: gray"></button>
            1557
            &nbsp;&nbsp;
            回复
          </div>
        </div>
        <div class="comment-reply">
          <a href="https://element.eleme.cn/#/zh-CN/component/button">
            <img class="small-head" src="../img/picture3.webp">
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href="https://element.eleme.cn/#/zh-CN/component/button" style="position: relative; top: -15px;">
            <b>某不愿意透露姓名的的吟游诗人</b>
          </a>
        </div>
        <div style="font-size: 20px; height: 50px">
          欸嘿
        </div>
        <div class="comment-date" style="color:#9195a3">
          2022-04-12 15:00
          &nbsp;&nbsp;
          <button class="fa fa-thumbs-o-up" style="margin: 0; border: 0; outline: none; background: white; color: gray"></button>
          1557
          &nbsp;&nbsp;
          回复
        </div>
      </div>
    </div>-->
    <!--<div class="comment">
      <el-divider></el-divider>
      <div class="lon">
        <a href="https://element.eleme.cn/#/zh-CN/component/button">
          <img class="big-head" src="../img/picture1.webp">
        </a>
      </div>
      <div class="con">
        <div class="big-name"><a href="https://element.eleme.cn/#/zh-CN/component/button"><b>胡巨</b></a></div>
        <div class="comment-content" style="font-size: 20px;">
          深林之晦三眠茧，绕指之柔百炼钢。
          玉蝶穿花零碎锦，一天飞絮斗轻狂。
        </div>
        <div class="comment-date" style="color:#9195a3">
          2022-04-12 15:00 1557
          回复
        </div>
        <div class="comment-reply">
          <a href="https://element.eleme.cn/#/zh-CN/component/button">
            <img class="small-head" src="../img/picture2.webp">
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href="https://element.eleme.cn/#/zh-CN/component/button">
            <b>JGG</b>
          </a>
        </div>
        <div style="font-size: 20px; height: 50px">
          笑望沧溟千军破，策定乾坤算因果。无觉无惧轻生死，非神非鬼似封魔。
        </div>
        <div class="comment-date" style="color:#9195a3">
          2022-04-12 15:00 1557
          回复
        </div>
        <div class="comment-reply">
          <a href="https://element.eleme.cn/#/zh-CN/component/button">
            <img class="small-head" src="../img/picture3.webp">
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href="https://element.eleme.cn/#/zh-CN/component/button">
            <b>某不愿意透露姓名的的吟游诗人</b>
          </a>
        </div>
        <div style="font-size: 20px; height: 50px">
          欸嘿
        </div>
        <div class="comment-date" style="color:#9195a3">
          2022-04-12 15:00 1557
          回复
        </div>
      </div>
    </div>-->
    <!--<div class="comment">
      <el-divider></el-divider>
      <div class="lon">
        <a href="https://element.eleme.cn/#/zh-CN/component/button">
          <img class="big-head" src="../img/picture1.webp">
        </a>
      </div>
      <div class="con">
        <div class="big-name"><a href="https://element.eleme.cn/#/zh-CN/component/button"><b>胡巨</b></a></div>
        <div class="comment-content" style="font-size: 20px;">
          深林之晦三眠茧，绕指之柔百炼钢。
          玉蝶穿花零碎锦，一天飞絮斗轻狂。
        </div>
        <div class="comment-date" style="color:#9195a3">
          2022-04-12 15:00 1557
          回复
        </div>
        <div class="comment-reply">
          <a href="https://element.eleme.cn/#/zh-CN/component/button">
            <img class="small-head" src="../img/picture2.webp">
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href="https://element.eleme.cn/#/zh-CN/component/button">
            <b>JGG</b>
          </a>
        </div>
        <div style="font-size: 20px; height: 50px">
          笑望沧溟千军破，策定乾坤算因果。无觉无惧轻生死，非神非鬼似封魔。
        </div>
        <div class="comment-date" style="color:#9195a3">
          2022-04-12 15:00 1557
          回复
        </div>
        <div class="comment-reply">
          <a href="https://element.eleme.cn/#/zh-CN/component/button">
            <img class="small-head" src="../img/picture3.webp">
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href="https://element.eleme.cn/#/zh-CN/component/button">
            <b>某不愿意透露姓名的的吟游诗人</b>
          </a>
        </div>
        <div style="font-size: 20px; height: 50px">
          欸嘿
        </div>
        <div class="comment-date" style="color:#9195a3">
          2022-04-12 15:00 1557
          回复
        </div>
      </div>
    </div>-->
    <!--<div class="comment">
      <el-divider></el-divider>
      <div class="lon">
        <a href="https://element.eleme.cn/#/zh-CN/component/button">
          <img class="big-head" src="../img/picture1.webp">
        </a>
      </div>
      <div class="con">
        <div class="big-name"><a href="https://element.eleme.cn/#/zh-CN/component/button"><b>胡巨</b></a></div>
        <div class="comment-content" style="font-size: 20px;">
          深林之晦三眠茧，绕指之柔百炼钢。
          玉蝶穿花零碎锦，一天飞絮斗轻狂。
        </div>
        <div class="comment-date" style="color:#9195a3">
          2022-04-12 15:00 1557
          回复
        </div>
        <div class="comment-reply">
          <a href="https://element.eleme.cn/#/zh-CN/component/button">
            <img class="small-head" src="../img/picture2.webp">
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href="https://element.eleme.cn/#/zh-CN/component/button">
            <b>JGG</b>
          </a>
        </div>
        <div style="font-size: 20px; height: 50px">
          笑望沧溟千军破，策定乾坤算因果。无觉无惧轻生死，非神非鬼似封魔。
        </div>
        <div class="comment-date" style="color:#9195a3">
          2022-04-12 15:00 1557
          回复
        </div>
        <div class="comment-reply">
          <a href="https://element.eleme.cn/#/zh-CN/component/button">
            <img class="small-head" src="../img/picture3.webp">
          </a>
          &nbsp;&nbsp;&nbsp;
          <a href="https://element.eleme.cn/#/zh-CN/component/button">
            <b>某不愿意透露姓名的的吟游诗人</b>
          </a>
        </div>
        <div style="font-size: 20px; height: 50px">
          欸嘿
        </div>
        <div class="comment-date" style="color:#9195a3">
          2022-04-12 15:00 1557
          回复
        </div>
      </div>
    </div>-->
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
      username: '',
      password: '',
      title: this.$store.state.videoname,
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
      comment_num: 5,
      commentid: 0
    }
  },
  created() {
      var i = 0;
      for(i=0;i<this.comment_num-1;i++){
          this.comment_list.push(
              {
                comment_head_url: '',
                comment_name:'高进',
                comment_in: '啦啦啦啦啦',
                comment_id: this.commentid
              }
          );
          this.commentid++;
      }
  },
  methods:{
    open() {
      this.$notify({
        title: '站内通知',
        message: this.$store.state.videourl ,
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
      this.$store.state.videolike++;
      this.$axios({
        method: 'post',
        url: '',
        //data: this.iflike,
        data: qs.stringify({
          videoid: this.$store.state.videoid,
          userid: this.$store.state.userid,
          operation: this.iflike
        })
      })
    },
    likecancall() {
      this.iflike=0;
      this.$store.state.videolike--;
      this.$axios({
        method: 'post',
        url: '',
        //data: this.iflike,
        data: qs.stringify({
          videoid: this.$store.state.videoid,
          userid: this.$store.state.userid,
          operation: this.iflike
        })
      })
    },
    collect() {
      this.ifcollection=1;
      this.$store.state.videofavourite++;
      this.$axios({
        method: 'post',
        url: '',
        data: qs.stringify({
          videoid: this.$store.state.videoid,
          userid: this.$store.state.userid,
          operation: this.ifcollection
        })
      })
    },
    collectcall() {
      this.ifcollection=0;
      this.$store.state.videofavourite--;
      this.$axios({
        method: 'post',
        url: '',
        data: qs.stringify({
          videoid: this.$store.state.videoid,
          userid: this.$store.state.userid,
          operation: this.ifcollection
        })
      })
    },
    concern() {
      this.ifconcerns=1;
      this.concerns++;
    },
    concerncancall() {
      this.ifconcerns=0;
      this.concerns--;
    },
    submit_comment(){ //发布评论的函数，尝试阶段
      alert(this.textarea2);
      this.$axios(
          {
            method: 'post',
            url: '/comment/postComment/'+this.$store.state.videoid,//url待定
            data: qs.stringify(
                {
                  comment: this.textarea2,
                  videoid: this.$store.state.videoid
                }
            )
          }
      )
          .then((res) => {
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