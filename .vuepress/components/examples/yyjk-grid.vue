<template>
  <LuckyGrid
    ref="LuckDraw"
    width="300px"
    height="300px"
    :prizes="prizes"
    :buttons="buttons"
    :blocks="blocks"
    :default-config="defaultConfig"
    :default-style="defaultStyle"
    :active-style="activeStyle"
    @start="startCallBack"
    @end="endCallBack"
  />
</template>

<script>
export default {
  data () {
    return {
      luckyNum: 0,
      prizes: [],
      blocks: [
        { padding: '15px', background: '#ffc27a', borderRadius: 28 },
        { padding: '4px', background: '#ff4a4c', borderRadius: 23 },
        { padding: '4px', background: '#ff625b', borderRadius: 20 },
      ],
      defaultConfig: {
        gutter: 5,
      },
      defaultStyle: {
        borderRadius: 15,
        fontColor: '#DF424B',
        fontSize: '14px',
        textAlign: 'center',
        background: '#fff',
        shadow: '0 5 1 #ebf1f4'
      },
      activeStyle: {
        background: 'linear-gradient(270deg, #FFDCB8, #FDC689)',
        shadow: ''
      },
    }
  },
  computed: {
    buttons () {
      return [{
        x: 1,
        y: 1,
        background: 'linear-gradient(270deg, #FFDCB8, #FDC689)',
        shadow: '0 5 1 #e89b4f',
        fonts: [
          { text: `${this.luckyNum} 次`, fontColor: '#fff', top: '73%', fontSize: '11px' },
        ],
        imgs: [
          { src: require('./img/button.png'), width: '65%', top: '13%' },
          { src: require('./img/btn.png'), width: '50%', top: '73%' }
        ]
      }]
    }
  },
  mounted () {
    this.getPrizeList()
  },
  methods: {
    getPrizeList () {
      // 模拟接口请求奖品列表
      setTimeout(() => {
        const data = [
          { name: '1元红包', img: require('./img/0.png') },
          { name: '100元红包', img: require('./img/1.png') },
          { name: '0.5元红包', img: require('./img/2.png') },
          { name: '2元红包', img: require('./img/3.png') },
          { name: '10元红包', img: require('./img/4.png') },
          { name: '50元红包', img: require('./img/5.png') },
          { name: '0.3元红包', img: require('./img/6.png') },
          { name: '5元红包', img: require('./img/7.png') }
        ]
        const prizes = []
        this.luckyNum = 1
        let axis = [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2], [1, 2], [0, 2], [0, 1]]
        for (let i = 0; i < 8; i++) {
          let item = data[i]
          prizes.push({
            index: i, x: axis[i][0], y: axis[i][1],
            fonts: [{ text: item.name, top: '70%' }],
            imgs: [{ src: item.img, width: '55%', top: '8%' }]
          })
        }
        this.prizes = prizes
      }, 0)
    },
    startCallBack () {
      if (!this.luckyNum) return alert('还剩0次抽奖机会')
      this.$refs.LuckDraw.play()
      setTimeout(() => {
        this.$refs.LuckDraw.stop(Math.random() * 7 >> 0)
      }, 2000)
    },
    endCallBack (prize) {
      alert(`恭喜你获得大奖: ${prize.fonts[0].text}`)
      this.luckyNum--
    }
  }
}
</script>
