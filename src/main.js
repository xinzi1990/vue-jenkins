import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import mapv from "mapv";
// console.log(mapv);
import ElementUI from 'element-ui';
// import test from './components/test/index';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/style/var.less';
import '@/icons';
import cookieFunc from '@/common/cookie';

import api2 from "@/common/api2";

// let cookieFunc = await import('./common/cookie');


Vue.config.productionTip = false;

Vue.use(ElementUI);

import {
    message
} from '@/common/message.js';

Vue.prototype.$message = message;
Vue.prototype.$cookieFunc = cookieFunc;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
