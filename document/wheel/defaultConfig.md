---
title: 默认配置 - defaultConfig
sidebar: 'auto'
---

> `defaultConfig`是对抽奖插件进行整体的配置

- <Describe name="default-config?: object" mean="默认配置" />
  - <Describe name="gutter?: string | number" mean="扇形之间的缝隙" desc="默认等于 0" />
  - <Describe name="offsetDegree?: number" mean="转盘的偏移角度" desc="默认为 0 度" />
  - <Describe name="speed?: number" mean="旋转速度峰值" desc="默认为 20，建议配置范围 10 ~ 30" />
  - <Describe name="speedFunction?: string" mean="缓动函数" desc="当前版本固定为 quadratic 二次方加速，后期会提供更多可选函数" />
  - <Describe name="accelerationTime?: number" mean="开始旋转时间" desc="单位为毫秒，默认等于 2500 毫秒" />
  - <Describe name="decelerationTime?: number" mean="缓慢停止时间" desc="单位为毫秒，默认等于 2500 毫秒" />

## 关于奖品区域的缝隙

<Exhibition>
  <template v-slot:code>
    <wheel-defaultConfig1 />
  </template>
  <template v-slot:text>
    <li><code>gutter</code>属性用来控制奖品扇形区域之间的缝隙，默认等于 0</li>
    <li>这个缝隙是等距的，不会随着角度的不同而产生弧度</li>
  </template>
</Exhibition>

<RecoDemo :collapse="true">
  <template slot="code-vue">
    <<< @/.vuepress/components/wheel/defaultConfig1.vue
  </template>
</RecoDemo>

## 关于转盘的偏移角度

<Exhibition>
  <template v-slot:code>
    <wheel-defaultConfig2 />
  </template>
  <template v-slot:text>
    <li>建议配置的角度范围：<code>-360 ~ 360</code></li>
    <li>默认情况下，指针会指向扇形的中线，如果你想让其指向扇形的边缘，可以通过计算</li>
    <li>比如这个转盘有 6 个奖品，那么每个扇形就等于<code>360 / 6 = 60</code>度，所以我只需要让转盘向前旋转<code>60 / 2 = 30</code>度即可</li>
  </template>
</Exhibition>

<RecoDemo :collapse="true">
  <template slot="code-vue">
    <<< @/.vuepress/components/wheel/defaultConfig2.vue
  </template>
</RecoDemo>

## 关于旋转速度

<Exhibition>
  <template v-slot:code>
    <wheel-defaultConfig3 />
  </template>
  <template v-slot:text>
    <p>旋转总共分为三个阶段：</p>
    <li>第一阶段进行<code>加速</code>旋转，速度会从 0 加速到<code>speed</code>设置的值（默认为20），加速曲线恒定的情况下，你设置的时间越短，加速度越大</li>
    <li>第二阶段为<code>匀速</code>阶段，处于<code>加速到峰值之后 && 调用stop方法之前</code>，此时加速度恒定为<code>speed</code></li>
    <li>第三阶段会缓慢<code>减速</code>到停止，在你调用<code>stop</code>方法之后，速度会从<code>speed</code>逐渐降低到 0</li>
    <p style="font-weight: 600; color: #F56C6C">注意：当你接口的请求速度，小于等于<code>accelerationTime</code>设置的毫秒值时，会跳过第二阶段，此时你可以手动加一个定时器延缓调用<code>stop</code>的时机，以此来留出匀速的时间</p>
  </template>
</Exhibition>
