<template>
  <LuckyGrid
    style="width: 200px; height: 200px"
    rows="2"
    cols="2"
    :demo="true"
    :blocks="blocks"
    :prizes="prizes"
  />
</template>

<script>
export default {
  data () {
    return {
      blocks: [{ padding: '5px', background: '#ff4a4c', borderRadius: 10 }],
      prizes: [
        {
          x: 0, y: 0,
          imgs: [{
            width: '60%', top: '15%',
            src: require('../examples/img/1.png'),
            activeSrc: require('../examples/img/0.png')
          }]
        },
        {
          x: 1, y: 0,
          imgs: [{
            width: '60%', top: '15%',
            src: require('../examples/img/1.png'),
            activeSrc: require('../examples/img/0.png')
          }]
        },
        {
          x: 1, y: 1,
          imgs: [{
            width: '60%', top: '15%',
            src: require('../examples/img/1.png'),
            activeSrc: require('../examples/img/0.png')
          }]
        },
        {
          x: 0, y: 1,
          imgs: [{
            width: '60%', top: '15%',
            src: require('../examples/img/1.png'),
            activeSrc: require('../examples/img/0.png')
          }]
        },
      ],
    }
  }
}
</script>
