const baseURL = 'http://dev.cac.admin.back.octodata.com.cn/'
import { Loading } from 'element-ui'

import Vue from 'vue'
Vue.use(Loading)

var axios = require('axios').create({
  baseURL:baseURL,
  withCredentials: false, // 允许跨域 cookie
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type':'application/json'
  }
})

var loadingIns = null

//global axios interceptor
axios.interceptors.request.use(function(config) {
  loadingIns = Loading.service({ fullscreen: true })
  return config;
}, function (error) {
  loadingIns.close()
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  // Do something with response data
  loadingIns.close()
  return response;
}, function (error) {
  loadingIns.close()
  return Promise.reject(error);
});

export const _post = (url,option) => {
  return axios.post(url,option)
}

export const _get = (url,option) => {
  return axios.get(url,{params:option});
}

