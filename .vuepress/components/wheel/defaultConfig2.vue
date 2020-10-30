<template>
  <LuckyWheel
    style="width: 200px; height: 200px"
    :blocks="blocks"
    :prizes="prizes"
    :buttons="buttons"
    :default-config="defaultConfig"
  />
</template>

<script>
export default {
  data () {
    return {
      blocks: [{ padding: '10px', background: '#d64737' }],
      prizes: [
        { background: '#f8d384', fonts: [{ text: '0', top: 5 }] },
        { background: '#f9e3bb', fonts: [{ text: '1', top: 5 }] },
        { background: '#f8d384', fonts: [{ text: '2', top: 5 }] },
        { background: '#f9e3bb', fonts: [{ text: '3', top: 5 }] },
        { background: '#f8d384', fonts: [{ text: '4', top: 5 }] },
        { background: '#f9e3bb', fonts: [{ text: '5', top: 5 }] },
      ],
      buttons: [
        { radius: '35px', background: '#d64737' },
        { radius: '30px', background: '#f6c66f', pointer: true },
        { radius: '25px', background: '#ffdea0' }
      ],
      defaultConfig: {
        gutter: '5px',
        offsetDegree: 30
      }
    }
  }
}
</script>
