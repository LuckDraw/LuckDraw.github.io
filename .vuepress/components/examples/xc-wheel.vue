<template>
  <LuckyWheel
    ref="LuckyWheel"
    width="300px"
    height="300px"
    :blocks="blocks"
    :prizes="prizes"
    :buttons="buttons"
    :defaultConfig="defaultConfig"
    @start="startCallBack"
    @end="endCallBack"
  />
</template>

<script>
export default {
  data () {
    return {
      prizes: [
        { name: '免费住酒店' },
        { name: '房型升级' },
        { name: '免费取消' },
        { name: '延迟退房' },
        { name: '免费早餐' },
        { name: '明天再来' },
      ],
      buttons: [{
        radius: '25%',
        fonts: [{ text: '开始\n抽奖', fontColor: '#fff', top: '-50%', fontSize: '16px' }],
        imgs: [{ src: require('./img/xc/btn.png'), width: '120%', top: '-175%' }]
      }],
      blocks: [
        { imgs: [{ src: require('./img/xc/bg.png'), width: '100%', rotate: true }] },
      ],
      defaultConfig: {
        offsetDegree: 30
      },
    }
  },
  methods: {
    startCallBack () {
      this.$refs.LuckyWheel.play()
      setTimeout(() => {
        this.$refs.LuckyWheel.stop(Math.random() * 6 >> 0)
      }, 3000)
    },
    endCallBack (prize) {
      alert(`恭喜你获得${prize.name}`)
    },
  }
}
</script>
