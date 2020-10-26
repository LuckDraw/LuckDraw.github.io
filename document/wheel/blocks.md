---
title: 边框 - blocks
sidebar: 'auto'
---

> 为了使得大转盘始终是一个圆，所以这里不支持`paddingLeft`、`paddingRight`、`paddingTop`、`paddingBottom`等属性

- <Describe name="blocks?: Array<object>" mean="" />
  - <Describe name="padding: string" mean="内边距" desc="边框必须是等宽的, 所以 padding 只能输入一个值" :isRequire="true" />
  - <Describe name="background: string" mean="背景颜色" desc="可填写16进制颜色哈希值或 rgba" :isRequire="true" />

## 关于绘制边框

<Exhibition>
  <template v-slot:code>
    <wheel-block1 />
  </template>
  <template v-slot:text>
    <li>第一个橘色的 block 的直径等于200px，等于父容器的宽</li>
    <li>第二个红色的 block：直径等于180px，因为第一个 block 的<code>padding</code>上下左右同时挤出10px</li>
    <li>第三个白色的 block：直径等于160px，因为第二个 block 的<code>padding</code>同样也挤出10px</li>
    <li>最后白色 block 挤出的部分就是奖品区域了</li>
  </template>
</Exhibition>

<RecoDemo :collapse="true">
  <template slot="code-vue">
    <<< @/.vuepress/components/wheel/block1.vue
  </template>
</RecoDemo>
