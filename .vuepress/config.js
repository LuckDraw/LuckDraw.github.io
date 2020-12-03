const { navZh, navEn } = require('./config/nav.js')
const { sidebarZh, sidebarEn } = require('./config/sidebar.js')
const headConfig = require('./config/head.js')
const plugins = require('./config/plugins.js')

module.exports = {
  // base: '/',
  head: headConfig,
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '基于 Js / JQuery / Vue / 微信小程序 / uni-app 的抽奖插件【大转盘 & 九宫格】',
      description: '🎉一个支持 JavaScript / Vue2.x / Vue3.x 的（大转盘抽奖 / 九宫格抽奖）luckydraw 插件，🎨奖品 / 文字 / 图片 / 颜色 / 按钮均可配置，支持同步 / 异步抽奖，🏅概率前 / 后端可控，可根据 dpr 自动调整清晰度适配移动端'
    },
    // '/en/': {
    //   lang: 'en-US',
    //   title: 'lucky draw',
    //   description: 'A multi-functional, multi configuration lucky draw plug-in, a collection of large turntable luck draw and nine grid luck draw'
    // }
  },
  theme: 'reco',
  themeConfig: {
    mode: 'light',
    type: 'HomePage',
    logo: '/logo.png',
    noFoundPageByTencent: false,
    modePicker: false,
    nextLinks: false,
    prevLinks: false,
    subSidebar: 'auto',
    locales: {
      '/': {
        nav: navZh,
        sidebar: sidebarZh,
        sidebarDepth: 3,
      },
      '/en/': {
        nav: [
          { text: 'Github', link: 'https://github.com/buuing/vue-luck-draw' },
          { text: 'Issues', link: 'https://github.com/buuing/vue-luck-draw/issues' }
        ],
        sidebar: [
          {
            title: 'Install & Usage',
            path: '/',
            collapsable: false,
          },
        ],
        sidebarDepth: 3,
      }
    },
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
  },
  plugins,
  markdown: {
    lineNumbers: true
  },
}
