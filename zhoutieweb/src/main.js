// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from "axios"
import ElementUI from 'element-ui';
import $ from 'jquery';
import QS from "qs";

import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from "./vuex/store"
import Vue2OrgTree from 'vue2-org-tree';
Vue.use(Vue2OrgTree);
Vue.prototype.$axios=axios;
Vue.prototype.qs = QS;
Vue.prototype.header={'Content-Type':'application/x-www-form-urlencoded'};
Vue.prototype.imgpath="https://zhoutie.xiaohecheng.com"
Vue.use(ElementUI);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store
  
})
