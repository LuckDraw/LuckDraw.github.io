<template>
  <LuckyGrid
    width="300px"
    height="300px"
    :blocks="blocks"
    :prizes="prizes"
    :button="button"
    :defaultStyle="defaultStyle"
    :activeStyle="activeStyle"
  />
</template>

<script>
export default {
  data () {
    return {
      blocks: [
        { padding: '1px', background: '#116fff', borderRadius: 5 },
        { padding: '6px', background: '#94c1ff', borderRadius: 5 },
        { padding: '1px', background: '#116fff', borderRadius: 5 },
        { padding: '5px', background: '#5c9eff', borderRadius: 5 },
      ],
      prizes: [],
      button: {
        x: 1, y: 1,
        background: '#94c1ff'
      },
      defaultStyle: {
        borderRadius: '5px',
        fontColor: '#116fff',
        fontSize: '16px',
        background: '#fff',
      },
      activeStyle: {
        background: '#d7e9ff',
      }
    }
  },
  mounted () {
    this.get()
  },
  methods: {
    get () {
      this.prizes = []
      const axis = [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2], [1, 2], [0, 2], [0, 1]]
      axis.forEach((item, index) => {
        this.prizes.push({
          x: item[0], y: item[1],
          fonts: [{ text: index, top: '70%' }]
        })
      })
    }
  }
}
</script>
