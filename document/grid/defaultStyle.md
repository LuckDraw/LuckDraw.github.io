---
title: 默认样式 - defaultStyle
sidebar: 'auto'
---

> 如果你觉得写一堆重复的数据很烦的话，那你可以在这里进行统一的管理，其中包括`奖品`和`抽奖按钮`，在没有配置的情况下都会继承这里的属性

- <Describe name="default-style?: object" mean="格子默认样式" />
  - <Describe name="borderRadius?: string | number" mean="格子圆角" desc="默认等于 20" />
  - <Describe name="fontColor?: string" mean="字体颜色" />
  - <Describe name="fontSize?: string" mean="字体大小(px)" desc="默认为 '18px'" />
  - <Describe name="fontStyle?: string" mean="字体样式" desc="默认为 'sans-serif'" />
  - <Describe name="fontWeight?: string" mean="字体粗细" desc="默认为 '400'" />
  - <Describe name="textAlign?: string" mean="文字和图片的对其方式" desc="目前只能居中!" />
  - <Describe name="background?: string" mean="格子的背景颜色" desc="默认是 '#fff' 白色" />
  - <Describe name="shadow?: string" mean="格子阴影" desc="由 4 个值组成：1.水平位置、2.垂直位置、3.模糊度、4.阴影颜色" />
  - <Describe name="wordWrap?: boolean" mean="文字自动换行" desc="默认为 true 开启，关闭时可以使用 \n 换行" />
  - <Describe name="lengthLimit?: string | number" mean="换行宽度限制" desc="格式为：90 | '90px' | '90%'，默认为 '90%'" />

## 关于默认样式

<Exhibition>
  <template v-slot:code>
    <grid-defaultStyle1 />
  </template>
  <template v-slot:text>
    <li><code>shadow</code>阴影会挤占格子本身的宽度或高度</li>
    <li><code>textAlign</code>对其方式目前只支持 center</li>
  </template>
</Exhibition>

<RecoDemo :collapse="true">
  <template slot="code-web">
    <<< @/.vuepress/components/grid/defaultStyle1.html
  </template>
  <template slot="code-vue">
    <<< @/.vuepress/components/grid/defaultStyle1.vue
  </template>
</RecoDemo>
