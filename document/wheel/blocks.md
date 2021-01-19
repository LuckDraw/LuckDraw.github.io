---
title: 边框 - blocks
sidebar: 'auto'
---

> 为了使得大转盘始终是一个圆，所以这里不支持`paddingLeft`、`paddingRight`、`paddingTop`、`paddingBottom`等属性

- <Describe name="blocks?: Array<object>" mean="" />
  - <Describe name="padding: string" mean="内边距" desc="边框必须是等宽的, 所以 padding 只能输入一个值" :isRequire="true" />
  - <Describe name="background: string" mean="背景颜色" desc="可填写16进制颜色哈希值或 rgba" :isRequire="true" />

  - <Describe name="imgs?: Array<object>" mean="图片列表 (新增)" />
    - <Describe name="src: string" mean="图片路径" :isRequire="true" />
    - <Describe name="top?: string | number" mean="距离顶部的高度" desc="可以写 20px 也可以是 20%，默认为 0" />
    - <Describe name="width?: string" mean="图片宽度" desc="关于图片宽高有四种可能" />
    - <Describe name="height?: string" mean="图片高度" desc="关于图片宽高有四种可能" />
    - <Describe name="rotate?: boolean" mean="是否跟随旋转" desc="默认为 false" />

1.宽高都未设置：则使用图片原大小；2.有宽度无高度：则高度随着宽度等比缩放；3.有高度无宽度：则宽度随着高度等比缩放；4.既有宽度也有高度：则图片宽高均等于设置的值（会被拉伸）

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
  <template slot="code-web">
    <<< @/.vuepress/components/wheel/block1.html
  </template>
  <template slot="code-vue">
    <<< @/.vuepress/components/wheel/block1.vue
  </template>
</RecoDemo>

## 关于背景图

<Exhibition>
  <template v-slot:code>
    <wheel-block2 />
  </template>
  <template v-slot:text>
    <li><code>rotate</code>用来控制背景图是否跟随旋转, 默认为 false 不旋转</li>
    <li>如果你的背景图里面就自带了奖品, 那你依然要控制好<code>prizes</code>的数量, 以及<code>defaultConfig.offsetDegree</code>, 因为我必须知道你有几个奖品才能准确的抽奖</li>
    <li>理论上来说, 你可以仅凭一张背景图和一个按钮图片完成抽奖需求</li>
  </template>
</Exhibition>

<RecoDemo :collapse="true">
  <template slot="code-vue">
    <<< @/.vuepress/components/wheel/block2.vue
  </template>
</RecoDemo>
