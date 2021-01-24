

import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import Material from "./plugins/plugin";

Vue.config.productionTip = false;

Vue.use(Material);

const NavbarStore = {
  showNavbar: false
};

Vue.mixin({
  data() {
    return {
      NavbarStore
    };
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
