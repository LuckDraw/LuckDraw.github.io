---
title: 回调 & 方法
sidebar: 'auto'
---


- <Describe name="strat?: Function" mean="开始抽奖前" desc="当点击抽奖按钮时，触发该回调" />
- <Describe name="end?: Function" mean="抽奖结束后" desc="当九宫格完全停止时，触发该回调" />
- <Describe name="play()" mean="开始抽奖" desc="调用该方法时，游戏才会开始, 没有参数" />
- <Describe name="stop(index)" mean="缓慢停止抽奖" desc="调用该方法时，才会缓慢停止, 参数是中奖的索引" />

## 点击按钮开始抽奖

<Exhibition>
  <template v-slot:code>
    <examples-yyjk-grid />
  </template>
  <template v-slot:text>
    <p>正常的流程是：</p>
    <p>1. 当你点击抽奖按钮时触发<code>strat</code>回调函数，接下来你可以调用<code>play()</code>方法先让九宫格转起来，然后紧接着去请求接口拿数据，或是你自己随机一个index</p>
    <p>2. 当接口拿到<code>index</code>中奖索引之后，你就可以调用<code>stop(index)</code>方法了，此时九宫格会缓慢停止，当完全停止之后就会触发end回调函数</p>
    <p>3. 最后在<code>end</code>回调函数里面，得到中奖奖品的全部信息，你就可以在这里执行逻辑告诉用户他中奖了</p>
  </template>
</Exhibition>

<RecoDemo :collapse="true">
  <template slot="code-web">
    <<< @/.vuepress/components/examples/yyjk-grid.html
  </template>
  <template slot="code-vue">
    <<< @/.vuepress/components/examples/yyjk-grid.vue
  </template>
</RecoDemo>
