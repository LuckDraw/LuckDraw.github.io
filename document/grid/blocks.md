---
title: 边框 - blocks
sidebar: 'auto'
---

> `blocks`用来绘制矩形（宽度和高度不可配置）第一个矩形的宽高等于`<luckyGrid />`的宽高，但可以通过`padding`属性挤出边框的样式

- <Describe name="blocks?: Array<object>" mean="" />
  - <Describe name="borderRadius?: string | number" mean="圆角半径" desc="默认为 0, 配置范围为 0 ~ Infinity" />
  - <Describe name="background: string" mean="背景颜色" desc="可填写16进制颜色哈希值或 rgba" :isRequire="true" />
  - <Describe name="padding: string" mean="内边距" desc="与 css 中 padding 使用方式一样" :isRequire="true" />
  - <Describe name="paddingTop: string | number" mean="上边距" desc="优先级大于 padding" />
  - <Describe name="paddingBottom: string | number" mean="下边距" desc="优先级大于 padding" />
  - <Describe name="paddingLeft: string | number" mean="左边距" desc="优先级大于 padding" />
  - <Describe name="paddingRight: string | number" mean="右边距" desc="优先级大于 padding" />

## 关于绘制边框

<Exhibition>
  <template v-slot:code>
    <grid-blocks1 />
  </template>
  <template v-slot:text>
    <li>第一个橘色的 block 的宽高等于200px，等于父容器的宽高</li>
    <li>第二个红色的 block：宽180px 高140px，因为第一个 block 的<code>padding</code>上下分别挤出10px, 左右分别挤出30px</li>
    <li>第三个白色的 block：宽80px 高120px，因为第二个 block 的<code>paddingRight</code>覆盖了<code>padding</code>的10px</li>
    <li>最后白色 block 挤出的部分就是奖品区域了</li>
  </template>
</Exhibition>

<RecoDemo :collapse="true">
  <template slot="code-vue">
    <<< @/.vuepress/components/grid/blocks1.vue
  </template>
</RecoDemo>
