<template>
  <div v-if="!isLogin">
    <el-tabs v-model="activeName">
      <el-tab-pane label="欢迎登录" name="first">
        <!-- 用户名输入 -->
        <el-input v-model="username" placeholder="请输入用户名">
          <el-button slot="append" @click="login">登录</el-button>
        </el-input>
        <!-- 头像选择 -->
        <div class="avatar">
          <span
            @click="avatar(src)"
            v-for="(src, index) in avatarList"
            :key="index"
          >
            <el-avatar
              :src="src"
              :class="{ choosed: src == choosed }"
            ></el-avatar>
          </span>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
  <el-container v-else class="container">
    <myAside />
    <el-container class="con">
      <myHeader />
      <myMain />
      <myFooter />
    </el-container>
  </el-container>
</template>

<script>
import myAside from "@/components/myAside";
import myFooter from "@/components/myFooter";
import myHeader from "@/components/myHeader";
import myMain from "@/components/myMain";
import store from "./store/index";
export default {
  name: "App",
  components: {
    myAside,
    myFooter,
    myHeader,
    myMain,
  },
  data() {
    return {
      activeName: "first",
      username: "",
      choosed: "",
      avatarList: [
        "http://img.mp.itc.cn/upload/20170808/5861bc790e654d56bc9289c567b44875_th.jpg",
        "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
        "http://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/30adcbef76094b36ba49777aa5cc7cd98c109d49.,jpg",
        "http://img.52z.com/upload/news/image/20180111/20180111085521_86389.jpg",
      ],
    };
  },
  computed: {
    isLogin() {
      return store.state.isLogin;
    },
  },
  methods: {
    avatar(src) {
      this.choosed = src;
    },
    login() {
      if (this.username && this.choosed) {
        this.$socket.connect();
        this.$socket.emit("login", { name: this.username,img:this.choosed }, (result) => {
          if (result) {
            store.commit("setMyInfo", {
              img: this.choosed,
              name: this.username,
            });
            this.$message({
              message: "登录成功！",
              type: "success",
            });
          } else {
            this.$message({
              message: "用户名已被占用！",
              type: "success",
            });
          }
        });
      }
    },
  },
};
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  /* line-height: 200px; */
}

.el-main {
  background-color: #e9eef3;
  /* color: #333; */
  /* text-align: center; */
  /* line-height: 160px; */
  height: 500px;
}
/* .container .el-aside {
    line-height: 320px;
  } */
.con {
  display: flex;
  flex-direction: column !important;
}
.choosed {
  border: solid 1px red;
}
.login {
  width: 50%;
  margin-left: 25%;
  border: solid 1px rgb(228, 231, 237);
  padding: 30px;
}
.login .avatar {
  margin-top: 20px;
}
.login .avatar .el-avatar {
  cursor: pointer;
}
</style>
