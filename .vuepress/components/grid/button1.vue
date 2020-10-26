<template>
  <LuckyGrid
    style="width: 200px; height: 200px"
    :blocks="[{ padding: '5px', background: '#ff4a4c', borderRadius: 10 }]"
    :button="{
      x: 1, y: 1, borderRadius: 10,
      imgs: [{
        src: $withBase('/img/button.png'),
        width: '75%',
        top: '20%'
      }]
    }"
  />
</template>
