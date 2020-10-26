<template>
  <LuckyWheel
    style="width: 200px; height: 200px"
    :blocks="[
      { padding: '10px', background: '#d64737' }
    ]"
    :prizes="[
      { background: '#f8d384' },
      { background: '#f9e3bb' },
      { background: '#f8d384' },
      { background: '#f9e3bb' },
      { background: '#f8d384' },
      { background: '#f9e3bb' },
    ]"
    :buttons="[
      { radius: '30px', background: 'rgba(0, 0, 0, 0.1)' }
    ]"
    :default-style="{
      gutter: '5px'
    }"
  />
</template>
