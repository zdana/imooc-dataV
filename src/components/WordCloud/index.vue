<template>
  <ve-wordcloud :data="chartData" height="100%" :settings="chartSettings" />
</template>
<script>
  export default {
    data() {
      return {
        chartData: {
          columns: ['name', 'value'],
          rows: [{
            name: '中国',
            value: 200 * Math.random()
          }, {
            name: '杭州',
            value: 100 * Math.random()
          }, {
            name: '浙江',
            value: 500 * Math.random()
          }, {
            name: '北京',
            value: 26 * Math.random()
          }, {
            name: '南京',
            value: 1200 * Math.random()
          }, {
            name: '嘉兴',
            value: 300 * Math.random()
          }, {
            name: '绍兴',
            value: 206 * Math.random()
          }, {
            name: '宁波',
            value: 600 * Math.random()
          }, {
            name: '舟山',
            value: 420 * Math.random()
          }, {
            name: '苏州',
            value: 260 * Math.random()
          }]
        },
        chartSettings:{
          color:['rgba(97,216,0,.7)','rgba(204,178,26,.7)','rgba(245,166,35,.7)','rgba(245,166,35,.7)']
        }
      }
    },
    mounted() {
    }
  }
</script>
<style lang="scss" scoped>

</style>