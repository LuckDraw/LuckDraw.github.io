<template>
  <div class="lucky-box">
    <img :src="require('./img/yyx/bg.png')" class="lucky-img" />
    <LuckyGrid
      class="lucky-canvas"
      ref="LuckDraw"
      width="300px"
      height="300px"
      :prizes="prizes"
      :blocks="blocks"
      :button="button"
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
      prizes: [],
      blocks: [
        { padding: '10px', background: 'rgba(0, 0, 0, 0)', borderRadius: '10px' },
      ],
      button: {
        x: 1, y: 1, background: 'rgba(0, 0, 0, 0)',
        fonts: [
          { text: '剩余次数:???次', fontColor: '#ca620d', top: '75%' }
        ],
        imgs: [
          { src: require('./img/yyx/btn.png'), width: '100%', top: '0' }
        ]
      },
      defaultStyle: {
        fontColor: '#AFFFD7',
        fontSize: '10px',
        lineHeight: '13px',
        wordWrap: false
      },
      activeStyle: {
        fontColor: '#fff',
      }
    }
  },
  mounted () {
    this.getPrizesList()
  },
  methods: {
    getPrizesList () {
      this.prizes = []
      let axis = [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2], [1, 2], [0, 2], [0, 1]]
      let data = [
        { name: 'steam游戏任选\n(限款)', img: require('./img/yyx/1.png'), top: '60%' },
        { name: '百元京东卡', img: require('./img/yyx/2.png'), top: '69%' },
        { name: '暴雪游戏30点数', img: require('./img/yyx/3.png'), top: '69%' },
        { name: '云币2888', img: require('./img/yyx/4.png'), top: '69%' },
        { name: '手游月卡', img: require('./img/yyx/5.png'), top: '69%' },
        { name: '连续3日\n手游时长+1h', img: require('./img/yyx/6.png'), top: '60%' },
        { name: '手游时长+30min', img: require('./img/yyx/6.png'), top: '69%' },
        { name: '端游时长+1h', img: require('./img/yyx/7.png'), top: '69%' },
      ]
      data.forEach((item, index) => {
        this.prizes.push({
          x: axis[index][0], y: axis[index][1],
          title: item.name,
          fonts: [{ text: item.name, top: item.top }],
          imgs: [
            {
              src: require('./img/yyx/cell.png'),
              activeSrc: require(`./img/yyx/active.png`),
              width: '100%',
              height: '100%',
            },
            {
              src: item.img,
              width: '70%',
              top: '3%'
            }
          ]
        })
      })
    },
    startCallBack () {
      this.$refs.LuckDraw.play()
      setTimeout(() => {
        this.$refs.LuckDraw.stop(Math.random() * 8 >> 0)
      }, 2000)
    },
    endCallBack (prize) {
      alert(`恭喜你获得大奖: ${prize.title}`)
    }
  }
}
</script>

<style scoped>
  .lucky-box {
    width: 300px;
    height: 300px;
    background: #132122;
    position: relative;
    border-radius: 8px;
    overflow: hidden;
  }
  .lucky-img {
    width: 100%;
    height: 100%;
  }
  .lucky-canvas {
    position: absolute;
    left: 0;
    top: 0;
  }
</style>
