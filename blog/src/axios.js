// 配置axios请求
import axios from 'axios'
axios.defaults.baseURL = 'http://127.0.0.1:9090';
// 拦截器
axios.interceptors.request.use(function(config){
  console.log(config)
  return config
}, function(error){
  return Promise.reject(error)
})

export default axios;