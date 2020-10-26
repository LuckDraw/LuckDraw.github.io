<template>
  <div></div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  },
  mounted () {
    setTimeout(_ => {
      this.reChange()
      window.addEventListener('resize', this.reChange.bind(this))
    }, 0)
  },
  methods: {
    reChange () {
      Array.from(document.querySelectorAll('.ldq-demo')).forEach(item => {
        let padding = item.parentNode.style.paddingLeft.slice(0, -2) * 2
        let parentWidth = item.parentNode.offsetWidth - padding
        let parentHeight = item.parentNode.offsetHeight + padding / 2
        let currWidth = item.offsetWidth
        let currHeight = item.offsetHeight
        const info = `translate(
          ${-(currWidth - parentWidth) / 2}px,
          ${-(currHeight - parentWidth) / 2}px
        ) scale(${parentWidth / currWidth})`
        item.style.transform = info
        let newHeight = parentWidth + padding
        item.parentNode.style.height = newHeight + 'px'
      })
    }
  }
}
</script>
