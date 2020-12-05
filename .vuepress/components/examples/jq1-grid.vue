<template>
  <div class="box">
    <img v-if="flag" :src="require('./img/k1.png')" width="310" height="320" />
    <img v-else :src="require('./img/k2.png')" width="310" height="320" />
    <LuckyGrid
      class="luck-draw"
      ref="LuckDraw"
      width="280px"
      height="280px"
      :prizes="prizes"
      :button="button"
      :blocks="blocks"
      :default-config="defaultConfig"
      :default-style="defaultStyle"
      :active-style="activeStyle"
      @start="startCallBack"
      @end="endCallBack"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      flag: true,
      prizes: [],
      button: {
        x: 1, y: 1,
        background: '#ff3a59',
        shadow: '0 5 0 #ea0125',
        fonts: [
          { text: '抽奖', fontColor: '#fff', top: '15%', fontSize: '30px' },
          { text: '消耗10积分', fontColor: '#fff', top: '65%', fontSize: '12px' },
        ],
      },
      blocks: [
        { padding: '10px', background: 'rgba(0, 0, 0, 0)', borderRadius: 10 },
      ],
      defaultConfig: {
        gutter: 10,
      },
      defaultStyle: {
        borderRadius: 8,
        fontColor: '#708abf',
        fontSize: '13px',
        textAlign: 'center',
        background: '#ffffff',
        shadow: '0 5 0 #9cd2ff',
        speed: 10,
      },
      activeStyle: {
        fontColor: '#fff',
        background: '#ff3a59',
        shadow: '0 5 0 #ea0125',
      },
    }
  },
  mounted () {
    this.getPrizeList()
    setInterval(_ => {
      this.flag = !this.flag
    }, 500)
  },
  methods: {
    getPrizeList () {
      // 模拟接口请求奖品列表
      setTimeout(() => {
        const data = [
          { name: '谢谢参与', img: require('./img/01.png') },
          { name: '红包', img: require('./img/02.png') },
          { name: '谢谢参与', img: require('./img/01.png') },
          { name: '红包', img: require('./img/02.png') },
          { name: '谢谢参与', img: require('./img/01.png') },
          { name: '红包', img: require('./img/02.png') },
          { name: '谢谢参与', img: require('./img/01.png') },
          { name: '红包', img: require('./img/02.png') }
        ]
        this.prizes = []
        let axis = [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2], [1, 2], [0, 2], [0, 1]]
        for (let i = 0; i < 8; i++) {
          let item = data[i]
          this.prizes.push({
            name: item.name,
            index: i, x: axis[i][0], y: axis[i][1],
            fonts: [{ text: item.name, top: '63%' }],
            imgs: [{ src: item.img, width: '50%', top: '13%' }]
          })
        }
      }, 0)
    },
    startCallBack () {
      this.$refs.LuckDraw.play()
      setTimeout(() => {
        this.$refs.LuckDraw.stop(Math.random() * 8 >> 0)
      }, 2000)
    },
    endCallBack (prize) {
      alert(`恭喜你获得大奖: ${prize.name}`)
    }
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
    width: 280px;
    height: 280px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
  }
</style>
