<template>
  <LuckyGrid
    ref="luckyGrid"
    width="300px"
    height="300px"
    :blocks="blocks"
    :prizes="prizes"
    :button="button"
    :defaultConfig="defaultConfig"
    :defaultStyle="defaultStyle"
    :activeStyle="activeStyle"
    @start="startCallBack"
    @end="endCallBack"
  ></LuckyGrid>
</template>

<script>
export default {
  data () {
    return {
      blocks: [
        { padding: '3px', background: '#92c53a', borderRadius: '8px' },
        { padding: '2px', background: '#bdd333', borderRadius: '8px' },
        { padding: '7px', background: '#0D6630', borderRadius: '8px' },
      ],
      prizes: [
        {
          x: 0, y: 0,
          fonts: [{ text: '谢谢参与', top: '68%' }],
          imgs: [{ src: require('./img/xdf/0.png'), width: '50%', top: '12%' }],
        },
        {
          x: 1, y: 0,
          fonts: [{ text: '1个星球币', top: '68%' }],
          imgs: [{ src: require('./img/xdf/1.png'), width: '50%', top: '12%' }],
        },
        {
          x: 2, y: 0,
          fonts: [{ text: '5个星球币', top: '68%' }],
          imgs: [{ src: require('./img/xdf/1.png'), width: '50%', top: '12%' }],
        },
        {
          x: 2, y: 1,
          fonts: [{ text: '10个星球币', top: '68%' }],
          imgs: [{ src: require('./img/xdf/1.png'), width: '50%', top: '12%' }],
        },
        {
          x: 2, y: 2,
          fonts: [{ text: '谢谢参与', top: '68%' }],
          imgs: [{ src: require('./img/xdf/0.png'), width: '50%', top: '12%' }],
        },
        {
          x: 1, y: 2,
          fonts: [{ text: '1个星球币', top: '68%' }],
          imgs: [{ src: require('./img/xdf/1.png'), width: '50%', top: '12%' }],
        },
        {
          x: 0, y: 2,
          fonts: [{ text: '5个星球币', top: '68%' }],
          imgs: [{ src: require('./img/xdf/1.png'), width: '50%', top: '12%' }],
        },
        {
          x: 0, y: 1,
          fonts: [{ text: '10个星球币', top: '68%' }],
          imgs: [{ src: require('./img/xdf/1.png'), width: '50%', top: '12%' }],
        },
      ],
      button: {
        x: 1, y: 1,
        imgs: [{ src: require('./img/xdf/button.png'), width: '100%', height: '100%' }]
      },
      defaultConfig: {
        gutter: 8
      },
      defaultStyle: {
        background: '#f4f7cc',
        borderRadius: '13px',
        fontColor: '#d55a07',
        fontSize: '11px',
        shadow: '0 9 0.1 #E9E967',
      },
      activeStyle: {
        background: '#e9e967',
        shadow: '0 9 0.1 #E1E13B',
      }
    }
  },
  methods: {
    startCallBack () {
      this.$refs.luckyGrid.play()
      setTimeout(() => {
        this.$refs.luckyGrid.stop(Math.random() * 8 >> 0)
      }, 3000)
    },
    endCallBack (prize) {
      console.log(prize)
    },
  },
}
</script>
