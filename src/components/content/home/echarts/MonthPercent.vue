<template>
  <div id="monthPie" style="width: 290px; height: 220px"></div>
</template>
<script>
import * as echarts from "echarts";

export default {
  name: "monthPie",
  components: {},
  mounted() {
    let monthPie = echarts.init(document.getElementById("monthPie"));

    // 指定图表的配置项和数据
    let option = {
      tooltip: {
        trigger: "item",
      },
      legend: {
        orient: "vertical",
        right: 0,
        top: 20,
        bottom: 20,
        textStyle: {
          fontSize: 14,
        },
      },
      series: [
        {
          name: "月度分布图",
          type: "pie",
          radius: ["40%", "70%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 2,
          },
          emphasis: {
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 2100, name: "oppo" },
            { value: 2300, name: "vivo" },
            { value: 3000, name: "苹果" },
            { value: 2500, name: "小米" },
            { value: 2600, name: "三星" },
            { value: 2200, name: "魅族" },
          ],
        },
      ],
    };
    monthPie.setOption(option);
  },
};
</script>