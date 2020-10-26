---
title: 抽奖按钮 - button
sidebar: 'auto'
---


> 实际上`奖品格子`的属性与`按钮格子`的属性相差无几，但是有个区别：1.奖品有很多个所以是数组，而抽奖按钮只有一个所以是对象；

- <Describe name="button?: object" mean="抽奖按钮" />
  - <Describe name="x: number" mean="相对坐标x" desc="如果是标准的 3*3 宫格，那 x 的范围是 0 ~ 2" :isRequire="true" />
  - <Describe name="y: number" mean="相对坐标y" desc="如果是标准的 3*3 宫格，那 y 的范围是 0 ~ 2" :isRequire="true" />
  - <Describe name="col?: number" mean="横向合并格子" desc="用来横向合并单元格，默认为 1" />
  - <Describe name="row?: number" mean="纵向合并格子" desc="用来纵向合并单元格，默认为 1" />
  - <Describe name="borderRadius?: number" mean="格子圆角" desc="可继承 defaultStyle 圆角，默认为 20" />
  - <Describe name="shadow?: string" mean="格子阴影" desc="由 4 个值组成：1.水平位置、2.垂直位置、3.模糊度、4.阴影颜色" />
  - <Describe name="background?: string" mean="格子背景色" desc="可继承 defaultStyle 背景色，默认为 '#fff'" />

  - <Describe name="fonts?: Array<object>" mean="文字列表" />
    - <Describe name="text: string" mean="字体内容" desc="可以使用 \n 用来换行" :isRequire="true" />
    - <Describe name="top?: string | number" mean="距离顶部的高度" desc="格式为：20 | '20px' | '20%'，默认为 0" />
    - <Describe name="fontColor?: string" mean="字体颜色" />
    - <Describe name="fontSize?: string" mean="字体大小(px)" desc="可继承 defaultStyle 字体样式，默认为 '18px'" />
    - <Describe name="fontStyle?: string" mean="字体样式" desc="可继承 defaultStyle 字体样式，默认为 'sans-serif'" />
    - <Describe name="lineHeight?: string" mean="字体行高" desc="默认等于字体大小" />
    - <Describe name="wordWrap?: boolean" mean="文字自动换行" desc="默认为 true 开启，关闭时可以使用 \n 换行" />
    - <Describe name="lengthLimit?: string | number" mean="换行宽度限制" desc="格式为：90 | '90px' | '90%'，默认为 '90%'" />

  - <Describe name="imgs?: Array<object>" mean="图片列表" />
    - <Describe name="src: string" mean="图片路径" :isRequire="true" />
    - <Describe name="top?: string | number" mean="距离顶部的高度" desc="格式为：20 | '20px' | '20%'，默认为 0" />
    - <Describe name="width?: string" mean="图片宽度" desc="关于图片宽高有四种可能" />
    - <Describe name="height?: string" mean="图片高度" desc="关于图片宽高有四种可能" />

1.宽高都未设置：则使用图片原大小；2.有宽度无高度：则高度随着宽度等比缩放；3.有高度无宽度：则宽度随着高度等比缩放；4.既有宽度也有高度：则图片宽高均等于设置的值（会被拉伸）


## 关于配置按钮

<Exhibition>
  <template v-slot:code>
    <grid-button1 />
  </template>
  <template v-slot:text>
    <li>抽奖按钮和奖品格子配置基本一致</li>
    <li>但是抽奖按钮只能充当于一个<code>button</code>按钮的作用，帮助你触发<code>start</code>的回调，所以具体的抽奖逻得由你自己来实现</li>
    <li>实际上，你甚至可以选择不配置抽奖按钮，然后在外部自己用<code>dom</code>做一个抽奖按钮，然后调用<code>play</code>方法开始游戏也是可以的</li>
  </template>
</Exhibition>

<RecoDemo :collapse="true">
  <template slot="code-vue">
    <<< @/.vuepress/components/grid/button1.vue
  </template>
</RecoDemo>
