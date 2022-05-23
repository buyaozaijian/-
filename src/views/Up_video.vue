<template>
  <html>
  <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">
  <body style="max-width:1560px;margin: 0 auto;">
  <div style="position: fixed; position: fixed;z-index: 9999;width: 100%;">
    <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="whitesmoke"
        text-color="#fff"
        active-text-color="#ffd04b">
      <div style="position: absolute;left:1000px; top:10px;z-index: 9999; display: inline-block">
        <a href="https://www.bilibili.com">
          <img src="../img/touxiang1.jpg" style="width: 40px;height: 40px;border-radius: 50%">
        </a>
      </div>
      <div style="position: absolute;left:1050px; top:20px;z-index: 9999; display: inline-block;color: gray">
        <a style="color: gray">
          高进进进进
        </a>
      </div>
      <el-menu-item index="1" style="width: 100px; font-size: 20px">
        <router-link :to="'/'">
          <i class="fa fa-bank" style="color: gray"></i>
          <span style="color: gray;">
                  首页
          </span>
        </router-link>
      </el-menu-item>
      <div style="position: absolute;left:1300px; top:15px;z-index: 9999; display: inline-block;color: gray">
        <i class="el-icon-edit" style="font-size: 20px"></i>
        <b style="color: #0b95f1;font-size: 20px;">
          创作中心
        </b>
      </div>
    </el-menu>
  </div>
  <div style="position: absolute">
    <!--<img src="../img/background3.jpg" style="width: 1510px;height: 350px;">-->
    <div style="position: relative; top: -80px; left: -550px">
      <a href="https://www.bilibili.com" style="z-index: 9999">
        <img src="../img/touxiang1.jpg" style="width: 70px;height: 70px;border-radius: 50%">
      </a>
    </div>
    <div style="position: relative;top: -150px; left: 280px; color: white; font-size: 20px; float: left">
      高进进进进
    </div>
    <div style="position: relative;top: -110px; left: 180px; float: left;color: whitesmoke;font-size: 10px">
      一旦接受了自己的软弱，那我就是无敌的
    </div>
  </div>
  <div style="position: absolute;top: -100px;">
    <div style="display: inline-block;background: whitesmoke;position: relative;width: 500px;height: 758px;top: 455px;left: 10px;opacity:0.9;border-radius: 8px">
      <div style="padding: 40px 20px;height: 250px">
        <h3>
          投稿公告
        </h3>
        <h5>
        </h5>
      </div>
      <img src="../img/touxiang1.jpg" style="width: 400px;height: 400px">
    </div>
    <div style="display: inline-block; background: whitesmoke;position: relative;top: 463px;left: 20px;width: 980px;height: 760px;opacity:0.9;border-radius: 8px">
      <el-form ref="form" :model="form" label-width="80px" style="padding: 40px 20px">
        <el-form-item label="视频标题">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="视频简介">
          <el-input type="textarea" v-model="form.desc"></el-input>
        </el-form-item>
        <el-form-item label="视频分区">
          <el-select v-model="value1" multiple placeholder="请选择视频的标签">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="封面">
          <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
          <div style="font-size: 10px">图片只能为jpg/png格式</div>
        </el-form-item>
        <el-form-item label="视频">
          <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传视频文件，且大小不超过10mb</div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即上传</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
  </body>
  </html>
</template>

<script>
export default {
  name: "Up_video",
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      dialogImageUrl: '',
      dialogVisible: false,
      input1: '',
      textarea: '',
      options: [{
        value: '选项1',
        label: '动画'
      }, {
        value: '选项2',
        label: '电影'
      }, {
        value: '选项3',
        label: '游戏'
      }, {
        value: '选项4',
        label: '音乐'
      }, {
        value: '选项5',
        label: '学习'
      },{
        value: '选项6',
        label: '鬼畜'
      }],
      value1: []
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    onSubmit() {
      console.log('submit!');
    }
  }

}
</script>

<style scoped>

</style>