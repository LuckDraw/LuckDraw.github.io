<template>
  <LuckyGrid
    width="200px"
    height="200px"
    :demo="true"
    :blocks="blocks"
    :prizes="prizes"
    :button="button"
    :active-style="activeStyle"
  />
</template>

<script>
export default {
  data () {
    return {
      blocks: [{ padding: '5px', background: '#ff4a4c', borderRadius: 10 }],
      prizes: [
        { x: 0, y: 0, fonts: [{ text: '1元', top: '35%' }] },
        { x: 0, y: 1, fonts: [{ text: '4元', top: '35%' }] },
        { x: 1, y: 1, fonts: [{ text: '3元', top: '35%' }] },
        { x: 1, y: 0, fonts: [{ text: '2元', top: '35%' }] }
      ],
      button: { x: 2, y: 2, fonts: [{ text: '抽奖', top: '35%' }] },
      activeStyle: {
        fontColor: '#ff4a4c',
        background: 'pink',
        shadow: '0 5 1 #ebf1f4'
      },
    }
  }
}
</script>
