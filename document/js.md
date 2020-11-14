---
title: 在 JavaScript 中使用
sidebar: false
---

## 方式 1：通过 script 标签引入

从下面的链接里下载一个叫`web-luck-draw.umd.min.js`的 js 文件, 然后使用 script 标签引入

- [https://github.com/luckdraw/web-luck-draw/tree/master/dist](https://github.com/luckdraw/web-luck-draw/tree/master/dist)

```html
<div id="my-lucky" style="width: 300px; height: 300px"></div>
<script src="./web-luck-draw.umd.min.js"></script>
<script>

  // 大转盘抽奖
  let luckyWheel = new LuckDraw.LuckyWheel('#my-lucky', {
    // ...你的配置
  })
  
  // 九宫格抽奖
  let luckyGrid = new LuckDraw.LuckyGrid('#my-lucky', {
    // ...你的配置
  })

</script>
```
