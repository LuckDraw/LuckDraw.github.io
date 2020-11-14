---
title: 抽奖按钮 - buttons
sidebar: 'auto'
---

- <Describe name="buttons?: Array<object>" mean="抽奖按钮列表" />

  - <Describe name="radius?: string" mean="按钮半径" desc="" />
  - <Describe name="pointer?: boolean" mean="是否显示指针" desc="默认为 false" />
  - <Describe name="background?: string" mean="按钮背景色" desc="可继承 defaultStyle 背景色，默认为 '#fff'" />

  - <Describe name="fonts?: Array<object>" mean="文字列表" />
    - <Describe name="text: string" mean="字体内容" desc="可以使用 \n 用来换行" :isRequire="true" />
    - <Describe name="top?: string | number" mean="距离顶部的高度" desc="格式为：20 | '20px' | '20%'，默认为 0" />
    - <Describe name="fontColor?: string" mean="字体颜色" desc="可继承 defaultStyle 字体颜色，默认为 '#000'" />
    - <Describe name="fontSize?: string" mean="字体大小(px)" desc="可继承 defaultStyle 字体大小，默认为 '22px'" />
    - <Describe name="fontStyle?: string" mean="字体样式" desc="可继承 defaultStyle 字体样式，默认为 'sans-serif'" />
    - <Describe name="fontWeight?: string" mean="字体粗细" desc="可继承 defaultStyle 字体粗细，默认为 '400'" />
    - <Describe name="lineHeight?: string" mean="字体行高" desc="默认等于字体大小" />

  - <Describe name="imgs?: Array<object>" mean="图片列表" />
    - <Describe name="src: string" mean="图片路径" :isRequire="true" />
    - <Describe name="top?: string | number" mean="离圆心的距离" desc="格式为：20 | '20px' | '20%'，默认为 0" />
    - <Describe name="width?: string" mean="图片宽度" desc="关于图片宽高有四种可能" />
    - <Describe name="height?: string" mean="图片高度" desc="关于图片宽高有四种可能" />

1.宽高都未设置：则使用图片原大小；2.有宽度无高度：则高度随着宽度等比缩放；3.有高度无宽度：则宽度随着高度等比缩放；4.既有宽度也有高度：则图片宽高均等于设置的值（会被拉伸）

## 关于配置按钮

<Exhibition>
  <template v-slot:code>
    <wheel-buttons1 />
  </template>
  <template v-slot:text>
    <li><code>buttons</code>的绘制顺序为从上到下，所以要注意半径的大小，以免下面的按钮过大，把后面的按钮覆盖掉</li>
    <li><code>pointer</code>属性控制 item 是否显示指针，如果你想要一个炫酷的指针，那你可以通过引入 img 的方式来实现</li>
    <li>我通常建议你在最后一个按钮里面绘制文字或图片，来避免被覆盖掉</li>
  </template>
</Exhibition>

<RecoDemo :collapse="true">
  <template slot="code-web">
    <<< @/.vuepress/components/wheel/buttons1.html
  </template>
  <template slot="code-vue">
    <<< @/.vuepress/components/wheel/buttons1.vue
  </template>
</RecoDemo>

## 关于按钮文字换行

<Exhibition>
  <template v-slot:code>
    <wheel-buttons2 />
  </template>
  <template v-slot:text>
    <li>按钮文字不会自动换行，没有<code>wordWrap</code>和<code>lengthLimit</code>属性</li>
    <li>如果文字超出了按钮区域，你可以使用<code>\n</code>进行手动换行</li>
  </template>
</Exhibition>

<RecoDemo :collapse="true">
  <template slot="code-web">
    <<< @/.vuepress/components/wheel/buttons2.html
  </template>
  <template slot="code-vue">
    <<< @/.vuepress/components/wheel/buttons2.vue
  </template>
</RecoDemo>
