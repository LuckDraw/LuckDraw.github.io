<template>
  <LuckyGrid
    style="width: 200px; height: 200px"
    rows="2"
    cols="2"
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
          fonts: [{ text: '0号格子', fontSize: '20px', top: 0 }],
        },
        {
          x: 1, y: 0,
          fonts: [{ text: '1号格子', fontSize: '20px', top: '100%' }],
        },
        {
          x: 0, y: 1,
          borderRadius: Infinity,
          background: 'pink',
          fonts: [{ text: '2号格子', fontSize: '20px', top: '20%' }],
        }
      ],
    }
  }
}
</script>
