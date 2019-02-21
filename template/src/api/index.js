const baseURL = ''    //base api url
{{#multipleServer}}
// eslint-disable-next-line no-undef 
baseURL = _API_   
{{/multipleServer}}

var axios = require('axios').create({
  baseURL:baseURL,
  withCredentials: false, // 允许跨域 cookie
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type':'application/json'
  }
})


//global axios interceptor
axios.interceptors.request.use(function(config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  // Do something with response data
  return response;
}, function (error) {
  return Promise.reject(error);
});

export const _post = (url,option) => {
  return axios.post(url,option)
}

export const _get = (url,option) => {
  return axios.get(url,{params:option});
}

