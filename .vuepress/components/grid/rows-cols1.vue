<template>
  <LuckyGrid
    style="width: 265px; height: 200px"
    rows="3"
    cols="4"
    :demo="true"
    :blocks="blocks"
    :prizes="prizes"
    :button="button"
  />
</template>

<script>
export default {
  data () {
    return {
      blocks: [{ padding: '5px', background: '#ff4a4c', borderRadius: 10 }],
      prizes: [
        { x: 0, y: 0, fonts: [{ text: '0元', top: 20 }] },
        { x: 1, y: 0, fonts: [{ text: '1元', top: 20 }] },
        { x: 2, y: 0, fonts: [{ text: '2元', top: 20 }] },
        { x: 3, y: 0, fonts: [{ text: '3元', top: 20 }] },
        { x: 3, y: 1, fonts: [{ text: '4元', top: 20 }] },
        { x: 3, y: 2, fonts: [{ text: '5元', top: 20 }] },
        { x: 2, y: 2, fonts: [{ text: '6元', top: 20 }] },
        { x: 1, y: 2, fonts: [{ text: '7元', top: 20 }] },
        { x: 0, y: 2, fonts: [{ text: '8元', top: 20 }] },
        { x: 0, y: 1, fonts: [{ text: '9元', top: 20 }] }
      ],
      button: { x: 1, y: 1, col: 2, fonts: [{ text: '抽奖按钮', top: 20 }] },
    }
  }
}
</script>
