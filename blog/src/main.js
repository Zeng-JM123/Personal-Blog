import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import './assets/css/reset.css'
import xss from 'xss'
import '@/store/index'


Vue.config.productionTip = false
// 测试xss注入
Object.defineProperty(Vue.prototype, '$xss', {
  value: xss
})
// console.log(Vue)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
