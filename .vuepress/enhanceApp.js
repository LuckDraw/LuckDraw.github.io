import LuckDraw from 'vue-luck-draw'
import { matchRoute } from './config/route.js'
// import {
//   Col,
//   Row,
//   Button,
//   Badge,
//   Tag,
//   Card,
//   message,
//   notification
// } from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.css'
import './index.css'

export default ({ Vue, options, router, siteData, isServer }) => {
  Vue.use(LuckDraw)
  // Vue.use(Col)
  // Vue.use(Row)
  // Vue.use(Button)
  // Vue.use(Badge)
  // Vue.use(Tag)
  // Vue.use(Card)
  // Vue.prototype.$message = message
  // Vue.prototype.$notification = notification
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
