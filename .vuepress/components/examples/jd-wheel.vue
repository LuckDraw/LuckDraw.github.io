<template>
  <div class="box">
    <img :src="require('./img/jd/bg.png')" width="100%" />
    <img :src="require('./img/jd/btn.png')" class="pointer" />
    <LuckyWheel
      class="luck-draw"
      ref="LuckyWheel"
      :prizes="prizes"
      :buttons="buttons"
      :default-style="defaultStyle"
      :default-config="defaultConfig"
      @start="startCallBack"
      @end="endCallBack"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      prizes: [],
      buttons: [{
        radius: '40px',
        imgs: [
          { src: require('./img/jd/button.png'), width: '140%', top: '-135%' }
        ]
      }],
      defaultStyle: {
        fontColor: '#000',
        fontSize: '13px',
        fontStyle: 'SimHei',
      },
      defaultConfig: {
        offsetDegree: 22.5
      },
    }
  },
  mounted () {
    this.getPrizesList()
  },
  methods: {
    getPrizesList () {
      this.prizes = []
      let data = [
        { name: '10个京豆', img: require('./img/jd/1.png'), color: '#F8DEF8' },
        { name: '5个京豆', img: require('./img/jd/1.png'), color: '#FEF3FC' },
        { name: '1个京豆', img: require('./img/jd/1.png'), color: '#F8DEF8' },
        { name: '谢谢参与', img: require('./img/jd/0.png'), color: '#FEF3FC' },
        { name: '10个京豆', img: require('./img/jd/1.png'), color: '#F8DEF8' },
        { name: '5个京豆', img: require('./img/jd/1.png'), color: '#FEF3FC' },
        { name: '1个京豆', img: require('./img/jd/1.png'), color: '#F8DEF8' },
        { name: '谢谢参与', img: require('./img/jd/0.png'), color: '#FEF3FC' },
      ]
      data.forEach((item, index) => {
        this.prizes.push({
          name: item.name,
          background: item.color,
          fonts: [{ text: item.name, top: '12%' }],
          imgs:[{ src: item.img, width: '45%', top: '35%' }],
        })
      })
    },
    startCallBack () {
      this.$refs.LuckyWheel.play()
      setTimeout(() => {
        this.$refs.LuckyWheel.stop(Math.random() * 8 >> 0)
      }, 2000)
    },
    endCallBack (prize) {
      alert(`恭喜你获得${prize.name}`)
    },
  }
}
</script>

<style scoped>
  .box {
    position: relative;
    width: 350px;
    height: 350px;
  }
  .pointer {
    width: 38px;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    z-index: 999;
  }
  .luck-draw {
    width: 275px;
    height: 275px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
</style>
