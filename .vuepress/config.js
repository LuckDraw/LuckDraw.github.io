module.exports = {
  base: '/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '幸运抽奖',
      description: '一个多功能、多配置的抽奖插件, 集合了大转盘抽奖与九宫格抽奖等'
    },
    // '/en/': {
    //   lang: 'en-US',
    //   title: 'lucky draw',
    //   description: 'A multi-functional, multi configuration lucky draw plug-in, a collection of large turntable luck draw and nine grid luck draw'
    // }
  },
  themeConfig: {
    locales: {
      '/': {
        nav: [
          { text: ' 感谢 Github 帮我点星', link: 'https://github.com/buuing/vue-luck-draw' },
          { text: 'BUG 反馈', link: 'https://github.com/buuing/vue-luck-draw/issues' }
        ],
        sidebarDepth: 3,
        sidebar: [
          {
            title: '演示 Demo',
            path: '/demo/',
            collapsable: false,
          },
          {
            title: '使用 Usage',
            path: '/',
            collapsable: false,
          },
          {
            title: '大转盘 - 配置项',
            path: '/wheel/',
            collapsable: false,
          },
          {
            title: '九宫格 - 配置项',
            path: '/grid/',
            collapsable: false,
          }
        ]
      },
      '/en/': {
        nav: [
          { text: 'Github', link: 'https://github.com/buuing/vue-luck-draw' },
          { text: 'Issues', link: 'https://github.com/buuing/vue-luck-draw/issues' }
        ],
        sidebarDepth: 3,
        sidebar: [
          {
            title: 'Install & Usage',
            path: '/',
            collapsable: false,
          },
        ]
      }
    }
  },
  head: [
    ['link', { ref: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' }],
    ['script', {}, `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?fde5bc73137b15d09b1686fe514b662a";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
    `]
  ],
  matchRoute: {
    '/vue-luck-draw/lucky-demo': '/demo',
    '/vue-luck-draw/lucky-demo/': '/demo',
    '/vue-luck-draw/lucky-wheel': '/wheel',
    '/vue-luck-draw/lucky-wheel/': '/wheel',
    '/vue-luck-draw/lucky-grid': '/grid',
    '/vue-luck-draw/lucky-grid/': '/grid',
    '/vue-luck-draw': '/',
    '/vue-luck-draw/': '/',
  }
}
