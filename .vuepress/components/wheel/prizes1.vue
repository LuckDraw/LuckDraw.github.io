<template>
  <LuckyWheel
    style="width: 200px; height: 200px"
    :blocks="[
      { padding: '10px', background: '#d64737' },
    ]"
    :prizes="[
      { fonts: [{ text: '0' }], background: '#f8d384' },
      { fonts: [{ text: '1', top: '20px' }], background: '#f9e3bb' },
      { fonts: [{ text: '2', top: '100%' }], background: '#fff' }
    ]"
  />
</template>
