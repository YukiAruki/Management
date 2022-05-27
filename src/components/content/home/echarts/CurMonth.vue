<template>
  <div id="curmonth" style="width: 290px; height: 220px;"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "CurMonth",
  mounted() {
    let chartDom = document.getElementById("curmonth");
    let curMonth = echarts.init(chartDom);

    let option = {
      name: "本月数据",
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
        },
      ],
    };

    curMonth.setOption(option);
  },
};
</script>