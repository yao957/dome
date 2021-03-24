import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 自定义的 scss 安装 方法 npm i sass sass-loader@7  高版本会报错 
import './assets/scss/index.scss'

// 安装  swiper 方法 npm i vue-awesome-swiper@3 -s 
// 内置的swiper版本为4.51 指定3.0版本安装
// **************
// 全局引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
// **************


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
