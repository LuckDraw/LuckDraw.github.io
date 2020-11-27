---
sidebar: false
---

<h1>
  在 uni-app 中使用
</h1>

<p>
  <a href="https://github.com/LuckDraw/lucky-canvas" target="_black">
    <img src="https://img.shields.io/badge/github-%20lucky--canvas%20-ffca28.svg?&logo=github&style=flat-square" alt="author" />
  </a>
  <a href="https://github.com/LuckDraw/lucky-canvas/stargazers" target="_black">
    <img src="https://img.shields.io/github/stars/luckdraw/lucky-canvas?color=%23ffca28&logo=github&style=flat-square" alt="stars" />
  </a>
  <a href="https://www.npmjs.com/package/lucky-canvas" target="_black">
    <img src="https://img.shields.io/github/package-json/v/luckdraw/lucky-canvas?color=%23ffca28&logo=npm&style=flat-square" alt="version" />
  </a>
  <a href="https://www.npmjs.com/package/lucky-canvas" target="_black">
    <img src="https://img.shields.io/npm/dm/lucky-canvas?color=%23ffca28&logo=npm&style=flat-square" alt="downloads" />
  </a>
</p>


- **注意：`uni-app`目前只适配了`H5`和`Vue`, 目前`微信小程序`版本已适配完毕还在测试当中**

## 方式 1：通过 import 引入

1. 安装插件

- **你可以选择通过 `HBuilderX` 导入插件：** [https://ext.dcloud.net.cn/plugin?id=3499](https://ext.dcloud.net.cn/plugin?id=3499)

- **也可以选择通过 `npm / yarn` 安装**

```shell
# npm 安装：
npm install lucky-canvas

# yarn 安装：
yarn add lucky-canvas
```


2. 引入并使用

```vue
<template>
  <view id="my-lucky" style="width: 300px; height: 300px"></view>
</template>

<script>
// npm 下载会默认到 node_modules 里面，直接引入包名即可
import { LuckyWheel, LuckyGrid } from 'lucky-canvas'

// 如果你是通过 HBuilderX 导入插件，那你需要指定一下路径
// import { LuckyWheel, LuckyGrid } from './components/lucky-canvas/index.js'

export default {
  data () {
    return {}
  }
  onShow: function() {

    // 大转盘抽奖
    let luckyWheel = new LuckyWheel('#my-lucky', {
      // ...你的配置
    })

    // 九宫格抽奖
    let luckyGrid = new LuckyGrid('#my-lucky', {
      // ...你的配置
    })

  }
}
</script>
```

3. 我这里提供了一个最基本的 demo 用于尝试

```vue
<template>
  <view id="my-lucky" style="width: 300px; height: 300px"></view>
</template>

<script>
import { LuckyWheel } from 'lucky-canvas'
export default {
  onShow: function() {
    // 大转盘抽奖
    let luckyWheel = new LuckyWheel('#my-lucky', {
      prizes: [
        { title: '1元红包', background: '#f9e3bb', fonts: [{ text: '1元红包', top: '18%' }] },
        { title: '100元红包', background: '#f8d384', fonts: [{ text: '100元红包', top: '18%' }] },
        { title: '0.5元红包', background: '#f9e3bb', fonts: [{ text: '0.5元红包', top: '18%' }] },
        { title: '2元红包', background: '#f8d384', fonts: [{ text: '2元红包', top: '18%' }] },
        { title: '10元红包', background: '#f9e3bb', fonts: [{ text: '10元红包', top: '18%' }] },
        { title: '50元红包', background: '#f8d384', fonts: [{ text: '50元红包', top: '18%' }] },
      ],
      defaultStyle: {
        fontColor: '#d64737',
        fontSize: '14px'
      },
      blocks: [
        { padding: '13px', background: '#d64737' }
      ],
      buttons: [
        { radius: '50px', background: '#d64737' },
        { radius: '45px', background: '#fff' },
        { radius: '41px', background: '#f6c66f', pointer: true },
        {
          radius: '35px', background: '#ffdea0',
          fonts: [{ text: '开始\n抽奖', fontSize: '18px', top: -18 }]
        }
      ],
      start: function () {
        luckyWheel.play()
        setTimeout(() => {
          luckyWheel.stop(Math.random() * 8 >> 0)
        }, 3000)
      },
      end: function (prize) {
        alert(`恭喜你获得${prize.title}`)
      },
    })
  }
}
</script>
```
