---
title: 奖品 - prizes
sidebar: 'auto'
---


> 奖品列表是一个数组，item里面有两个必须的参数：`x`、`y` 来控制这个格子的显示坐标

- <Describe name="prizes?: Array<object>" mean="奖品列表" />

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
    - <Describe name="fontWeight?: string" mean="字体粗细" desc="可继承 defaultStyle 字体粗细，默认为 '400'" />
    - <Describe name="lineHeight?: string" mean="字体行高" desc="默认使用字体样式中的字体大小" />
    - <Describe name="wordWrap?: boolean" mean="文字自动换行" desc="默认为 true 开启，关闭时可以使用 \n 换行" />
    - <Describe name="lengthLimit?: string | number" mean="换行宽度限制" desc="格式为：90 | '90px' | '90%'，默认为 '90%'" />

  - <Describe name="imgs?: Array<object>" mean="图片列表" />
    - <Describe name="src: string" mean="图片路径" :isRequire="true" />
    - <Describe name="activeSrc?: string" mean="图片路径" desc="当中奖标记处于当前格子时, 将替换显示图片" />
    - <Describe name="top?: string | number" mean="距离顶部的高度" desc="格式为：20 | '20px' | '20%'，默认为 0" />
    - <Describe name="width?: string" mean="图片宽度" desc="关于图片宽高有四种可能" />
    - <Describe name="height?: string" mean="图片高度" desc="关于图片宽高有四种可能" />

1.宽高都未设置：则使用图片原大小；2.有宽度无高度：则高度随着宽度等比缩放；3.有高度无宽度：则宽度随着高度等比缩放；4.既有宽度也有高度：则图片宽高均等于设置的值（会被拉伸）

## 关于配置格子

<Exhibition>
  <template v-slot:code>
    <grid-prizes1 />
  </template>
  <template v-slot:text>
    <li>格子的文字默认居中</li>
    <li>关于<code>x</code>和<code>y</code>：计算机的坐标系位于左上角</li>
    <li>关于<code>top</code>属性：你可以把格子想象成带有<code>绝对定位</code>, 由于1号格子的文字<code>top: '100%'</code>，所以文字会超出格子</li>
    <li>关于<code>background</code>属性：普通格子的背景色默认是<code>#fff</code>，但中奖标识会默认停在0号格子的位置，所以0号格子的背景色是橘黄色</li>
  </template>
</Exhibition>

<RecoDemo :collapse="true">
  <template slot="code-web">
    <<< @/.vuepress/components/grid/prizes1.html
  </template>
  <template slot="code-vue">
    <<< @/.vuepress/components/grid/prizes1.vue
  </template>
</RecoDemo>


## 关于文字自动换行

<Exhibition>
  <template v-slot:code>
    <grid-prizes2 />
  </template>
  <template v-slot:text>
    <li>默认情况下<code>wordWrap</code>等于 true ，格子中的文字开启自动换行，或者你也可以让它等于 false ，然后使用<code>\n</code>手动进行换行，该属性也会继承<code>defaultStyle</code>中的<code>wordWrap</code>，便于全局修改</li>
    <li><code>lengthLimit</code>属性用来控制自动换行的最大宽度，默认为'90%'</li>
  </template>
</Exhibition>

<RecoDemo :collapse="true">
  <template slot="code-web">
    <<< @/.vuepress/components/grid/prizes2.html
  </template>
  <template slot="code-vue">
    <<< @/.vuepress/components/grid/prizes2.vue
  </template>
</RecoDemo>


## 关于配置图片

<Exhibition>
  <template v-slot:code>
    <grid-prizes3 />
  </template>
  <template v-slot:text>
    <li>在<code>imgs</code>数组里配置，跟文字一样也是默认居中并可以引入多个</li>
    <li><code>width</code>和<code>height</code>属性可以设置：50 | '50px' | '50%'</li>
    <li>由于1号格子的图片没有设置宽或高，则会渲染图片的实际大小</li>
    <li>建议只设置<code>width</code>或<code>height</code>，这样可以实现等比缩放，不然会像2号格子那样导致图片被拉伸</li>
  </template>
</Exhibition>

<RecoDemo :collapse="true">
  <template slot="code-web">
    <<< @/.vuepress/components/grid/prizes3.html
  </template>
  <template slot="code-vue">
    <<< @/.vuepress/components/grid/prizes3.vue
  </template>
</RecoDemo>


## 关于 activeSrc 的妙用

<Exhibition>
  <template v-slot:code>
    <grid-prizes4 />
  </template>
  <template v-slot:text>
    <li>中奖标记游走时，对于当前格子内如果存在<code>activeSrc</code>属性，就会临时替换该图片，当中奖标记离开后，图片就会还原</li>
  </template>
</Exhibition>

<RecoDemo :collapse="true">
  <template slot="code-web">
    <<< @/.vuepress/components/grid/prizes4.html
  </template>
  <template slot="code-vue">
    <<< @/.vuepress/components/grid/prizes4.vue
  </template>
</RecoDemo>


## 使用 col 和 row 合并格子

<Exhibition>
  <template v-slot:code>
    <grid-prizes5 />
  </template>
  <template v-slot:text>
    <li>默认情况下<code>col</code>和<code>row</code>都等于1</li>
    <li>通过改变格子的<code>col</code>或<code>row</code>可以实现合并单元格的效果，但是你得提前计算好格子的坐标，以免两个格子互相压到</li>
  </template>
</Exhibition>

<RecoDemo :collapse="true">
  <template slot="code-web">
    <<< @/.vuepress/components/grid/prizes5.html
  </template>
  <template slot="code-vue">
    <<< @/.vuepress/components/grid/prizes5.vue
  </template>
</RecoDemo>
