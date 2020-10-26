---
title: 中奖标记样式 - activeStyle
sidebar: 'auto'
---


> 中奖标记目前可支持的属性较少

- <Describe name="activeStyle?: object" mean="中奖标记样式" />
  - <Describe name="fontColor?: string" mean="字体颜色" />
  - <Describe name="fontSize?: string" mean="字体大小(px)" desc="" />
  - <Describe name="fontStyle?: string" mean="字体样式" desc="" />
  - <Describe name="fontWeight?: string" mean="字体粗细" desc="" />
  - <Describe name="background?: string" mean="格子的背景颜色" desc="默认是 '#ffce98' 橘黄色" />
  - <Describe name="shadow?: string" mean="格子阴影" desc="由 4 个值组成：1.水平位置、2.垂直位置、3.模糊度、4.阴影颜色" />

## 关于中奖标记样式

<Exhibition>
  <template v-slot:code>
    <grid-activeStyle1 />
  </template>
  <template v-slot:text>
    <li><code>activeStyle</code>配置的样式只有在中奖标记滑过时才会生效，如果没有开始抽奖，中奖标记则会默认停留在0号格子的位置</li>
    <li>中奖标记会以<code>index</code>升序的方式进行游走，所以<code>index</code>决定了九宫格该如何旋转</li>
    <li>这也就是为什么<code>button</code>没有<code>index</code>的原因</li>
  </template>
</Exhibition>

<RecoDemo :collapse="true">
  <template slot="code-vue">
    <<< @/.vuepress/components/grid/activeStyle1.vue
  </template>
</RecoDemo>
