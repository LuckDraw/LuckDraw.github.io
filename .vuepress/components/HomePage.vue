<template>
  <article class="home-page-wrapper">
    <section class="main">
      <div>
        <img class="logo" :src="$withBase('/logo.png')" alt="logo" />
        <h1>幸运抽奖插件（大转盘 / 九宫格）</h1>
        <div class="desc" style="margin: -1rem">
          <Content/>
        </div>
        <router-link class="btn-about" to="/document/vue">快速开始</router-link>
      </div>
    </section>
    <section class="md-content-wrapper">
      <!-- <Content/> -->
    </section>
        <section class="wish">
      <div class="wish-inner">
        <div class="img-wrapper">
          <img src="../public/frameworks.svg" alt="frameworks" width="70%" >
        </div>
        <div class="text-wrapper">
          <h1>🎉支持多端框架</h1>
          <li class="description">目前支持原生 Js / Vue2.x / Vue3.x 中使用，后续还会新增其他框架，感谢支持，您的 star 就是对我最大的鼓励</li>
        </div>
      </div>
    </section>
    <section class="wish">
      <div class="wish-inner">
        <div class="text-wrapper">
          <h1>🎨可适配移动端</h1>
          <li class="description">抽奖插件会自动根据设备 dpr 调整清晰度，无需担心 canvas 出现绘制模糊的问题</li>
          <li class="description">并支持使用百分比或 rem 属性来调整移动端布局</li>
        </div>
        <div class="img-wrapper">
          <img src="../public/devices.svg" alt="devices" width="80%" >
        </div>
      </div>
    </section>
    <section class="wish">
      <div class="wish-inner">
        <div class="img-wrapper">
          <img src="../public/developer.svg" alt="developer" width="90%" >
        </div>
        <div class="text-wrapper">
          <h1>🚀问题与建议</h1>
          <li class="description">欢迎在 Github 上面的 Issues 提出你的疑惑，我会实时收到提醒，并在不忙的时候第一时间回复你</li>
        </div>
      </div>
    </section>
    <section class="wish">
      <div class="wish-inner">
        <div class="text-wrapper">
          <h1>🏅欢迎贡献代码</h1>
          <li class="description">目前抽奖插件基于 Ts 开发，并以此为基础在不同框架上面进行扩展，如果你有熟悉的框架想进行扩展，请在底部寻找我的联系方式</li>
          <li class="description">目前也急需英语较好的大佬来参与翻译文档的任务，我会在 README 里面展示所有的贡献者</li>
          <li class="description">如果你们公司设计的抽奖比较好看，也可以提供给我，我会放到演示页面里进行展示</li>
        </div>
        <div class="img-wrapper">
          <img src="../public/code.svg" alt="devices" width="100%" >
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
        <span>
          <i class="iconfont reco-faq"></i>
          <a href="https://github.com/buuing/vue-luck-draw/issues">问题&建议</a>
        </span>
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
    return {}
  },
}
</script>

<style scoped>
.footer-wrapper {
  display: none !important;
}
.home-page-wrapper {
  padding-top: 3.4rem;
}
.home-page-wrapper .logo {
  max-width: 12rem;
  width: 100%;
  display: block;
  margin: 0rem auto 1rem;
}
.home-page-wrapper section.main {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  height: calc(100vh - 3.4rem);
  overflow: hidden;
  text-align: center;
  background: url('/bg.svg') center/cover no-repeat;
}
.home-page-wrapper section.main h1 {
  margin: 1rem;
  font-size: 1.6rem;
  display: block;
}
.home-page-wrapper section.main p {
  font-size: 20px;
  margin-bottom: 2rem;
}
.home-page-wrapper section.main .btn-about {
  margin: 1rem 0;
  display: inline-block;
  padding: .6rem 1.2rem;
  border-radius: 0.25rem;
  background: #3eaf7c;
  color: #fff;
  font-size: 1rem;
}
.home-page-wrapper section.main .banner {
  display: block;
  width: 100%;
}
.home-page-wrapper .footer {
  border-top: 1px solid #f2f2f2;
  text-align: center;
  padding: 1.3rem 1rem;
}
.home-page-wrapper .footer span {
  color: #7f7f7f;
  font-weight: 600;
  padding: 0 0.5rem;
}
.home-page-wrapper .footer p {
  line-height: 1.5rem;
  margin: 10px 0;
}
.home-page-wrapper section.wish {
  overflow: hidden;
}
.home-page-wrapper section.wish .wish-inner {
  box-sizing: border-box;
  margin: 0 auto;
  padding: 2rem;
  max-width: 56rem;
  width: 100%;
  min-height: 25rem;
  display: flex;
  align-items: center;
}
.text-wrapper h1 {
  display: block;
}
.wish:nth-child(2n + 1) {
  background: #fafafb;
}
.wish-inner>div {
  flex: auto;
}
.wish-inner li {
  line-height: 26px;
  margin: 10px 0;
}
.wish-inner>div.img-wrapper {
  max-width: 22rem;
}
.wish-inner>div.img-wrapper img {
  display: block;
}
.wish-inner>div.text-wrapper {
  box-sizing: border-box;
  padding: 0 2rem;
}
@media (max-width: 719px) {
  .home-page-wrapper section {
    padding: 0 2rem;
  }
  .home-page-wrapper .logo {
    max-width: 10rem;
  }
  .home-page-wrapper section.main {
    /* height: 580px; */
  }
  .home-page-wrapper section.description h1 {
    margin-top: 5rem;
  }
  .home-page-wrapper section.description .btn-about {
    font-size: 0.9rem;
  }
  .home-page-wrapper section.md-content-wrapper {
    padding: 0;
  }
  .home-page-wrapper section.wish .wish-inner {
    display: block;
    padding: 2rem 0;
  }
  .home-page-wrapper section.wish .wish-inner .img-wrapper {
    margin: 0 auto;
  }
}
@media (max-width: 419px) {
  .home-page-wrapper section {
    padding: 0 2rem;
  }
  .home-page-wrapper section.main {
    /* height: 580px; */
  }
  .home-page-wrapper .logo {
    max-width: 10rem;
  }
  .home-page-wrapper section.description h1 {
    margin-top: 5rem;
  }
  .home-page-wrapper section.description .btn-about {
    font-size: 0.8rem;
  }
  .home-page-wrapper section.md-content-wrapper {
    padding: 0;
  }
  .home-page-wrapper section.wish .wish-inner {
    display: block;
    padding: 2rem 0;
  }
  .home-page-wrapper section.wish .wish-inner .img-wrapper {
    margin: 0 auto;
  }
}
</style>
