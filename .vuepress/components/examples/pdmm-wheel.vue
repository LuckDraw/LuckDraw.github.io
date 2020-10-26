<template>
  <div class="box">
    <img :src="require('./img/pdmm/bg.png')" width="100%" />
    <LuckyWheel
      class="luck-draw"
      ref="LuckyWheel"
      :default-style="defaultStyle"
      :blocks="blocks"
      :prizes="prizes"
      :buttons="buttons"
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
        radius: '45px',
        imgs: [{ src: require('./img/pdmm/btn.png'), width: '102%', top: '-127%' }]
      }],
      blocks: [
        { padding: '3px', background: '#a70c1b' },
        { padding: '6px', background: '#ffb633' },
      ],
      defaultStyle: {
        fontColor: '#a70c1b',
        fontSize: '10px',
      }
    }
  },
  mounted () {
    this.getPrizesList()
  },
  methods: {
    getPrizesList () {
      this.prizes = []
      let data = [
        { name: '谢谢参与', img: require('./img/pdmm/01.png') },
        { name: '红包', img: require('./img/pdmm/02.png') },
        { name: '抽奖次数+3', img: require('./img/pdmm/03.png') },
        { name: '礼物', img: require('./img/pdmm/04.png') },
        { name: '谢谢参与', img: require('./img/pdmm/01.png') },
        { name: '红包', img: require('./img/pdmm/02.png') },
        { name: '抽奖次数+3', img: require('./img/pdmm/03.png') },
        { name: '礼物', img: require('./img/pdmm/04.png') }
      ]
      data.forEach((item, index) => {
        this.prizes.push({
          name: item.name,
          background: index % 2 === 0 ? '#ffd099' : '#fff',
          fonts: [{ text: item.name, top: '8%' }],
          imgs:[{ src: item.img, width: '30%', top: '30%' }],
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
    width: 310px;
    height: 310px;
  }
  .luck-draw {
    width: 245px;
    height: 245px;
    position: absolute;
    left: 49%;
    top: 48%;
    transform: translate(-50%, -50%)
  }
</style>
