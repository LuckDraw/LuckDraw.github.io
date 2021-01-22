<template>
  <LuckyGrid
    width="200px"
    height="200px"
    :blocks="blocks"
    :buttons="buttons"
  />
</template>

<script>
export default {
  data () {
    return {
      blocks: [{ padding: '5px', background: '#ff4a4c', borderRadius: 10 }],
      buttons: [{
        x: 1, y: 1, borderRadius: 10,
        imgs: [{
          src: require('../examples/img/button.png'),
          width: '75%',
          top: '20%'
        }]
      }],
    }
  }
}
</script>
