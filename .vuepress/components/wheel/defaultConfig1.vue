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
        { background: '#f8d384' },
        { background: '#f9e3bb' },
        { background: '#f8d384' },
        { background: '#f9e3bb' },
        { background: '#f8d384' },
        { background: '#f9e3bb' },
      ],
      buttons: [{ radius: '30px', background: 'rgba(0, 0, 0, 0.1)' }],
      defaultConfig: { gutter: '5px' }
    }
  }
}
</script>
