import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 自定义的全局css文件,清除默认样式
import "./assets/css/common.css";
import swal from 'sweetalert';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  swal,
  render: h => h(App)
}).$mount("#app");

