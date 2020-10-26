module.exports = {
  sidebarZh: {
    '/document/': [
      {
        title: '使用',
        collapsable: false,
        children: [
          { title: '在 vue2.x / vue3.x 中使用', path: '/document/vue' }
        ]
      },
      {
        title: '大转盘抽奖',
        collapsable: false,
        children: [
          { title: '边框 - blocks', path: '/document/wheel/blocks' },
          { title: '奖品 - prizes', path: '/document/wheel/prizes' },
          { title: '抽奖按钮 - buttons', path: '/document/wheel/buttons' },
          { title: '默认样式 - defaultStyle', path: '/document/wheel/defaultStyle' },
          { title: '回调 & 方法', path: '/document/wheel/methods' },
        ]
      },
      {
        title: '九宫格抽奖',
        collapsable: false,
        children: [
          { title: '边框 - blocks', path: '/document/grid/blocks' },
          { title: '奖品 - prizes', path: '/document/grid/prizes' },
          { title: '抽奖按钮 - button', path: '/document/grid/button' },
          { title: '默认样式 - defaultStyle', path: '/document/grid/defaultStyle' },
          { title: '中奖标记样式 - activeStyle', path: '/document/grid/activeStyle' },
          { title: '格子布局 - rows & cols', path: '/document/grid/rows-cols' },
          { title: '回调 & 方法', path: '/document/grid/methods' },
        ]
      }
    ],
    '/demo/': [
      {
        title: '大转盘示例',
        collapsable: false,
        children: [
          { title: '大转盘抽奖 Demo', path: '/demo/wheel/ymc' },
          { title: '仿抽奖乐大转盘', path: '/demo/wheel/cjl' },
          { title: '仿潘德妈妈大转盘', path: '/demo/wheel/pdmm' },
        ]
      },
      {
        title: '九宫格示例',
        collapsable: false,
        children: [
          { title: '九宫格抽奖 Demo', path: '/demo/grid/yyjk' },
          { title: '仿网易严选九宫格', path: '/demo/grid/yx' },
          { title: '仿某开源九宫格', path: '/demo/grid/jq1' },
          { title: '吃货大转盘十二宫格', path: '/demo/grid/food' },
        ]
      },
    ]
  },
  sidebarEn: {}
}