<template>
  <el-footer>
    <el-input v-model="input" placeholder="请输入内容" @keyup.enter.native="send"></el-input>
  </el-footer>
</template>

<script>
import store from '../store'
export default {
  data() {
    return {
      input:'',
      
    }
  },
  methods: {
    send(){
      /* 发送消息 */
      /* 先判断是群聊还是私聊 */
      if(this.chatType=='group'){
        var data={
          username: this.userInfo.name,
          list:{
            name:this.myInfo.name,
            img:this.myInfo.img,
            type: "my",//标记是我发的信息，但是通过服务器转发，必须是user，变成别人的，才能让别人渲染成功，不然所有人发送，都是my，就都在右边了
            time: new Date().toLocaleString( ), //获取日期与时间,
            msg: this.input,
          }
          }
        this.$socket.emit('groupChat',data);
        /* 自己的信息直接push到数组中 */
        store.commit('SOCKET_updateChatMessageList',data);
        // console.log(this.chartmsg)
      }else{
        this.$socket.emit('privateChat',{});
        console.log('私聊');
      }
      console.log(this.input);
      /* 清空输入框 */
      this.input='';
    },

  },
  computed: {
    chatType(){
      return store.state.chatType;
    },
    
    myInfo(){
      return store.state.myInfo;
    },
    userInfo(){
      return store.state.userInfo;
    },
    chartmsg(){
return store.state.chatMessageList
    }
  
}
}
</script>