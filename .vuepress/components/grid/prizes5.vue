<template>
  <div>
    <!-- 左边3宫格 -->
    <LuckyGrid
      style="float: left"
      width="200px"
      height="200px"
      :blocks="blocks1"
      :prizes="prizes1"
    />
    <!-- 右边4宫格 -->
    <LuckyGrid
      style="float: left; margin-left: 10px"
      width="200px"
      height="200px"
      :blocks="blocks2"
      :prizes="prizes2"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      blocks1: [{ padding: '5px', background: '#ff4a4c', borderRadius: 10 }],
      prizes1: [
        { x: 0, y: 0, col: 3 },
        { x: 1, y: 1, col: 2, row: 2 },
        { x: 0, y: 1, row: 2 }
      ],
      blocks2: [{ padding: '5px', background: '#ff4a4c', borderRadius: 10 }],
      prizes2: [
        { x: 0, y: 0, col: 2 },
        { x: 2, y: 0, row: 2 },
        { x: 1, y: 2, col: 2 },
        { x: 0, y: 1, row: 2 }
      ],
    }
  }
}
</script>
