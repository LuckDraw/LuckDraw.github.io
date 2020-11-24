---
sidebar: false
---

<h1>
  在 Js / JQuery 中使用
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

> 为了避免 CDN 链接出现异常或波动，我非常建议你**缓存到本地或服务器**

- **最新版本：** [https://cdn.jsdelivr.net/npm/lucky-canvas/umd.min.js](https://cdn.jsdelivr.net/npm/lucky-canvas/umd.min.js)
- **指定版本：** [https://cdn.jsdelivr.net/npm/lucky-canvas@1.0.6/umd.min.js](https://cdn.jsdelivr.net/npm/lucky-canvas@1.0.6/umd.min.js)


```html
<div id="my-lucky" style="width: 300px; height: 300px"></div>
<script src="https://cdn.jsdelivr.net/npm/lucky-canvas/umd.min.js"></script>
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
