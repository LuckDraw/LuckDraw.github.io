---
sidebar: false
---

<h1>
  在 Js / JQuery 中使用&ensp;
  <a href="https://github.com/LuckDraw/lucky-canvas" target="_black">
    <img src="https://img.shields.io/github/stars/luckdraw/lucky-canvas?color=%23ffca28&label=lucky-canvas%20%7C%20stars&logo=github&style=flat-square" style="vertical-align: bottom" alt="stars" />
  </a>
</h1>

## 方式 1：通过 script 标签引入

> 为了避免 CDN 链接出现异常或波动，我非常建议你**缓存到本地或服务器**

- **最新版本：** [https://cdn.jsdelivr.net/npm/lucky-canvas/dist/lucky-canvas.umd.min.js](https://cdn.jsdelivr.net/npm/lucky-canvas/dist/lucky-canvas.umd.min.js)
- **指定版本：** [https://cdn.jsdelivr.net/npm/lucky-canvas@1.1.2/dist/lucky-canvas.umd.min.js](https://cdn.jsdelivr.net/npm/lucky-canvas@1.1.2/dist/lucky-canvas.umd.min.js)


```html
<div id="my-lucky"></div>
<script src="https://cdn.jsdelivr.net/npm/lucky-canvas/dist/lucky-canvas.umd.min.js"></script>
<script>

  // 大转盘抽奖
  let luckyWheel = new LuckyCanvas.LuckyWheel({
    el: '#my-lucky',
    width: '300px',
    height: '300px',
  }, {
    // ...你的配置
  })
  
  // 九宫格抽奖
  let luckyGrid = new LuckyCanvas.LuckyGrid({
    el: '#my-lucky',
    width: '300px',
    height: '300px',
  }, {
    // ...你的配置
  })

</script>
```
