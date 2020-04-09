// 配置axios请求
import axios from 'axios'
import store from '@/store'
import Vue from 'vue'
if (location.href.indexOf('localhost') == -1 || location.href.indexOf('http://118.178.178.159:9090/') > -1) {
  axios.defaults.baseURL = 'http://118.178.178.159:9090';
  Vue.prototype.baseURL = 'http://118.178.178.159:9090';
}else{
  axios.defaults.baseURL = 'http://127.0.0.1:9090';
  Vue.prototype.baseURL = 'http://127.0.0.1:9090';
}

// 拦截器
axios.interceptors.request.use(function(config){
  // 开启加载朦层
  store.state.loading.isShow = true
  return config
}, function(error){
  return Promise.reject(error)
})

axios.interceptors.response.use(response => {
  store.state.loading.isShow = false
  return response;
}, err => {
  return Promise.reject(err)
})

export default axios;