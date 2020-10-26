<template>
  <LuckyWheel
    style="width: 200px; height: 200px"
    :blocks="[
      { padding: '10px', background: '#d64737' },
    ]"
    :prizes="[
      { imgs: [{ src: $withBase('/img/1.png') }], background: '#f8d384' },
      { imgs: [{ src: $withBase('/img/1.png'), width: '30%' }], background: '#f9e3bb' },
      { imgs: [{ src: $withBase('/img/1.png'), width: '40%', height: '50%' }] }
    ]"
  />
</template>
