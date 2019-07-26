import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
    // children: [
    //   {
    //     path: 'child',
    //     component: child,
    //     meta: {
    //       requireAuth: true, //需要验证登录状态的组件
    //     },
    //   },
    // ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router
