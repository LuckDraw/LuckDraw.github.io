module.exports = {
  navZh: [
    { text: '首页', icon: 'reco-home', link: '/' },
    {
      text: '文档',
      icon: 'reco-blog',
      link: '/document/vue',
      items: [
        {
          text: '使用',
          items: [
            { text: '在 Js / JQuery 中使用', link: '/document/js' },
            { text: '在 vue2.x / vue3.x 中使用', link: '/document/vue' },
            { text: '在 uni-app 中使用', link: '/document/uni-app' },
            { text: '在 微信小程序 中使用', link: '/document/wx' },
          ]
        },
        {
          text: '配置项',
          items: [
            { text: '大转盘抽奖', link: '/document/wheel/blocks' },
            { text: '九宫格抽奖', link: '/document/grid/blocks' }
          ]
        }
      ]
    },
    { text: '示例', icon: 'reco-api', link: '/demo/wheel/ymc' },
    {
      text: '常见问题',
      icon: 'reco-faq',
      link: '/issues/'
      // items: [
      //   { text: 'Js 中的问题', link: 'https://github.com/luckdraw/lucky-canvas/issues' },
      //   { text: 'Vue 中的问题', link: 'https://github.com/luckdraw/vue-luck-draw/issues' }
      // ]
    },
    { text: 'Github', icon: 'reco-github', link: 'https://github.com/luckdraw' },
  ],
  navEn: {}
}
