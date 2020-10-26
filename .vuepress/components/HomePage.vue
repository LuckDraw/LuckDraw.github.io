<template>
  <article class="home-page-wrapper">
    <section class="main">
      <div>
        <img class="logo" :src="$withBase('/logo.png')" alt="logo" />
        <h1>幸运抽奖插件（大转盘 / 九宫格）</h1>
        <div class="desc" style="margin: -2rem">
          <Content/>
        </div>
        <router-link class="btn-about" to="/">快速开始</router-link>
      </div>
    </section>
    <section class="md-content-wrapper">
      <!-- <Content/> -->
    </section>
    <section class="footer">
      <p>
        <span>本插件完全免费，不收任何费用，代码100%原创</span>
      </p>
      <p>
        <span>
          您的 star 就是对我最大的鼓励&ensp;
          <a href="https://github.com/buuing/vue-luck-draw" target="_black">
            <i class="iconfont reco-github"></i>
            Github
          </a>
        </span>
      </p>
      <p>
        <span>
          <i class="iconfont reco-account"></i>
          <a href="https://github.com/buuing" target="_black">ldq</a>
        </span>
        <span>
          <i class="iconfont reco-mail"></i>
          <a href="javascript:;">17778888138@189.cn</a>
        </span>
        <span>
          <i class="iconfont reco-copyright"></i>
          2019 License
          <a href="https://github.com/LuckDraw/vue-luck-draw/blob/master/LICENSE" target="_black">BSD-3-Clause</a>
        </span>
      </p>
      <p>
        <span>
          感谢
          <i class="iconfont reco-theme"></i>
          <a href="https://github.com/vuepress-reco/vuepress-theme-reco" target="_black">vuepress-theme-reco</a>
          提供的主题
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
  border-top: 1px solid #eaecef;
  text-align: center;
  padding: 1.3rem 1rem;
}
.home-page-wrapper .footer span {
  color: #7f7f7f;
  font-weight: 700;
  padding: 0 0.5rem;
}
.home-page-wrapper .footer p {
  line-height: 1rem;
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
