<template>
  <div>
    <LuckyGrid
      style="width: 200px; height: 200px"
      ref="LuckyGrid"
      :blocks="blocks"
      :prizes="prizes"
      :button="button"
      @start="startCallBack"
      @end="endCallBack"
    />
    <div class="flex">
      <span :class="['list', currStatus === 1 && 'green']">加速</span>
      <span :class="['list', currStatus === 2 && 'yellow']">匀速</span>
      <span :class="['list', currStatus === 3 && 'red']">减速</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currStatus: 0,
      blocks: [{ padding: '5px', background: '#ff4a4c', borderRadius: 10 }],
      prizes: [
        { x: 0, y: 0, fonts: [{ text: '0', top: '35%' }] },
        { x: 1, y: 0, fonts: [{ text: '1', top: '35%' }] },
        { x: 2, y: 0, fonts: [{ text: '2', top: '35%' }] },
        { x: 2, y: 1, fonts: [{ text: '3', top: '35%' }] },
        { x: 2, y: 2, fonts: [{ text: '4', top: '35%' }] },
        { x: 1, y: 2, fonts: [{ text: '5', top: '35%' }] },
        { x: 0, y: 2, fonts: [{ text: '6', top: '35%' }] },
        { x: 0, y: 1, fonts: [{ text: '7', top: '35%' }] },
      ],
      button: { x: 1, y: 1, fonts: [{ text: '开始', top: '35%' }] },
    }
  },
  methods: {
    startCallBack () {
      this.$refs.LuckyGrid.play()
      this.currStatus = 1
      setTimeout(_ => {

        this.currStatus = 2
      }, 2500)
      // 假设接口的请求速度是5s
      setTimeout(_ => {
        this.$refs.LuckyGrid.stop(Math.random() * 8 >> 0)
        this.currStatus = 3
      }, 5000)
    },
    endCallBack () {
      this.currStatus = 0
    },
  }
}
</script>

<style scoped>
  .list:before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    background: #909399;
    border-radius: 50%;
    border: 2px solid #c8c9cc;
    margin-right: 3px;
  }
  .red {
    color: #f56c6c;
  }
  .red:before {
    background: #f56c6c;
    border: 2px solid #fab6b6;
  }
  .green {
    color: #67c23a;
  }
  .green:before {
    background: #67c23a;
    border: 2px solid #b3e19d;
  }
  .yellow {
    color: #ff9900;
  }
  .yellow:before {
    background: #ff9900;
    border: 2px solid #f3d19e;
  }
  .flex {
    font-weight: 500;
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
  }
</style>
