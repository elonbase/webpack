import router from './router'

// const whiteList = ['/login'] // 不重定向白名单

// 添加路由守卫
router.beforeEach((to, from, next) => {
  next()
})
