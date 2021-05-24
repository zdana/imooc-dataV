<template>
  <div id="container"></div>
</template>
<script>
import 'echarts-wordcloud'
export default {
  mounted() {
    const data = [{
      name:'中国',
      value:100
    },{
      name:'浙江',
      value:500
    },{
      name:'绍兴',
      value:26
    },{
      name:'中国',
      value:1200
    },{
      name:'浙江',
      value:300
    },{
      name:'绍兴',
      value:206
    },{
      name:'中国',
      value:600
    },{
      name:'浙江',
      value:420
    },{
      name:'绍兴',
      value:260
    }];
    const chart = this.$echarts.init(document.getElementById("container"));
    chart.setOption({
      series: [
        {
          type: "wordCloud",
          data,
          shape:'circle',
          textStyle:{
            nromal:{
              fontFamily:'sans-serif',
              fontWeight:'bold',
              color:function(){
                return 'rgb('+[
                  Math.round(Math.random()*160),Math.round(Math.random()*160),Math.round(Math.random()*160)
                ].join(',')+')'
              }
            },
            emphasis:{
              shadowBlur:10,
              shadowColor:'#333'
            }
          }
        },
      ],
    });
  },
};
</script>
<style lang="scss" scoped>
#container {
  width: 100%;
  height: 100%;
}
</style>