// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from "axios"
import ElementUI from 'element-ui';
import $ from 'jquery'

import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import store from "./vuex/store"

Vue.prototype.$axios=axios
Vue.use(ElementUI);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store
  
})
