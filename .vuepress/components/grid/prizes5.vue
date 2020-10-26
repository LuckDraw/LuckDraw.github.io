<template>
  <div>
    <!-- 左边3宫格 -->
    <LuckyGrid
      style="width: 200px; height: 200px; float: left"
      :blocks="[{ padding: '5px', background: '#ff4a4c', borderRadius: 10 }]"
      :prizes="[
        { x: 0, y: 0, col: 3 },
        { x: 1, y: 1, col: 2, row: 2 },
        { x: 0, y: 1, row: 2 }
      ]"
    />
    <!-- 右边4宫格 -->
    <LuckyGrid
      style="width: 200px; height: 200px; float: left; margin-left: 10px"
      :blocks="[{ padding: '5px', background: '#ff4a4c', borderRadius: 10 }]"
      :prizes="[
        { x: 0, y: 0, col: 2 },
        { x: 2, y: 0, row: 2 },
        { x: 1, y: 2, col: 2 },
        { x: 0, y: 1, row: 2 }
      ]"
    />
  </div>
</template>
