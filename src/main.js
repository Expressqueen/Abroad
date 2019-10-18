import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
//import './assets/theme/theme-green/index.css'
import VueRouter from 'vue-router'
import store from './vuex/store'
import Vuex from 'vuex'
import axios from 'axios'
import routes from './routes'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
// import Mock from './mock'
// Mock.bootstrap();
import 'font-awesome/css/font-awesome.min.css'
import {mixin}  from './assets/js/Datatablehelper.js'
Vue.mixin(mixin)

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Viewer)
//NProgress.configure({ showSpinner: false });
Vue.prototype.$axios = axios
Vue.config.productionTip = false
//设置请求头
axios.defaults.headers.post["Content-type"] = "application/json"

// // axios默认配置
// axios.defaults.timeout = 10000;   // 超时时间
// axios.defaults.baseURL = 'http://192.168.2.152:8087';  //配置域名
// //整理数据
// axios.defaults.transformRequest = function (data) {
//   //data = Qs.stringify(data);
//   data = JSON.stringify(data);
//     return data;
// };
const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  //NProgress.start();
  if (to.path == '/login') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/login') {
    next({ path: '/login' })
  } else {
    next()
  }
})

//router.afterEach(transition => {
//NProgress.done();
//});

new Vue({
  //el: '#app',
  //template: '<App/>',
  router,
  store,
  //components: { App }
  render: h => h(App)
}).$mount('#app')

