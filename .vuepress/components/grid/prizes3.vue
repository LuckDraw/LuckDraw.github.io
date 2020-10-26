<template>
  <LuckyGrid
    style="width: 200px; height: 200px"
    rows="2"
    cols="2"
    :blocks="[{ padding: '5px', background: '#ff4a4c', borderRadius: 10 }]"
    :prizes="[
      {
        x: 0, y: 0,
        fonts: [{ text: '0号格子', top: '70%' }],
        imgs: [{ src: $withBase('/img/1.png'), width: '50%', top: '10%' }]
      },
      {
        x: 1, y: 0,
        fonts: [{ text: '1号格子', top: '5%' }],
        imgs: [{ src: $withBase('/img/1.png'), top: '20%' }]
      },
      {
        x: 0, y: 1,
        fonts: [{ text: '2号格子', top: '70%' }],
        imgs: [{ src: $withBase('/img/1.png'), width: '100%', height: '50%', top: 0 }]
      },
    ]"
  />
</template>
