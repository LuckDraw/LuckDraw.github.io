---
title: 默认配置 - defaultConfig
sidebar: 'auto'
---

> `defaultConfig`是对抽奖插件进行整体的配置

- <Describe name="default-config?: object" mean="默认配置" />
  - <Describe name="gutter?: number" mean="格子之间的间距" desc="默认等于 5" />
  - <Describe name="speed?: number" mean="旋转速度峰值" desc="默认为 20，建议配置范围 10 ~ 30" />
  - <Describe name="accelerationTime?: number" mean="开始旋转时间" desc="单位为毫秒，默认等于 2500 毫秒" />
  - <Describe name="decelerationTime?: number" mean="缓慢停止时间" desc="单位为毫秒，默认等于 2500 毫秒" />

## 关于旋转速度

<Exhibition>
  <template v-slot:code>
    <grid-defaultConfig1 />
  </template>
  <template v-slot:text>
    <p>旋转总共分为三个阶段：</p>
    <li>第一阶段进行<code>加速</code>旋转，速度会从 0 加速到<code>speed</code>设置的值（默认为20），加速曲线恒定的情况下，你设置的时间越短，加速度越大</li>
    <li>第二阶段为<code>匀速</code>阶段，处于<code>加速到峰值之后 && 调用stop方法之前</code>，此时加速度恒定为<code>speed</code></li>
    <li>第三阶段会缓慢<code>减速</code>到停止，在你调用<code>stop</code>方法之后，速度会从<code>speed</code>逐渐降低到 0</li>
    <p style="font-weight: 600; color: #F56C6C">注意：当你接口的请求速度，小于等于<code>accelerationTime</code>设置的毫秒值时，会跳过第二阶段，此时你可以手动加一个定时器延缓调用<code>stop</code>的时机，以此来留出匀速的时间</p>
  </template>
</Exhibition>
