<template>
  <div id="container"></div>
</template>
<script>
import "echarts-liquidfill";
export default {
  mounted() {
    const data = [
      0.68,
      {
        value:0.4,
        // 第二条波浪的方向
        direction:'left'
      },
      {
        value: 0.2,
        itemStyle: {
          opacity: 0.6,
        },
        emphasis: {
          itemStyle: {
            opacity: 0.9,
          },
        },
      },
    ];
    const chart = this.$echarts.init(document.getElementById("container"));
    chart.setOption({
      series: [
        {
          type: "liquidFill",
          data,
          color: ["red", "blue", "yellow"],
          // 动态波浪
          // waveAnimation:false,
          // animationDuration:0,
          // animationDurationUpdate:0,
          // 波浪弧度
          // amplitude:10
          // 水球的底色
          backgroundStyle:{
            color:'purple',
            borderWidth:4,
            borderColor:'#333'
          },
          // 显示最外圈的配置
          outline:{
            show:true,
            borderDistance:2,
            itemStyle:{
              borderWidth:2,
              borderColor:'red',
              shadowBlur:'none'
            }
          },
          // 设置水球形状
          shape:'diamond'
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