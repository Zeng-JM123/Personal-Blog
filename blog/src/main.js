import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/reset.css'
import xss from 'xss'

Vue.config.productionTip = false
// 测试xss注入
Object.defineProperty(Vue.prototype, '$xss', {
  value: xss
})
// console.log(Vue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
