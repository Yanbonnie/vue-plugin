// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/* 树形组件 */
import Tree from './components/common/tree/index.js';
Vue.use(Tree)

/* 公共提示模态框组件 */
import Modal from './components/common/modal/index.js';
Vue.use(Modal)

/* 翻页组件 */
import Pagination from './components/common/pagination/index.js';
Vue.use(Pagination)


Vue.config.productionTip = false;

/* 引入样式 */



/* 引入jq */
//import '@/assets/js/plugin/jquery/jquery-1.12.2.min.js';
var jQuery = require('@/assets/js/plugin/jquery/jquery-1.12.2.min.js');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
