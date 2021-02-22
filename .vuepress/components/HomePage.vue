<template>
  <article class="home-page-wrapper">
    <section class="main">
      <div>
        <img class="logo" :src="$withBase('/web.svg')" alt="logo" style="max-width: 18rem; height: 30%" />
        <h1 class="title">基于 Js / JQ / Vue / React / 微信小程序 / uni-app / Taro 的抽奖插件【大转盘 & 九宫格】</h1>
        <div class="plugin">
          <div>
            <img :src="$withBase('/start.svg')" alt="frameworks" width="70%" />
            <h1>自由化</h1>
            <p>奖品 / 文字 / 图片 / 颜色 / 按钮均可自由配置；支持同步 / 异步抽奖；中奖概率前端 / 后端可控；</p>
          </div>
          <div>
            <img :src="$withBase('/setup.svg')" alt="frameworks" width="70%" />
            <h1>多端适配</h1>
            <p>一个支持 Js / JQuery / Vue / React / uni-app / 微信小程序 的抽奖插件；</p>
          </div>
          <div>
            <img :src="$withBase('/style.svg')" alt="frameworks" width="70%" />
            <h1>响应式</h1>
            <p>自动根据设备 dpr 适配清晰度；并支持使用 百分比 / rem / rpx 属性来调整移动端布局；</p>
          </div>
        </div>
        <router-link class="btn-about phong-hide" to="/document/vue" style="margin-top: 1.5rem">快速开始</router-link>
      </div>
    </section>
    <section class="md-content-wrapper">
      <!-- <Content/> -->
    </section>
    <section class="wish">
      <div class="wish-inner">
        <div class="img-wrapper" style="max-width: 34rem;">
          <img :src="$withBase('/github.svg')" alt="developer" width="100%" />
        </div>
        <div class="text-wrapper">
          <h1>加入我们</h1>
          <li class="description"><b>贡献代码：</b>目前抽奖基于 Ts + Canvas 开发， Rollup 打包 Js 在不同框架上面扩展，如果你有熟悉的框架想进行扩展，请在底部寻找我的联系方式</li>
          <li class="description"><b>翻译文档：</b>目前也急需英语较好的同学来参与翻译文档的任务，所有贡献者都会展示在下面</li>
          <li class="description"><b>贡献Demo：</b>如果你们公司的抽奖设计图比较好看，也可以提供给我，同样也会展示在下面</li>
        </div>
      </div>
        <div class="text-wrapper stargazers">
          <h1 style="margin-top: -40px">贡献者</h1>
          <div>
            <span v-for="item in stargazers" :key="item.id" class="avatar-box">
              <a v-if="item.id" :href="item.html_url" target="_black">
                <img :src="item.avatar_url" :title="item.login" @error="e => imgError(e, item.id)" />
              </a>
              <img v-else :src="require('../public/avatar/add.svg')" />
            </span>
          </div>
        </div>
    </section>
    <section class="wish">
      <div class="wish-inner">
        <div class="text-wrapper">
          <h1>多端适配情况</h1>
          <table>
            <thead>
              <tr style="background: #fafafb">
                <td align="center">npm 包</td>
                <td align="center">支持的框架</td>
                <td align="center">最新版本</td>
                <td align="center">下载量（月）</td>
                <td align="center">Star</td>
              </tr>
            </thead>
            <tbody>
              <tr style="background: #ecf5ff">
                <td align="center"><a href="https://github.com/LuckDraw/lucky-canvas" target="_black">lucky-canvas</a></td>
                <td align="center">Js / JQuery</td>
                <td align="center"><img src="https://img.shields.io/npm/v/lucky-canvas?color=%23ffca28&logo=npm&style=flat-square" alt="version" /></td>
                <td align="center"><img src="https://img.shields.io/npm/dm/lucky-canvas?color=%237289da&logo=npm&style=flat-square" alt="downloads" /></td>
                <td align="center"><img src="https://img.shields.io/github/stars/luckdraw/lucky-canvas?color=%232DCE89&logo=github&style=flat-square" alt="stars" /></td>
              </tr>
              <tr style="background: #f0f9eb">
                <td align="center"><a href="https://github.com/LuckDraw/vue-luck-draw" target="_black">vue-luck-draw</a></td>
                <td align="center">Vue2.x / Vue3.x</td>
                <td align="center"><img src="https://img.shields.io/npm/v/vue-luck-draw?color=%23ffca28&logo=npm&style=flat-square" alt="version" /></td>
                <td align="center"><img src="https://img.shields.io/npm/dm/vue-luck-draw?color=%237289da&logo=npm&style=flat-square" alt="downloads" /></td>
                <td align="center"><img src="https://img.shields.io/github/stars/luckdraw/vue-luck-draw?color=%232DCE89&logo=github&style=flat-square" alt="stars" /></td>
              </tr>
              <tr style="background: #f0f9eb">
                <td align="center"><a href="https://github.com/LuckDraw/react-luck-draw" target="_black">react-luck-draw</a></td>
                <td align="center">React</td>
                <td align="center"><img src="https://img.shields.io/npm/v/react-luck-draw?color=%23ffca28&logo=npm&style=flat-square" alt="version" /></td>
                <td align="center"><img src="https://img.shields.io/npm/dm/react-luck-draw?color=%237289da&logo=npm&style=flat-square" alt="downloads" /></td>
                <td align="center"><img src="https://img.shields.io/github/stars/luckdraw/react-luck-draw?color=%232DCE89&logo=github&style=flat-square" alt="stars" /></td>
              </tr>
              <tr style="background: #fdf6ec">
                <td align="center"><a href="https://github.com/LuckDraw/uni-luck-draw" target="_black">uni-luck-draw</a></td>
                <td align="center">uni-app</td>
                <td align="center"><img src="https://img.shields.io/npm/v/uni-luck-draw?color=%23ffca28&logo=npm&style=flat-square" alt="version" /></td>
                <td align="center"><img src="https://img.shields.io/npm/dm/uni-luck-draw?color=%237289da&logo=npm&style=flat-square" alt="downloads" /></td>
                <td align="center"><img src="https://img.shields.io/github/stars/luckdraw/uni-luck-draw?color=%232DCE89&logo=github&style=flat-square" alt="stars" /></td>
              </tr>
              <tr style="background: #fdf6ec">
                <td align="center"><a href="https://github.com/LuckDraw/taro-luck-draw" target="_black">taro-luck-draw</a></td>
                <td align="center">Taro</td>
                <td align="center"><img src="https://img.shields.io/npm/v/taro-luck-draw?color=%23ffca28&logo=npm&style=flat-square" alt="version" /></td>
                <td align="center"><img src="https://img.shields.io/npm/dm/taro-luck-draw?color=%237289da&logo=npm&style=flat-square" alt="downloads" /></td>
                <td align="center"><img src="https://img.shields.io/github/stars/luckdraw/taro-luck-draw?color=%232DCE89&logo=github&style=flat-square" alt="stars" /></td>
              </tr>
              <tr style="background: #fdf6ec">
                <td align="center"><a href="https://github.com/LuckDraw/mini-luck-draw" target="_black">mini-luck-draw</a></td>
                <td align="center">原生微信小程序</td>
                <td align="center"><img src="https://img.shields.io/npm/v/mini-luck-draw?color=%23ffca28&logo=npm&style=flat-square" alt="version" /></td>
                <td align="center"><img src="https://img.shields.io/npm/dm/mini-luck-draw?color=%237289da&logo=npm&style=flat-square" alt="downloads" /></td>
                <td align="center"><img src="https://img.shields.io/github/stars/luckdraw/mini-luck-draw?color=%232DCE89&logo=github&style=flat-square" alt="stars" /></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
    <section class="wish">
      <div class="wish-inner">
        <div class="text-wrapper">
          <h1>问题 & 建议</h1>
          <li class="description">欢迎在 <a href="https://github.com/luckdraw" target="_black">Github</a> 上面的 Issues 提出你的疑惑，我会实时收到提醒，并在不忙的时候第一时间回复你</li>
        </div>
        <div class="img-wrapper">
          <img :src="$withBase('/issues.svg')" alt="devices" width="100%" />
        </div>
      </div>
    </section>
    <section class="footer">
      <p>
        <span>
          本插件完全免费，开源不易，<a href="https://github.com/luckdraw" target="_black">
            <b style="color: #ff7f00">如果您觉得好用可以点个 star 支持我</b>
            &ensp;<i class="iconfont reco-github"></i>
            Github
          </a>
        </span>
      </p>
      <p>
        <span>
          <i class="iconfont reco-wechat"></i>
          new_ldq
        </span>
        <!-- <span>
          <i class="iconfont reco-faq"></i>
          <a href="https://github.com/buuing/vue-luck-draw/issues">问题&建议</a>
        </span> -->
        <span>
          <i class="iconfont reco-copyright"></i>
          2019
          <a href="https://github.com/LuckDraw/vue-luck-draw/blob/master/LICENSE" target="_black">License BSD-3-Clause</a>
        </span>
      </p>
      <p>
        <span>
          <i class="iconfont reco-document"></i>
          <a href="https://github.com/vuejs/vuepress" target="_black">vuepress</a>
        </span>
        <span>
          <i class="iconfont reco-theme"></i>
          <a href="https://github.com/vuepress-reco/vuepress-theme-reco" target="_black">vuepress-theme-reco</a>
        </span>
        <span>
          <i class="iconfont reco-theme"></i>
          <a href="https://undraw.co" target="_black">undraw.co</a>
        </span>
      </p>
    </section>
  </article>
</template>

<script>
export default {
  data () {
    return {
      stargazers: []
    }
  },
  mounted () {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const res = JSON.parse(xhr.responseText)
        console.log(res)
        // 核心贡献者
        const sortData = [36689704, 26322785, 52775847, 26900681]
        const map = new Map()
        res.forEach(_ => map.set(_.id, _))
        const stargazers = []
        sortData.forEach(id => stargazers.push(map.get(id)))
        res.forEach(_ => !sortData.includes(_.id) && stargazers.push(_))
        stargazers.push(...new Array(3).fill({}))
        this.stargazers = stargazers
      }
    }
    xhr.open("GET", "https://api.github.com/users/luck-draw/following?per_page=100", true);
    xhr.send()
  },
  methods: {
    imgError (e, id) {
      let cache
      try {
        cache = require(`../public/avatar/${id}.jpg`)
      } catch {
        cache = require(`../public/avatar/error.svg`)
      }
      cache && (e.target.src = cache)
    }
  }
}
</script>

<style scoped>

</style>
