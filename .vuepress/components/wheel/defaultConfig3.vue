<template>
  <div>
    <LuckyWheel
      style="width: 200px; height: 200px"
      ref="LuckyWheel"
      :blocks="blocks"
      :prizes="prizes"
      :buttons="buttons"
      :default-config="defaultConfig"
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
      blocks: [{ padding: '10px', background: '#d64737' }],
      prizes: [
        { background: '#f9e3bb', fonts: [{ text: '0', top: 5 }] },
        { background: '#f9e3bb', fonts: [{ text: '1', top: 5 }] },
        { background: '#f9e3bb', fonts: [{ text: '2', top: 5 }] },
        { background: '#f9e3bb', fonts: [{ text: '3', top: 5 }] },
        { background: '#f9e3bb', fonts: [{ text: '4', top: 5 }] },
        { background: '#f9e3bb', fonts: [{ text: '5', top: 5 }] },
      ],
      buttons: [
        { radius: '35px', background: '#d64737' },
        { radius: '30px', background: '#f6c66f', pointer: true },
        {
          radius: '25px',
          background: '#ffdea0',
          fonts: [{ text: '开始', top: '-13px' }]
        }
      ],
      defaultConfig: {
        gutter: '5px',
        fontColor: '#d64737',
      }
    }
  },
  methods: {
    startCallBack () {
      this.$refs.LuckyWheel.play()
      this.currStatus = 1
      setTimeout(_ => {

        this.currStatus = 2
      }, 2500)
      // 假设接口的请求速度是5s
      setTimeout(_ => {
        this.$refs.LuckyWheel.stop(Math.random() * 8 >> 0)
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
