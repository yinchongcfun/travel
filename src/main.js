import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import store from './store'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'styles/reset.css'
// 1像素边框
import 'styles/border.css'

import 'styles/iconfont.css'



Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
    store,
  components: { App },
  template: '<App/>'
})
