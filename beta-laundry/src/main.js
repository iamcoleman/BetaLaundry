import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// Vuetify
import Vuetify from "vuetify";
Vue.use(Vuetify);
// Vuetify CSS
import "vuetify/dist/vuetify.min.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
