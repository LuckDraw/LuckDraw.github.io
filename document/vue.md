---
sidebar: false
---

<h1>
  在 vue2.x / vue3.x 中使用
</h1>

<p>
  <a href="https://github.com/LuckDraw/vue-luck-draw" target="_black">
    <img src="https://img.shields.io/github/stars/luckdraw/vue-luck-draw?color=%23ffca28&label=vue-luck-draw%20%7C%20stars&logo=github&style=flat-square" alt="stars" />
  </a>
</p>

## 方式 1：通过 import 引入

1. 首先安装插件

```shell
# npm 安装：
npm install vue-luck-draw

# yarn 安装：
yarn add vue-luck-draw
```

2. 然后找到 `main.js` 引入插件并 `use`

```js
// vue2.x
import LuckDraw from 'vue-luck-draw'
Vue.use(LuckDraw)

// vue3.x
import LuckDraw from 'vue-luck-draw/vue3'
createApp(App).use(LuckDraw).mount('#app')
```

3. 最后在组件内使用 **`<LuckyWheel />`大转盘组件** 或 **`<LuckyGrid />`九宫格组件**

```vue
<template>
  <div>
    <!-- 大转盘抽奖 -->
    <LuckyWheel
      style="width: 200px; height: 200px"
      ...你的配置
    />
    <!-- 九宫格抽奖 -->
    <LuckyGrid
      style="width: 200px; height: 200px"
      ...你的配置
    />
  </div>
</template>
```

<br />

## 方式 2：通过 script 标签引入

> 为了避免 CDN 链接出现异常或波动，我非常建议你**缓存到本地或服务器**

- **vue2.x：**
  - **最新版本：** [https://cdn.jsdelivr.net/npm/vue-luck-draw/dist/vue-luck-draw.umd.min.js](https://cdn.jsdelivr.net/npm/vue-luck-draw/dist/vue-luck-draw.umd.min.js)
  - **指定版本：** [https://cdn.jsdelivr.net/npm/vue-luck-draw@3.3.0/dist/vue-luck-draw.umd.min.js](https://cdn.jsdelivr.net/npm/vue-luck-draw@3.3.0/dist/vue-luck-draw.umd.min.js)

<span></span>

- **vue3.x：**
  - **最新版本：** [https://cdn.jsdelivr.net/npm/vue-luck-draw/vue3/vue-luck-draw.umd.min.js](https://cdn.jsdelivr.net/npm/vue-luck-draw/vue3/vue-luck-draw.umd.min.js)
  - **指定版本：** [https://cdn.jsdelivr.net/npm/vue-luck-draw@3.3.0/vue3/vue-luck-draw.umd.min.js](https://cdn.jsdelivr.net/npm/vue-luck-draw@3.3.0/vue3/vue-luck-draw.umd.min.js)


```html
<div id="app">
  <!-- 大转盘抽奖 -->
  <lucky-wheel
    style="width: 200px; height: 200px"
    ...你的配置
  />
  <!-- 九宫格抽奖 -->
  <lucky-grid
    style="width: 200px; height: 200px"
    ...你的配置
  />
</div>
<script src="https://cdn.bootcdn.net/ajax/libs/vue/2.6.9/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue-luck-draw/dist/vue-luck-draw.umd.min.js"></script>
<script>
  new Vue({
    el: '#app'
  })
</script>
```