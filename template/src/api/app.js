import request from '@/utils/request'

export function isGetRequest() {
  return request({
    url: '/',
    method: 'get',
    params: {}
  })
}

export function isPostRequest() {
  return request({
    url: '/',
    method: 'post',
    data: {}
  })
}
