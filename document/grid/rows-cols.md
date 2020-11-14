---
title: 格子布局 - rows & cols
sidebar: 'auto'
---


> 你可以把整个抽奖插件想象成一个`cols * rows`的 table 表格，默认情况下`cols`和`rows`都等于 3, 也就是`3 * 3 = 九宫格布局`

- <Describe name="rows?: string | number" mean="设置布局有几行" desc="默认为 3" />
- <Describe name="cols?: string | number" mean="设置布局有几列" desc="默认为 3" />

## 如果我有十个奖品

<Exhibition>
  <template v-slot:code>
    <grid-rows-cols1 />
  </template>
  <template v-slot:text>
    <li>设置<code>rows=3, col=4</code>即三行四列，也就意味着奖品格子<code>x</code>的范围就是0~3，<code>y</code>的范围就是0~2</li>
    <li>然后我通过计算<code>padding</code>和<code>gutter</code>使得奖品格子变成我想要的正方形</li>
    <li>最后设置抽奖按钮<code>col=2</code>使其占两个格子，但是需要注意的是<code>index</code>的排列顺序, 决定了中奖标识的游走顺序</li>
  </template>
</Exhibition>

<RecoDemo :collapse="true">
  <template slot="code-web">
    <<< @/.vuepress/components/grid/rows-cols1.html
  </template>
  <template slot="code-vue">
    <<< @/.vuepress/components/grid/rows-cols1.vue
  </template>
</RecoDemo>
