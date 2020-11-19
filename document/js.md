---
sidebar: false
---

<h1>
  在 JavaScript 中使用
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

## 方式 1：通过 script 标签引入

从下面的链接里下载一个叫`lucky-canvas.umd.min.js`的 js 文件, 然后使用 script 标签引入

- [https://github.com/luckdraw/lucky-canvas/tree/master/dist](https://github.com/luckdraw/lucky-canvas/tree/master/dist)

```html
<div id="my-lucky" style="width: 300px; height: 300px"></div>
<script src="./lucky-canvas.umd.min.js"></script>
<script>

  // 大转盘抽奖
  let luckyWheel = new LuckyCanvas.LuckyWheel('#my-lucky', {
    // ...你的配置
  })
  
  // 九宫格抽奖
  let luckyGrid = new LuckyCanvas.LuckyGrid('#my-lucky', {
    // ...你的配置
  })

</script>
```
