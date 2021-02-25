// axios 进行二次封装
// 封装的目的，每次申请数据时，发送token，并返回验证token的结果
import axios from 'axios'
import router from '../router'

// 添加一个新的axios 的实例
const http = axios.create({
  baseURL: 'api', // 统一设置请求地址前缀
  timeout: 6000 // 请求超时时间
})

// 请求拦截，统一在请求时带上 token
http.interceptors.request.use(function (config) {

}, function (error) {

});

// 响应拦截，处理错误，如token不合法
http.interceptors.response.use(function (response) {

}, function (error) {

});

export default http