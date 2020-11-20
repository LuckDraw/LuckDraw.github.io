---
sidebar: false
---

<h1>
  在 vue2.x / vue3.x 中使用
</h1>

<p>
  <a href="https://github.com/LuckDraw/vue-luck-draw" target="_black">
    <img src="https://img.shields.io/badge/github-%20vue--luck--draw%20-30a14e.svg?&logo=github&style=flat-square" alt="author" />
  </a>
  <a href="https://github.com/LuckDraw/vue-luck-draw/stargazers" target="_black">
    <img src="https://img.shields.io/github/stars/luckdraw/vue-luck-draw?color=%2330a14e&logo=github&style=flat-square" alt="stars" />
  </a>
  <a href="https://www.npmjs.com/package/vue-luck-draw" target="_black">
    <img src="https://img.shields.io/github/package-json/v/luckdraw/vue-luck-draw?color=%2330a14e&logo=npm&style=flat-square" alt="version" />
  </a>
  <a href="https://www.npmjs.com/package/vue-luck-draw" target="_black">
    <img src="https://img.shields.io/npm/dm/vue-luck-draw?color=%2330a14e&logo=npm&style=flat-square" alt="downloads" />
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

从下面的链接里下载一个叫`luckdraw.umd.min.js`的 js 文件, 然后使用 script 标签引入

- vue2.x：[https://github.com/buuing/vue-luck-draw/tree/master/dist](https://github.com/buuing/vue-luck-draw/tree/master/dist)
- vue3.x：[https://github.com/buuing/vue-luck-draw/tree/master/vue3](https://github.com/buuing/vue-luck-draw/tree/master/vue3)

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
<script src="./vue.min.js"></script>
<script src="./luckdraw.umd.min.js"></script>
<script>
  new Vue({
    el: '#app'
  })
</script>
```