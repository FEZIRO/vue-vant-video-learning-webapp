import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入重置样式
import 'reset-css';
//响应式单位rem设置根字体
import './libs/setRem.js'
//模拟数据
import './mock.js';
//全局注册http请求模块
import Http from './http';
Vue.prototype.$http = Http;
//全局注册validator验证模块
import Validator from './libs/validator';
Vue.prototype.$Validator = Validator; 
//全局组件注册
import CustomFooter from './components/common/footer/footer.vue';
import TitleBar from './components/common/title-bar/title-bar.vue'
Vue.component('CustomFooter', CustomFooter);
Vue.component('TitleBar', TitleBar);
//全局插件注册
import { Toast, Skeleton, Overlay, Loading } from 'vant';
Vue.use(Toast);
Vue.use(Loading);
Vue.use(Overlay);
Vue.use(Skeleton);


//开发版加入调试器
if (process.env.NODE_ENV === 'development') {
  console.log(process.env);
  (function() {
    //eruda调试器
    let erudaScript = `<script>eruda.init();</script>`;
    document.write(erudaScript);
  })();
}


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
