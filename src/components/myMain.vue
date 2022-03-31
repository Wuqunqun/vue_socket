<template>
  <el-main>
    
 <!-- 先循环找到你想要聊天的那个人 -->
    <div v-for="(list, index) in msgList" :key="index">
      <!-- 有聊天记录：循环聊天记录 -->
      <div v-if="(list.receiver==userInfo.name)&&userInfo.name=='默认群聊'">
        <!-- 再循环显示聊天记录 --> 
        <p :class="{'right':list.type=='my'}">
          <el-avatar v-if="list.type=='user'" :src="list.img"></el-avatar>
          <el-avatar v-if="list.type=='my'" :src="list.img" style="float:right;"></el-avatar>
          <span class="content">{{list.msg}}</span>
        </p>
      </div>
      <div v-else>
        <!-- 根据接收者和发送者定位聊天记录 -->
        <div v-if="((list.receiver==myInfo.name)&&(list.sender==userInfo.name))||((list.receiver==userInfo.name)&&(list.sender==myInfo.name))">
            <!-- 再循环显示聊天记录 --> 
            <p :class="{'right':list.type=='my'}">
              <el-avatar v-if="list.type=='user'" :src="list.img"></el-avatar>
              <el-avatar v-if="list.type=='my'" :src="list.img" style="float:right;"></el-avatar>
              <span class="content">{{list.msg}}</span>
            </p>
        </div>
      </div>
    </div>
  
  </el-main>
</template>
<script>
import store from "../store/index";
export default {
  data() {
    return {};
  },
  watch: {
    msgList:{
      deep:true,
      handler(newV){
        console.log('msg:',newV)
      }
    }
  },
  computed: {
    myInfo() {
      return store.state.myInfo;
    },
    userInfo() {
      return store.state.userInfo;
    },
    msgList() {
      return store.state.chatMessageList;
    },
  },
};
</script>
<style scoped>
.div1 {
  width: 100%;
}
.div1 P {
  width: 100%;
  height: 50px;
}
.content {
  background-color: antiquewhite;
  padding: 10px;
  border-radius: 10px;
  font-weight: bold;
}
.right {
  text-align: right;
  height: 44px;
}
.el-main{
  background-image: url('https://ss0.baidu.com/7Po3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D450%2C600/sign=3feea295ab18972ba36f08ced3fd57bf/2cf5e0fe9925bc31b3989f195edf8db1ca13706e.jpg');
}
</style>