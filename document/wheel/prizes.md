---
title: 奖品 - prizes
sidebar: 'auto'
---

> 奖品列表是一个数组，转盘会根据奖品数量来分配扇形区域

- <Describe name="prizes?: Array<object>" mean="奖品列表" />

  - <Describe name="background?: string" mean="扇形背景色" desc="可继承 defaultStyle 背景色，默认为 '#fff'" />

  - <Describe name="fonts?: Array<object>" mean="文字列表" />
    - <Describe name="text: string" mean="字体内容" desc="可以使用 \n 用来换行" :isRequire="true" />
    - <Describe name="top?: string | number" mean="距离顶部的高度" desc="格式为：20 | '20px' | '20%'，默认为 0" />
    - <Describe name="fontColor?: string" mean="字体颜色" desc="可继承 defaultStyle 字体颜色，默认为 '#000'" />
    - <Describe name="fontSize?: string" mean="字体大小(px)" desc="可继承 defaultStyle 字体大小，默认为 '22px'" />
    - <Describe name="fontStyle?: string" mean="字体样式" desc="可继承 defaultStyle 字体样式，默认为 'sans-serif'" />
    - <Describe name="lineHeight?: string" mean="字体行高" desc="默认等于字体大小" />
    - <Describe name="wordWrap?: boolean" mean="文字自动换行" desc="默认为 true 开启，关闭时可以使用 \n 换行" />
    - <Describe name="lengthLimit?: string | number" mean="换行宽度限制" desc="格式为：90 | '90px' | '90%'，默认为 '90%'" />

  - <Describe name="imgs?: Array<object>" mean="图片列表" />
    - <Describe name="src: string" mean="图片路径" :isRequire="true" />
    - <Describe name="top?: string | number" mean="距离顶部的高度" desc="可以写 20px 也可以是 20%，默认为 0" />
    - <Describe name="width?: string" mean="图片宽度" desc="关于图片宽高有四种可能" />
    - <Describe name="height?: string" mean="图片高度" desc="关于图片宽高有四种可能" />

1.宽高都未设置：则使用图片原大小；2.有宽度无高度：则高度随着宽度等比缩放；3.有高度无宽度：则宽度随着高度等比缩放；4.既有宽度也有高度：则图片宽高均等于设置的值（会被拉伸）

## 关于设置奖品

<Exhibition>
  <template v-slot:code>
    <wheel-prizes1 />
  </template>
  <template v-slot:text>
    <li>奖品区域为扇形，会平分整个大转盘并以顺时针方向绘制，建议配置不同的背景色方便区分</li>
    <li>文字默认以扇形的中线居中，会自动随着扇形的旋转而旋转</li>
    <li>2号扇形的top为100%，所以他的文字超出了原本的区域</li>
  </template>
</Exhibition>

<RecoDemo :collapse="true">
  <template slot="code-vue">
    <<< @/.vuepress/components/wheel/prizes1.vue
  </template>
</RecoDemo>

## 关于奖品文字换行

<Exhibition>
  <template v-slot:code>
    <wheel-prizes2 />
  </template>
  <template v-slot:text>
    <li>由于奖品是一个扇形区域，顶部的圆弧宽度计算困难，建议搭配<code>top</code>属性向下挤一部分</li>
    <li><code>wordWrap</code>属性用来控制该段文字是否换行，默认为 true，但等于 false 时依然可以使用<code>\n</code>来换行</li>
    <li><code>lengthLimit</code>属性用来控制自动换行的最大宽度，默认为'90%'</li>
  </template>
</Exhibition>

<RecoDemo :collapse="true">
  <template slot="code-vue">
    <<< @/.vuepress/components/wheel/prizes2.vue
  </template>
</RecoDemo>

## 关于配置图片

<Exhibition>
  <template v-slot:code>
    <wheel-prizes3 />
  </template>
  <template v-slot:text>
    <li>图片跟文字一样，会默认以扇形的中线居中</li>
    <li>0号扇形的图片因为没有设置宽度或高度限制，所以他显示了图片的原本大小</li>
    <li>1号扇形的图片只设置了宽度，那高度就会随着宽度进行等比缩放</li>
    <li>2号扇形的图片同时设置了宽度和高度，所以他被拉伸了</li>
  </template>
</Exhibition>

<RecoDemo :collapse="true">
  <template slot="code-vue">
    <<< @/.vuepress/components/wheel/prizes3.vue
  </template>
</RecoDemo>
