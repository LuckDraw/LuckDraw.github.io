<template>
  <LuckyGrid
    width="200px"
    height="200px"
    :blocks="blocks"
  />
</template>

<script>
export default {
  data () {
    return {
      blocks: [
        { padding: '30px 10px', background: '#ffc27a' },
        { padding: '10px', paddingRight: '90px', background: '#ff4a4c' },
        { padding: '0px', background: '#fff' }
      ],
    }
  }
}
</script>
