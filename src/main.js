import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index'
import VueSocketIO from 'vue-socket.io'
//我直接use在后面了，你也可以新起一行
Vue.use(ElementUI).use(
  new VueSocketIO({
    debug: true, // debug调试，生产建议关闭
    connection: "http://localhost:5000",
    vuex: {
      store,
      actionPrefix: 'SOCKET_',
      mutationPrefix: 'SOCKET_'
    },
    options: {     //Optional options, 
      autoConnect:false, //关闭自动连接，在用户登录后在连接。
    }
  })
);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
