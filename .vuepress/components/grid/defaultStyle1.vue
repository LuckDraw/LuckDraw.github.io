<template>
  <LuckyGrid
    width="200px"
    height="200px"
    rows="2"
    cols="2"
    :demo="true"
    :blocks="blocks"
    :prizes="prizes"
    :button="button"
    :default-style="defaultStyle"
  />
</template>

<script>
export default {
  data () {
    return {
      blocks: [{ padding: '5px', background: '#ff4a4c', borderRadius: 10 }],
      prizes: [
        { x: 0, y: 0, fonts: [{ text: '0元', top: '35%' }] },
        { x: 1, y: 0, fonts: [{ text: '1元', top: '35%' }] },
        { x: 0, y: 1, fonts: [{ text: '2元', top: '35%' }] }
      ],
      button: { x: 1, y: 1, fonts: [{ text: '抽奖', top: '35%' }] },
      defaultStyle: {
        borderRadius: 8,
        fontColor: '#DF424B',
        fontSize: '22px',
        fontStyle: 'sans-serif',
        textAlign: 'center',
        background: 'pink',
        shadow: '0 5 1 #ebf1f4'
      },
    }
  }
}
</script>
