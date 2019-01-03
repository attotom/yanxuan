import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import App from './App'
import router from './router'
import store from './store'
import loading from './assets/images/loading.gif'
import 'swiper/dist/css/swiper.css'
import './mock/mockServer'
import VueCountdown from '@xkeshi/vue-countdown'
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VueLazyload, {
  loading
})
Vue.component('countdown', VueCountdown)
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
