<template>
  <LuckyWheel
    width="200px"
    height="200px"
    :blocks="blocks"
    :prizes="prizes"
    :default-style="defaultStyle"
  />
</template>

<script>
export default {
  data () {
    return {
      blocks: [{ padding: '10px', background: '#d64737' }],
      prizes: [
        { fonts: [{ text: '0' }], background: '#f8d384' },
        { fonts: [{ text: '1' }] },
        { fonts: [{ text: '2' }], background: '#f8d384' },
        { fonts: [{ text: '3' }] },
        { fonts: [{ text: '4' }], background: '#f8d384' },
        { fonts: [{ text: '5' }] },
      ],
      defaultStyle: {
        fontColor: 'red',
        fontSize: '30px',
        background: 'pink'
      },
    }
  }
}
</script>
