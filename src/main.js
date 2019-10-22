import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./vuex";

import "./plugins/element.js";
import "./assets/css/index.scss";

import api from "./api";

console.log(api);
Vue.prototype.$ajax = api;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
