---
sidebar: false
---

<h1>
  在 微信小程序 中使用
</h1>

## 方式 1：通过 import 引入

<!-- > 为了避免 CDN 链接出现异常或波动，我非常建议你**缓存到本地或服务器**

- **最新版本：** [https://cdn.jsdelivr.net/npm/lucky-canvas/umd.min.js](https://cdn.jsdelivr.net/npm/lucky-canvas/umd.min.js)
- **指定版本：** [https://cdn.jsdelivr.net/npm/lucky-canvas@1.0.8/umd.min.js](https://cdn.jsdelivr.net/npm/lucky-canvas@1.0.8/umd.min.js) -->

- **注意：`版本 >= v1.0.8` 才支持在微信小程序中使用，下面的代码为微信小程序的原生语法**

- **注意：`v1.0.8`暂未发布**

```html
<view>
  <canvas
    type="2d"
    id="my-lucky"
    bindtouchstart="toPlay"
    style="width: 600rpx; height: 600rpx; margin: 0 auto"
  ></canvas>
</view>
```

```js
const app = getApp()
import { LuckyWheel } from './lucky-canvas.cjs.min.js'
Page({
  toPlay (e) {
    const ctx = this.ctx
    ctx.beginPath()
    ctx.arc(0, 0, this.$lucky.maxBtnRadius, 0, Math.PI * 2, false)
    if (!ctx.isPointInPath(e.changedTouches[0].x * this.dpr, e.changedTouches[0].y * this.dpr)) return
    // 触发 lucky-canvas 的抽奖逻辑
    this.$lucky.startCallback()
  },
  onLoad: function () {
    const query = wx.createSelectorQuery()
    query.select('#my-lucky').fields({ node: true, size: true }).exec((res) => {
      const canvas = this.canvas = res[0].node
      const dpr = this.dpr = wx.getSystemInfoSync().pixelRatio
      this.ctx = canvas.getContext('2d')
      canvas.width = res[0].width * dpr
      canvas.height = res[0].height * dpr
      this.ctx.scale(dpr, dpr)
      const $lucky = this.$lucky = new LuckyWheel({
        width: res[0].width,
        height: res[0].width,
        ctx: this.ctx
      }, {
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
          $lucky.play()
          setTimeout(() => {
            $lucky.stop(Math.random() * 8 >> 0)
          }, 3000)
        },
        end: function (prize) {
          console.log(`恭喜你获得${prize.title}`)
        },
      })
      // 覆盖window对象的一些方法
      this.$lucky.rAF = res[0].node.requestAnimationFrame
      this.$lucky.cAF = res[0].node.cancelAnimationFrame
      this.$lucky.setInterval = setInterval
      this.$lucky.clearInterval = clearInterval
    })
  }
})
```
