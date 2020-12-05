<template>
  <div class="box">
    <img :src="require('./img/food/bg.png')" width="310" height="310" />
    <LuckyGrid
      class="luck-draw"
      ref="LuckDraw"
      width="280px"
      height="280px"
      cols="4"
      rows="4"
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
      prizes: [],
      button: {
        x: 1, y: 1, col: 2, row: 2,
        background: 'rgba(0, 0, 0, 0)',
        fonts: [
          { text: '开始', fontSize: '42px', fontColor: '#1c258e', top: '25%' },
          { text: '- start -', fontSize: '12px', fontColor: '#1c258e', top: '65%' }
        ],
        imgs: [{ src: require('./img/food/btn.png'), width: '100%' }]
      },
      blocks: [
        { padding: '5px', background: 'rgba(0, 0, 0, 0)' },
      ],
      defaultConfig: {
        gutter: 10,
      },
      defaultStyle: {
        fontColor: '#fff',
        fontSize: '10px',
        background: 'rgba(0, 0, 0, 0)',
        speed: 15,
      },
      activeStyle: {
        fontColor: '#1c258e',
        background: 'rgba(0, 0, 0, 0)',
      },
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
          { name: '谢谢参与', img: require('./img/food/1.png') },
          { name: '米饭', img: require('./img/food/2.png') },
          { name: '排骨', img: require('./img/food/3.png') },
          { name: '谢谢参与', img: require('./img/food/1.png') },
          { name: '咖啡', img: require('./img/food/4.png') },
          { name: '卷心蛋糕', img: require('./img/food/5.png') },
          { name: '谢谢参与', img: require('./img/food/1.png') },
          { name: '热狗', img: require('./img/food/6.png') },
          { name: '草莓蛋糕', img: require('./img/food/7.png') },
          { name: '谢谢参与', img: require('./img/food/1.png') },
          { name: '零食', img: require('./img/food/8.png') },
          { name: '次数+3', img: require('./img/food/9.png') },
        ]
        this.prizes = []
        let axis = [[0, 0], [1, 0], [2, 0], [3, 0], [3, 1], [3, 2], [3, 3], [2, 3], [1, 3], [0, 3], [0, 2], [0, 1]]
        data.forEach((item, i) => {
          this.prizes.push({
            name: item.name,
            x: axis[i][0], y: axis[i][1],
            fonts: [{ text: item.name, top: '63%' }],
            imgs: [
              {
                src: require('./img/food/cell.png'),
                activeSrc: require('./img/food/btn.png'),
                width: '100%', height: '100%'
              },
              { src: item.img, width: '90%' }
            ]
          })
        })
      }, 0)
    },
    startCallBack () {
      this.$refs.LuckDraw.play()
      setTimeout(() => {
        this.$refs.LuckDraw.stop(Math.random() * 12 >> 0)
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
