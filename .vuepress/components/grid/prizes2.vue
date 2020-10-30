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
        { x: 0, y: 0, fonts: [{ text: '这个格子会自动换行' }] },
        { x: 0, y: 1, fonts: [{ text: '这个格子\n是\n手动换行', wordWrap: false }] },
      ],
    }
  }
}
</script>
