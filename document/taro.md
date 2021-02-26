---
sidebar: false
---

<h1>
  在 Taro 中使用
</h1>

<p>
  <a href="https://github.com/LuckDraw/taro-luck-draw" target="_black">
    <img src="https://img.shields.io/github/stars/luckdraw/taro-luck-draw?color=%23ffca28&label=taro-luck-draw%20%7C%20stars&logo=github&style=flat-square" alt="stars" />
  </a>
</p>

## 安装

```shell
# npm 安装：
npm install taro-luck-draw

# yarn 安装：
yarn add taro-luck-draw
```

<br />

## 使用

- [点击查看 taro-vue2.x 示例 Demo](https://github.com/LuckDraw/taro-luck-draw#vue2x-%E7%A4%BA%E4%BE%8B-demo)
- [点击查看 taro-vue3.x 示例 Demo](https://github.com/LuckDraw/taro-luck-draw#vue3x-%E7%A4%BA%E4%BE%8B-demo)

- **`taro-vue`**

```vue
<template>
  <view>
    <!-- 大转盘抽奖 -->
    <LuckyWheel width="600rpx" height="600rpx" ...你的配置 />
    <!-- 九宫格抽奖 -->
    <LuckyGrid width="600rpx" height="600rpx" ...你的配置 />
  </view>
</template>

<script>
import { LuckyWheel, LuckyGrid } from 'taro-luck-draw/vue'
export default {
  components: { LuckyWheel, LuckyGrid },
}
</script>
```

- **`taro-react`**

```jsx
// 开发中
```

<br />

### vue2.x 示例 Demo

```vue
<template>
  <view>
    <LuckyWheel
      ref="$lucky"
      width="600rpx"
      height="600rpx"
      :prizes="prizes"
      :blocks="blocks"
      :buttons="buttons"
      :defaultStyle="defaultStyle"
      @start="startCallback"
      @end="endCallback"
    ></LuckyWheel>
  </view>
</template>

<script>
import { LuckyWheel } from 'taro-luck-draw/vue'
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
    // 点击抽奖按钮会触发star回调
    startCallback () {
      // 调用抽奖组件的play方法开始游戏
      this.$refs.$lucky.play()
      // 模拟调用接口异步抽奖
      setTimeout(() => {
        // 假设拿到后端返回的中奖索引
        const index = Math.random() * 6 >> 0
        // 调用stop停止旋转并传递中奖索引
        this.$refs.$lucky.stop(index)
      }, 3000)
    },
    // 抽奖结束会触发end回调
    endCallback (prize) {
      console.log(`恭喜你获得${prize.title}`)
    },
  }
}
</script>
```

### vue3.x 示例 Demo

```vue
<template>
  <view>
    <LuckyWheel
      ref="$lucky"
      width="600rpx"
      height="600rpx"
      :prizes="prizes"
      :blocks="blocks"
      :buttons="buttons"
      :defaultStyle="defaultStyle"
      @start="startCallback"
      @end="endCallback"
    ></LuckyWheel>
  </view>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import { LuckyWheel } from 'taro-luck-draw/vue'
export default {
  components: { LuckyWheel },
  setup () {
    const $lucky = ref(null)
    const state = reactive({
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
    })
    // 点击抽奖按钮会触发star回调
    function startCallback () {
      // 调用抽奖组件的play方法开始游戏
      $lucky.value.play()
      // 模拟调用接口异步抽奖
      setTimeout(() => {
        // 假设拿到后端返回的中奖索引
        const index = Math.random() * 6 >> 0
        // 调用stop停止旋转并传递中奖索引
        $lucky.value.stop(index)
      }, 3000)
    }
    // 抽奖结束会触发end回调
    function endCallback (prize) {
      console.log(`恭喜你获得${prize.title}`)
    }
    return {
      ...toRefs(state),
      startCallback,
      endCallback,
      $lucky
    }
  }
}
</script>
```
