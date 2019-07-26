import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: _API_, // api 的 base_url
  timeout: 10000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    // 设置请求头
    // config.headers.post['Content-type'] = 'application/json'
    // if (store.getters.token) {
      // config.headers['token'] = '' // 让每个请求携带自定义token 请根据实际情况自行修改
    // }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非200时抛错 可结合自己业务进行修改
     */
    if (response.data.code !== 200) {
      // error处理
      return Promise.reject(response.data)
    } else {
      return response.data
    }
  },
  error => {
    console.log('err' + error) // for debug

    return Promise.reject(error)
  }
)

export default service
