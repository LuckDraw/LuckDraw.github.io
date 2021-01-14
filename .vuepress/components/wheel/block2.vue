<template>
  <LuckyWheel
    ref="LuckyWheel"
    width="200px"
    height="200px"
    :blocks="blocks"
    :prizes="prizes"
    :buttons="buttons"
    :default-config="defaultConfig"
    @start="startCallBack"
  />
</template>

<script>
export default {
  data () {
    return {
      blocks: [{
         padding: '0px',
         background: 'rgba(0,0,0,0)',
         imgs: [{
           src: require('../examples/img/temp.png'),
           width: '100%',
           rotate: true
         }]
      }],
      prizes: [
        { fonts: [{ text: '0', top: '30%' }], background: 'rgba(0, 0, 0, 0)' },
        { fonts: [{ text: '1', top: '30%' }], background: 'rgba(0, 0, 0, 0)' },
        { fonts: [{ text: '2', top: '30%' }], background: 'rgba(0, 0, 0, 0)' },
        { fonts: [{ text: '3', top: '30%' }], background: 'rgba(0, 0, 0, 0)' },
        { fonts: [{ text: '4', top: '30%' }], background: 'rgba(0, 0, 0, 0)' },
        { fonts: [{ text: '5', top: '30%' }], background: 'rgba(0, 0, 0, 0)' },
        { fonts: [{ text: '6', top: '30%' }], background: 'rgba(0, 0, 0, 0)' },
        { fonts: [{ text: '7', top: '30%' }], background: 'rgba(0, 0, 0, 0)' },
      ],
      buttons: [{
        fonts: [{ text: '开始', top: -12 }],
        radius: '22%',
        background: '#fdfdfd',
        pointer: true
      }],
      defaultConfig: {
        offsetDegree: 22.5
      }
    }
  },
  methods: {
    startCallBack () {
      this.$refs.LuckyWheel.play()
      setTimeout(() => {
        this.$refs.LuckyWheel.stop(0)
      }, 1000)
    },
  }
}
</script>
