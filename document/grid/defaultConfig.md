---
title: 默认配置 - defaultConfig
sidebar: 'auto'
---

> `defaultConfig`是对抽奖插件进行整体的配置

- <Describe name="default-config?: object" mean="默认配置" />
  - <Describe name="gutter?: number" mean="格子之间的间距" desc="默认等于 5" />
  - <Describe name="speed?: number" mean="旋转速度峰值" desc="默认为 20，建议配置范围 10 ~ 30" />
  - <Describe name="rotateTime?: number" mean="开始旋转时间" desc="单位为毫秒，默认等于 2500 毫秒" />
  - <Describe name="stopTime?: number" mean="缓慢停止时间" desc="单位为毫秒，默认等于 2500 毫秒" />

## 关于旋转速度

<Exhibition>
  <template v-slot:code>
    <grid-defaultConfig1 />
  </template>
  <template v-slot:text>
    <p>旋转总共分为三个阶段：</p>
    <li>第一阶段<code>rotateTime</code>进行加速旋转，速度会从 0 加速到<code>speed</code>设置的值（默认为20），加速曲线恒定的情况下，你设置的时间越短，加速度越大</li>
    <li>第二阶段处于<code>加速到峰值之后 && 调用stop方法之前</code>，此时加速度恒定为<code>speed</code></li>
    <li>第三阶段<code>stopTime</code>会缓慢停止，在你调用<code>stop</code>方法之后，速度会从<code>speed</code>逐渐降低到 0</li>
    <p style="font-weight: 400">注意：当你接口的请求速度，小于等于<code>rotateTime</code>时会跳过第二阶段</p>
  </template>
</Exhibition>
