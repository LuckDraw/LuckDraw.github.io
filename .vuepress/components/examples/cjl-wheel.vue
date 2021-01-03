<template>
  <div class="box">
    <img :src="require('./img/cjl/bg.png')" width="100%" />
    <LuckyWheel
      class="luck-draw"
      ref="LuckyWheel"
      width="270px"
      height="270px"
      :blocks="blocks"
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
        imgs: [{ src: require('./img/cjl/button.png'), width: '105%', top: '-180%' }]
      }],
      blocks: [
        { padding: '1px', background: '#fa3e3f' },
        { padding: '10px', background: '#f9d400' },
        { padding: '1px', background: '#e76f51' },
      ],
      defaultStyle: {
        fontColor: '#303133',
        fontSize: '10px',
      },
      defaultConfig: {
        gutter: '1px',
      },
    }
  },
  mounted () {
    this.getPrizesList()
  },
  methods: {
    getPrizesList () {
      const prizes = []
      let data = [
        { name: '谢谢参与', img: require('./img/cjl/00.png'), color: '#d7d7d7' },
        { name: '礼物', img: require('./img/cjl/01.png'), color: '#fef43e' },
        { name: '抽奖券', img: require('./img/cjl/02.png'), color: '#ef7683' },
        { name: '元宝', img: require('./img/cjl/03.png'), color: '#d7d7d7' },
        { name: '元宝', img: require('./img/cjl/04.png'), color: '#fef43e' },
        { name: '抽奖券', img: require('./img/cjl/02.png'), color: '#ef7683' },
        { name: '元宝', img: require('./img/cjl/06.png'), color: '#d7d7d7' },
        { name: '抽奖券', img: require('./img/cjl/02.png'), color: '#fef43e' },
      ]
      data.forEach((item, index) => {
        prizes.push({
          name: item.name,
          background: item.color,
          fonts: [{ text: item.name, top: '10%' }],
          imgs:[{ src: item.img, width: '30%', top: '35%' }],
        })
      })
      this.prizes = prizes
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
    width: 310px;
    height: 310px;
  }
  .luck-draw {
    width: 270px;
    height: 270px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
  }
</style>
