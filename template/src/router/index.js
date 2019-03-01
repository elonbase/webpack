import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('@/views/index')
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

const router =  new VueRouter({
  mode:'hash',
  routes
})

export default router
