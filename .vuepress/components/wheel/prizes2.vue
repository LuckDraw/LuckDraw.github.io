<template>
  <LuckyWheel
    width="200px"
    height="200px"
    :blocks="blocks"
    :prizes="prizes"
  />
</template>

<script>
export default {
  data () {
    return {
      blocks: [
        { padding: '10px', background: '#d64737' },
      ],
      prizes: [
        {
          fonts: [{ text: '当文字超长之后就会自动进行换行', top: 10, lengthLimit: '80%' }],
          background: '#f8d384'
        },
        {
          background: '#f9e3bb'
        },
        {
          fonts: [{ text: '这段字不会自动换行', top: 20, wordWrap: false }],
          background: '#f8d384'
        },
        {
          background: '#f9e3bb'
        }
      ],
    }
  }
}
</script>
