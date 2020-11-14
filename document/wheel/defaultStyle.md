---
title: 默认样式 - defaultStyle
sidebar: 'auto'
---

> 如果你觉得写一堆重复的数据很烦的话，那你可以在这里进行统一的管理，其中包括`奖品`和`抽奖按钮`，在没有配置的情况下都会继承这里的属性

- <Describe name="default-style?: object" mean="格子默认样式" />
  - <Describe name="fontColor?: string" mean="字体颜色" desc="默认是 '#000' 黑色" />
  - <Describe name="fontSize?: string" mean="字体大小(px)" desc="默认是 '18px'" />
  - <Describe name="fontStyle?: string" mean="字体样式" desc="默认是 'sans-serif'" />
  - <Describe name="fontWeight?: string" mean="字体粗细" desc="默认为 '400'" />
  - <Describe name="lineHeight?: string" mean="字体行高" desc="默认等于字体大小" />
  - <Describe name="textAlign?: string" mean="文字和图片的对其方式" desc="目前只能居中!" />
  - <Describe name="background?: string" mean="奖品区域背景颜色" desc="默认是 '#fff' 白色" />
  - <Describe name="wordWrap?: boolean" mean="文字自动换行" desc="默认为 true 开启，关闭时可以使用 \n 换行" />
  - <Describe name="lengthLimit?: string | number" mean="换行宽度限制" desc="格式为：90 | '90px' | '90%'，默认为 '90%'" />

## 关于默认样式

<Exhibition>
  <template v-slot:code>
    <wheel-defaultStyle1 />
  </template>
  <template v-slot:text>
    <li><code>textAlign</code>对其方式目前只支持 center</li>
    <li><code>background</code>属性只有在奖品区域没有配置背景色时才会生效，但是按钮的背景色不会继承这里，而是显示透明色</li>
  </template>
</Exhibition>

<RecoDemo :collapse="true">
  <template slot="code-web">
    <<< @/.vuepress/components/wheel/defaultStyle1.html
  </template>
  <template slot="code-vue">
    <<< @/.vuepress/components/wheel/defaultStyle1.vue
  </template>
</RecoDemo>
