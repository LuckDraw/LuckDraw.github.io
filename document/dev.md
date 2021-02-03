---
sidebar: false
---

<h1>
  开发者文档
</h1>

- 目前所有的`xx-luck-draw`抽奖功能都是基于`lucky-canvas`这个包进行**二次开发**的, 其目的是为了后续`新增功能 / 修复bug`更方便一些, 也是为了多端`显示 / 使用`效果一致

- 二次开发的插件包, 最好是锁定当前版本, 防止`lucky-canvas`源码包出现跨域式更新且未及时适配的情况, 同时也是为了方便浏览器端引入`umd.js`的小伙伴

```ts
import { LuckyWheel } from 'lucky-canvas'

/**
 * 创建构造函数的时候, 你需要传入两个参数
 * @param config 环境参数
 * @param data 抽奖配置项
 */
const $lucky = new LuckyWheel(config, data)
```

```ts
type config = {
   // 是否开始响应式, 默认为true
   // 因为部分用户需要异步设置奖品或按钮或一些其他配置, 我内部使用vue2.x订阅发布模式来根据数据变化触发画布的刷新机制
   // 但是这也导致在vue2.x里面, 抽奖相关数据的getter和setter被我二次覆盖, 如果你想让我把响应式还给vue的话, 可以设置ob为false
  ob: boolean = true
  // 当前平台参数, 默认为'WEB'
  // 比如: 部分小程序下面使用arcTo在安卓真机下有绘制bug, 所以我内部需要知道你绘制的目标平台
  flag: 'WEB' | 'MINI-WX' | 'UNI-H5' | 'UNI-MINI-WX' = 'WEB'
  // 提供给用户传递容器标识, 可以是标签class, 也可以是标签id
  el?: string
  // 如果用户认为el会导致重复, 也可以传入当前标签对象
  divElement?: HTMLDivElement
  // 如果用户不需要外层div嵌套, 也可以直接传入canvas标签对象
  canvasElement?: HTMLCanvasElement
  // 如果当前平台(小程序)无法自由操作dom, 那你只能传递给我canvas的上下文来供我绘制
  // 并且宽度和高度需要同时传给我, 因为我也无法获取元素宽高
  ctx: CanvasRenderingContext2D
  // dpr在内部用于缩放canvas来调整画布清晰度 (浏览器环境会自动获取), 默认为1
  dpr: number = 1
  // 画布宽度
  width: number
  // 画布高度
  height: number
  // 如果遇到了我不认识的单位, 比如rpx之类的, 就会触发这个方法, 你可以用它来转换特殊单位
  unitFunc?: (num: number, unit: string) => number
  // 帧动画API (浏览器环境会自动获取) (微信小程序下使用帧动画真机报错)
  rAF?: Function
  // 如果当前平台无法传入帧动画或帧动画报错, 那你只能传入定时器来代替
  setTimeout: Function
  setInterval: Function
  clearTimeout: Function
  clearInterval: Function
  // 组件生命周期 uni-app中有使用
  beforeInit?: Function // 初始化前 (只执行一次)
  afterInit?: Function // 初始化后 (只执行一次)
  beforeDraw?: Function // 绘制之后 (执行多次)
  afterDraw?: Function // 绘制之后 (执行多次)
}
```

```ts
// 当前 data 以大转盘抽奖为例
type data = {
  // 数据直接传递即可
  blocks?: Array<object>
  prizes?: Array<object>
  buttons?: Array<object>
  defaultConfig?: object
  defaultStyle?: object
  // 
  start?: (e: MouseEvent) => void
  end?: (prize: object) => void
}
```