<template>
  <LuckyWheel
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
      blocks: [
        { padding: '10px', background: '#d64737' },
        { padding: '0px', background: '#fff' },
      ],
      buttons: [
        { radius: '40px', background: '#d64737' },
        { radius: '35px', background: '#f6c66f', pointer: true },
        {
          radius: '30px',
          background: '#fff',
          fonts: [
            { text: '开始\n抽奖', top: '-20px' },
            { text: '这是按钮文字', top: '20px' }
          ]
        }
      ],
    }
  }
}
</script>
