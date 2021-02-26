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
http.interceptors.request.use(config => {
  let token = sessionStorage.getItem("token")
  console.log('request.token:', token)
  if (token) {
    config.headers['token'] = token
  }
  return config
}, error => {
  return Promise.reject(error)
});

// 响应拦截，处理错误，如token不合法
http.interceptors.response.use(response => {
  const data = response.data
  if (data && data.code === 0) {
    return response.data.content
  } else {
    //处理错误
    if (data.code === 40002) { //此接口没有授权 由于您长时间未操作本次登陆失效，请点击重新登录
      console.log('由于您长时间未操作本次登陆失效，请点击重新登录')
    } else if (data.code === 5001) { //此次请求ajax超时  本次操作请求超时，请重新操作
      console.log('本次操作请求超时，请重新操作')
    } else {
      console.log('系统请求异常，请重新打开')
    }

  }
}, error => {
  console.log('error:' + error)
  if (error.message.indexOf('timeout') != -1) {
    error.message = '本次操作请求超时，请重新操作'
  } else {
    error.message = '系统请求异常'
  }
  console.log(error.message)
  return Promise.reject(error)
});

export default http