---
title: 在 vue2.x / vue3.x 中使用 vue-luck-draw
sidebar: false
---

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