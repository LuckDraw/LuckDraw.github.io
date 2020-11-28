---
sidebar: false
---

<h1>
  在 微信小程序 中使用
</h1>

> <p style="color: #3eaf7c; font-weight: 700">我这周得去爬山所以没有时间封装，着急的同学可以先按照下面的 demo 进行改造，不急的话我会在下周针对微信小程序进行组件封装 / 优化传参 / 方法调用</p>

## 方式 1：通过 import 引入（应急方案）

把下面的 js 文件下载到项目中通过 import 引入

- **指定版本：** [https://cdn.jsdelivr.net/npm/lucky-canvas@1.0.8/dist/lucky-canvas.cjs.min.js](https://cdn.jsdelivr.net/npm/lucky-canvas@1.0.8/dist/lucky-canvas.cjs.min.js)

- **注意：下面的代码为微信小程序的原生语法**

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
          // 旋转并开始游戏
          $lucky.play()
          // 利用定时器模拟接口调用
          setTimeout(() => {
            // 得到中奖索引
            const index = Math.random() * 6 >> 0
            // 开始缓慢停止
            $lucky.stop(index)
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
