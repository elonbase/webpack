import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (cookie.get('token')) {
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  }
  else {
    next();
  }
})

export default router
