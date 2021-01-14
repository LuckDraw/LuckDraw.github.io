<div class="home-page-wrapper" style="padding-top: 0">
  <section class="wish" style="background: #fff">
    <div class="wish-inner">
      <div class="text-wrapper">
        <h1>常见问题</h1>
        <li class="description">
          js / jQuery 相关问题：
          <a href="https://github.com/LuckDraw/lucky-canvas/issues" target="_black">
            点击前往
            <img src="https://img.shields.io/github/issues/luckdraw/lucky-canvas?style=social" style="vertical-align: text-bottom" />
          </a>
        </li>
        <li class="description">
          vue2.x / vue3.x 相关问题：
          <a href="https://github.com/LuckDraw/vue-luck-draw/issues" target="_black">
            点击前往
            <img src="https://img.shields.io/github/issues/luckdraw/vue-luck-draw?style=social" style="vertical-align: text-bottom" />
          </a>
        </li>
        <li class="description">
          uni-app 相关问题：
          <a href="https://github.com/LuckDraw/uni-luck-draw/issues" target="_black">
            点击前往
            <img src="https://img.shields.io/github/issues/luckdraw/uni-luck-draw?style=social" style="vertical-align: text-bottom" />
          </a>
        </li>
        <li class="description">
          微信小程序 相关问题：
          <a href="https://github.com/LuckDraw/mini-luck-draw/issues" target="_black">
            点击前往
            <img src="https://img.shields.io/github/issues/luckdraw/mini-luck-draw?style=social" style="vertical-align: text-bottom" />
          </a>
        </li>
        <p>如果下面的答案无法解答你的疑惑, 请移步 Github 提问, 我会在同一时间收到微信提醒并前往查看</p>
      </div>
      <div class="img-wrapper">
        <img :src="$withBase('/question.svg')" alt="devices" width="100%" />
      </div>
    </div>
  </section>
</div>

## 我怎么设置速度相关的属性啊?

在文档的`defaultConfig`下面, 你会看到一些配置项, 但是这些属性都是**微调**, 其中缓动函数目前是固定的`二次方加速`, 我会在后期提供更多可选函数

<br />

## 小程序下大转盘抽奖少于4个奖品的扇形绘制有问题?

是因为微信小程序里面的 `arcTo` API 在安卓手机下有`bug`, **并且这个`bug`早在18年就被微信团队确认了, 但是至今未修复**, 所以小程序里面的圆弧我只能使用`二次贝塞尔曲线`来代替

但是这样会导致绘制弧度过大时, 可以明显看出异常

- 微信开放社区 - Bug反馈: [https://developers.weixin.qq.com/community/develop/doc/00028ad6c08528461e6b3f23356000](https://developers.weixin.qq.com/community/develop/doc/00028ad6c08528461e6b3f23356000)

这个问题我也反馈过, 但是微信说这个问题已经被确认了, 让我不要重复提问.... ( 蛮搞笑的 )

<br />

## 原生微信小程序里面使用`require`加载本地图片不生效?

因为微信小程序使用`require`之后, 会自动在路径后面拼接一个`.js`, 我也很疑惑啊, 如果你有好的解决方案请加我微信`new_ldq`

<br />

## uni-app里面什么时候支持app以及其他小程序啊

首先`uni-app`我甚至都没做过项目, 所以兼容问题得慢慢来**要稳扎稳打**, 先把`H5`和`微信小程序`两个彻底搞定

如果你对此很熟悉, 那可以在`github`上面提交pr, 毕竟我一个人实在是精力有限

<br />
