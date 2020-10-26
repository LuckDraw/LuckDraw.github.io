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
            { text: '在 vue2.x / vue3.x 中使用', link: '/document/vue' }
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
    { text: '演示', icon: 'reco-api', link: '/demo/wheel/ymc' },
    { text: 'Github', icon: 'reco-github', link: 'https://github.com/buuing/vue-luck-draw' },
    { text: '问题反馈', icon: 'reco-faq', link: 'https://github.com/buuing/vue-luck-draw/issues' },
  ],
  navEn: {}
}
