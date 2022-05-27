<template>
  <div id="monthAxis" style="width: 700px; height: 180px"></div>
</template>
<script>
import * as echarts from 'echarts'

export default {
  name: "monthAxis",
  components: {},
  mounted() {
    let monthAxis = echarts.init(document.getElementById("monthAxis"));

    // 指定图表的配置项和数据
    let option = {
      title: {
        text: "月销售折线图",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["oppo", "vivo", "苹果", "小米", "三星"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["22/01", "22/02", "22/03", "22/04", "22/05"],
      },
      yAxis: {
        type: "value",
        min: 1000,
      },
      series: [
        {
          name: "oppo",
          type: "line",
          stack: "Total1",
          data: [1700, 2200, 2400, 2000, 2100, 2300, 2100],
        },
        {
          name: "vivo",
          type: "line",
          stack: "Total2",
          data: [1600, 2100, 2800, 2300, 1500, 2200, 2000],
        },
        {
          name: "苹果",
          type: "line",
          stack: "Total3",
          data: [2500, 2300, 2000, 2500, 2900, 3300, 2400],
        },
        {
          name: "小米",
          type: "line",
          stack: "Total4",
          data: [2300, 2200, 3000, 2400, 1900, 3300, 3200],
        },
        {
          name: "三星",
          type: "line",
          stack: "Total5",
          data: [2400, 2100, 1900, 2200, 1900, 2300, 2000],
        },
      ],
    };
    monthAxis.setOption(option);
  },
};
</script>