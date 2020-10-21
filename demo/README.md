

<Empty />
<Demo />

### 演示 Demo

> 点击可抽奖, 也欢迎各位小伙伴贡献好看的demo

<div class="ldq-card">
  <demo-ymc-wheel />
</div>

```vue
<template>
  <LuckyWheel
    style="width: 310px; height: 310px"
    ref="LuckyWheel"
    :prizes="prizes"
    :default-style="defaultStyle"
    :blocks="blocks"
    :buttons="buttons"
    @start="startCallBack"
    @end="endCallBack"
  />
</template>

<script>
export default {
  data () {
    return {
      prizes: [],
      defaultStyle: {
        fontColor: '#d64737',
        fontSize: '14px'
      },
      blocks: [
        { padding: '13px', background: '#d64737' }
      ],
      buttons: [
        { radius: '50px', background: '#d64737' },
        { radius: '45px', background: '#fff' },
        { radius: '41px', background: '#f6c66f', pointer: true },
        {
          radius: '35px', background: '#ffdea0',
          imgs: [{ src: require('./img/button.png'), width: '65%', top: '-13%' }]
        }
      ],
    }
  },
  mounted () {
    this.getPrizesList()
  },
  methods: {
    getPrizesList () {
      this.prizes = []
      let data = ['1元红包', '100元红包', '0.5元红包', '2元红包', '10元红包', '50元红包', '0.3元红包', '5元红包']
      data.forEach((item, index) => {
        this.prizes.push({
          title: item,
          background: index % 2 ? '#f9e3bb' : '#f8d384',
          fonts: [{ text: item, top: '8%' }],
          imgs:[{ src: require(`./img/${index}.png`), width: '30%', top: '25%' }],
        })
      })
    },
    startCallBack () {
      this.$refs.LuckyWheel.play()
      setTimeout(() => {
        this.$refs.LuckyWheel.stop(Math.random() * 8 >> 0)
      }, 3000)
    },
    endCallBack (prize) {
      alert(`恭喜你获得${prize.title}`)
    },
  }
}
</script>
```

<div class="ldq-card">
  <demo-yyjk-grid />
</div>

```vue
<template>
  <LuckyGrid
    style="width: 310px; height: 310px"
    ref="LuckDraw"
    :prizes="prizes"
    :button="btnConfig"
    :blocks="blocks"
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
      defaultStyle: {
        gutter: 5,
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
    btnConfig () {
      return {
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
      }
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
        this.prizes = []
        this.luckyNum = 1
        let axis = [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2], [1, 2], [0, 2], [0, 1]]
        for (let i = 0; i < 8; i++) {
          let item = data[i]
          this.prizes.push({
            index: i, x: axis[i][0], y: axis[i][1],
            fonts: [{ text: item.name, top: '72%' }],
            imgs: [{ src: item.img, width: '55%', top: '10%' }]
          })
        }
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
```


<div class="ldq-card">
  <demo-yx-grid />
</div>

```vue
<template>
  <LuckyGrid
    style="width: 310px; height: 330px"
    ref="LuckDraw"
    :prizes="prizes"
    :blocks="blocks"
    :button="button"
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
      prizes: [],
      blocks: [
        { padding: '1px', background: '#e2cea3', borderRadius: '13px' },
        { padding: '5px 0px', background: '#f3ecdc', borderRadius: '13px' },
        { padding: '1px', background: '#e2cea3', borderRadius: '8px' },
        { padding: '15px 10px', background: '#fffcf5', borderRadius: '8px' },
      ],
      button: {
        x: 1, y: 1, background: 'rgba(0, 0, 0, 0)',
        imgs: [
          { src: require('./img/yx/btn.png'), width: '90%', top: '5%' }
        ]
      },
      defaultStyle: {
        background: '#ffefd6',
        borderRadius: '5px',
        fontColor: '#755c28',
        fontSize: '10px',
        lineHeight: '12px'
      },
      activeStyle: {
        background: '#de7247',
        fontColor: '#ffefd6',
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
      let data = ['电热烘干毛巾架', '10元满减红包', '2积分', '胖喵焖烧罐', '5元满减红包', '多层置物架', '3元直减红包', '全场满99减10']
      axis.forEach((item, index) => {
        this.prizes.push({
          x: item[0], y: item[1],
          title: data[index],
          imgs: [{
            width: '100%',
            height: '100%',
            src: require(`./img/yx/default-${index}.png`),
            activeSrc: require(`./img/yx/active-${index}.png`)
          }]
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
```



<div class="ldq-card">
  <demo-cjl-wheel />
</div>

```vue
<template>
  <div class="box">
    <img :src="require('./img/cjl/bg.png')" width="100%" />
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
        radius: '30px',
        imgs: [{ src: require('./img/cjl/button.png'), width: '105%', top: '-45%' }]
      }],
      blocks: [
        { padding: '1px', background: '#fa3e3f' },
        { padding: '10px', background: '#f9d400' },
        { padding: '1px', background: '#e76f51' },
      ],
      defaultStyle: {
        fontColor: '#303133',
        fontSize: '10px',
        gutter: '1px'
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
        this.prizes.push({
          name: item.name,
          background: item.color,
          fonts: [{ text: item.name, top: '10%' }],
          imgs:[{ src: item.img, width: '30%', top: '28%' }],
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
    width: 270px;
    height: 270px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
  }
</style>
```


<div class="ldq-card">
  <demo-pdmm-wheel />
</div>

```vue
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
        imgs: [{ src: require('./img/pdmm/btn.png'), width: '102%', top: '-50%' }]
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
          imgs:[{ src: item.img, width: '30%', top: '24%' }],
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
    left: 49.1%;
    top: 48.3%;
    transform: translate(-50%, -50%)
  }
</style>
```


<div class="ldq-card">
  <demo-jq1-grid />
</div>

```vue
<template>
  <div class="box">
    <img v-if="flag" :src="require('./img/k1.png')" width="310" height="320" />
    <img v-else :src="require('./img/k2.png')" width="310" height="320" />
    <LuckyGrid
      class="luck-draw"
      ref="LuckDraw"
      :prizes="prizes"
      :button="button"
      :blocks="blocks"
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
      defaultStyle: {
        gutter: 10,
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
      }
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
```