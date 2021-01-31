---
sidebar: false
---

<h1>
  在 uni-app 中使用
</h1>

<p>
  <a href="https://github.com/LuckDraw/uni-luck-draw" target="_black">
    <img src="https://img.shields.io/github/stars/luckdraw/uni-luck-draw?color=%23ffca28&label=uni-luck-draw%20%7C%20stars&logo=github&style=flat-square" alt="stars" />
  </a>
</p>

> 当前 uni-app 中各端适配情况
> - `H5端`：编译正常
> - `微信小程序`：编译正常
> - `qq小程序`：编译正常 (只能使用网络图片)
> - `app端`：安卓测试正常, ios未测试 (但是不流畅, 有明显卡顿)
> - `其他小程序`：未测试

## 方式 1：通过 import 引入

### 1. 安装插件

- **你可以选择通过 `HBuilderX` 导入插件：** [https://ext.dcloud.net.cn/plugin?id=3499](https://ext.dcloud.net.cn/plugin?id=3499)

- **也可以选择通过 `npm / yarn` 安装**

```shell
# npm 安装：
npm install uni-luck-draw

# yarn 安装：
yarn add uni-luck-draw
```

### 2. 引入并使用

```vue
<template>
  <view>
    <!-- 大转盘抽奖 -->
    <LuckyWheel
      width="600rpx"
      height="600rpx"
      ...你的配置
    />
    <!-- 九宫格抽奖 -->
    <LuckyGrid
      width="600rpx"
      height="600rpx"
      ...你的配置
    />
  </view>
</template>

<script>
  // npm 下载会默认到 node_modules 里面，直接引入包名即可
  import LuckyWheel from 'uni-luck-draw/lucky-wheel' // 大转盘
  import LuckyGrid from 'uni-luck-draw/lucky-grid' // 九宫格

  // 如果你是通过 HBuilderX 导入插件，那你需要指定一下路径
  // import LuckyWheel from '@/components/uni-luck-draw/lucky-wheel' // 大转盘
  // import LuckyGrid from '@/components/uni-luck-draw/lucky-grid' // 九宫格

  export default {
    // 注册组件
    components: { LuckyWheel, LuckyGrid },
  }
</script>
```

### 3. 我这里提供了一个最基本的 demo 供你用于尝试

```vue
<template>
  <view>
    <LuckyWheel
      ref="luckyWheel"
      width="600rpx"
      height="600rpx"
      :blocks="blocks"
      :prizes="prizes"
      :buttons="buttons"
      :defaultStyle="defaultStyle"
      @start="startCallBack"
      @end="endCallBack"
    />
  </view>
</template>

<script>
  import LuckyWheel from 'uni-luck-draw/lucky-wheel'
  export default {
    components: { LuckyWheel },
    data () {
      return {
        blocks: [
          { padding: '13px', background: '#d64737' }
        ],
        prizes: [
          { title: '1元红包', background: '#f9e3bb', fonts: [{ text: '1元红包', top: '18%' }] },
          { title: '100元红包', background: '#f8d384', fonts: [{ text: '100元红包', top: '18%' }] },
          { title: '0.5元红包', background: '#f9e3bb', fonts: [{ text: '0.5元红包', top: '18%' }] },
          { title: '2元红包', background: '#f8d384', fonts: [{ text: '2元红包', top: '18%' }] },
          { title: '10元红包', background: '#f9e3bb', fonts: [{ text: '10元红包', top: '18%' }] },
          { title: '50元红包', background: '#f8d384', fonts: [{ text: '50元红包', top: '18%' }] },
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
        defaultStyle: {
          fontColor: '#d64737',
          fontSize: '14px'
        },
      }
    },
    methods: {
      // 点击抽奖按钮触发回调
      startCallBack () {
        // 先开始旋转
        this.$refs.luckyWheel.play()
        // 使用定时器来模拟请求接口
        setTimeout(() => {
          // 3s后得到中奖索引
          let index = Math.random() * 6 >> 0
          // 缓慢停止游戏
          this.$refs.luckyWheel.stop(index)
        }, 3000)
      },
      // 抽奖结束触发回调
      endCallBack (prize) {
        // 奖品详情
        console.log(prize)
      }
    }
  }
</script>
```
