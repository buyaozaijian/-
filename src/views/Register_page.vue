<!--<template>
  <div style="position: absolute; left:270px;top:100px;width: 900px;height: 900px">
  <el-form ref="form" :model="form" label-width="200px">
    <el-form-item label="邮箱">
      <el-input v-model="regist.mail" placeholder="请输入注册的邮箱" clearable></el-input>
    </el-form-item>
    <el-form-item label="用户名/昵称">
      <el-input v-model="regist.name" placeholder="请输入用户名" clearable></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="regist.password" placeholder="请输入密码" clearable show-password></el-input>
    </el-form-item>
    <el-form-item label="确认密码">
      <el-input v-model="regist.password1" placeholder="请再次输入密码确认" clearable show-password></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">立即创建</el-button>
      <span>&ensp;</span><span>&ensp;</span><span>&ensp;</span>
      <router-link to="/"><el-button>取消</el-button></router-link>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
import qs from "qs";

export default {
  name: "Register_page",
  data() {
    return {
      regist: {
        mail: '',
        name: '',
        password: '',
        password1: ''
      }
    }
  },
  methods: {
    submit() {
      alert("上传");
      this.$axios({
        method: 'post',
        url: "/api/video/uploadvideo",
        data: qs.stringify({

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
    }
}
</script>

<style scoped>

</style>-->
<template>
  <div id="register" class="register">
    <div class="wrap">
      <h1>注 册</h1>
      <el-form :model="form" ref="form" class="form">
        <el-form-item prop="username">
          <el-input placeholder="用户名" type="username" v-model="form.username" autocomplete="off" clearable></el-input>
        </el-form-item>
        <el-form-item prop="password_1">
          <el-input placeholder="密码" type="password" v-model="form.password_1" autocomplete="off" clearable show-password></el-input>
        </el-form-item>
        <el-form-item prop="password_2" clearable>
          <el-input
              placeholder="确认密码"
              show-password
              clearable
              type="password"
              v-model="form.password_2"
              autocomplete="off"
              @keyup.enter.native="register"
          ></el-input>
        </el-form-item>
        <el-form-item class="btn_register">
          <el-button type="primary" @click="register">注&nbsp;&nbsp;册</el-button>
        </el-form-item>
        <router-link to="/"><el-form-item class="btn_register">
          <el-button type="danger" >取&nbsp;&nbsp;消</el-button>
        </el-form-item></router-link>
      </el-form>
    </div>
  </div>
</template>

<script>
import qs from "qs";
export default {
  name: "Register_1",
  data() {
    return {
      form: {
        username: "",
        password_1: "",
        password_2: ""
      }
    }
  },
  methods: {
    register: function () {
      this.$axios.post('/user/register', qs.stringify(this.form))
          .then(res => {
            if (res.data.errno === 0) {
              this.$message.success("注册成功");
              setTimeout(() => {
                window.open('/login', '_self');
              }, 1000);
            } else {
              this.$message.error(res.data.msg);
            }
          })
          .catch(err => {
            console.log(err);
          })
    }
  },
}
</script>

<style scoped>
#register {
  font-family: 'Noto Serif SC', serif;
  margin-top: 100px;
}
#register >>> .el-input__inner {
  font-family: 'Noto Serif SC', serif;
  height: 35px;
  padding-top: 5px;
  padding-bottom: 5px;
}
#register .wrap {
  width: 300px;
  height: 350px;
  padding: 0 25px 0 25px;
  line-height: 50px;
  position: relative;
  display: inline-block;
  background-color: #fff;
  border-radius: 15px;
  color: #303133;
  border: 2px solid #ebeef5;
  box-shadow: 2px 2px 12px 2px rgb(0 0 0 / 10%);
  transition: .3s;
}
#register .btn_register {
  margin-top: 25px;
  text-align: center;
}
#register .btn_register button{
  line-height: 10px;
  font-family: 'Noto Serif SC', serif;
  width: 100%;
  height: 38px;
}
#register .suffix {
  font-size:14px;
  line-height:10px;
  color:#999;
  cursor: pointer;
  float:right;
}
</style>