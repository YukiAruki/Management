<template>
  <div>
    <el-card style="height: 200px; margin-top: 5px" shadow="hover">
      <month-axis />
    </el-card>
    <div class="graph">
      <el-card shadow="hover" style="width: 360px; height: 240px">
        <month-pie></month-pie>
      </el-card>
      <el-card shadow="hover" style="width: 360px; height: 240px">
        <cur-month></cur-month>
      </el-card>
    </div>
  </div>
</template>

<script>
import MonthAxis from '@/components/content/home/echarts/MonthAxis'
import MonthPie from '@/components/content/home/echarts/MonthPercent'
import CurMonth from '@/components/content/home/echarts/CurMonth'

export default {
  name: 'AllCharts',
  components: {
    MonthAxis,
    MonthPie,
    CurMonth
  }
}
</script>