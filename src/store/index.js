import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    /* 聊天类型 */
    chatType: '',
    /* 记录登录状态 */
    isLogin: false,
    /* 我的信息 */
    myInfo: {
      img: '',
      name: '',
    },
    /* 别人的信息（特指聊天对象） */
    userInfo: {
      img: '',
      name: '',
    },
    /* 用户列表 */
    // userList: [{
    //   name: '王小虎',
    //   img: 'http://img.mp.itc.cn/upload/20170808/5861bc790e654d56bc9289c567b44875_th.jpg'
    // }, {
    //   name: '郑泷',
    //   img: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
    // }, {
    //   name: '小蛮',
    //   img: 'http://gss0.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/30adcbef76094b36ba49777aa5cc7cd98c109d49.jpg'
    // }, {
    //   name: '张云',
    //   img: 'http://img.52z.com/upload/news/image/20180111/20180111085521_86389.jpg'
    // }],
    userList: [{
      name: '群群聊天天',
      img: 'https://pic1.zhimg.com/50/v2-adfacac8307b48531d4e341a6090aa03_hd.jpg?source=1940ef5c'
    }],
    /* 聊天记录 */
    chatMessageList: [],
  },
  mutations: {

    setUserInfo(state, data) {
      state.userInfo = data;
    },
    setMyInfo(state, data) {
      state.myInfo = data;
      state.isLogin = true;
    },
    /* 渲染用户列表 */
    SOCKET_login(state, data) {
      state.userList = data
    },
    /* 修改聊天类型 */
    changeChatType(state, data) {
      state.chatType = data;
    },
    /* 聊天记录的修改,这里我们使用vuex监听 */
    SOCKET_updateChatMessageList(state, data) {
      var finduser = false;
      /* 数据处理：先找到自己的聊天记录 */
      state.chatMessageList.forEach(list => {
        if (list.username == data.username) {
          finduser = true;
          list.list.push(data.list)
        }
      });
      if (!finduser) {
        state.chatMessageList.push({
          username: data.username,
          list: [data.list]
        });
      }
    },
  },
  actions: {},
  modules: {}
})