// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs';
import './assets/css/reset.css'
import 'swiper/dist/css/swiper.css'
import swiper from 'vue-awesome-swiper'
import 'mint-ui/lib/style.css'
import Mint from 'mint-ui'
Vue.config.productionTip = false;
Vue.prototype.qs = qs;
Vue.use(swiper);
Vue.use(VueAxios, axios)
Vue.use(Mint)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  mounted() {
    // You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event('render-event'))
  },
/*   components: {
    App
  }, */
/*   template: '<App/>' */
})
