import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
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
