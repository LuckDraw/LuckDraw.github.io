import LuckDraw from 'vue-luck-draw'
import { matchRoute } from './config/route.js'
import './index.css'

export default ({ Vue, options, router, siteData, isServer }) => {
  Vue.use(LuckDraw)
  router.beforeEach((to, from, next) => {
    
    // 处理旧路由的重定向
    for (let key in matchRoute) {
      if (to.path === key) return next({
        path: matchRoute[key],
        query: to.query
      })
    }
    next()
  })
}
