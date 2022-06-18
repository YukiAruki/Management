<template>
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column
      v-for="item in tableHead"
      :key="item.prop"
      :prop="item.prop"
      :label="item.label"
      min-width="150px"
    >
    </el-table-column>
    <el-table-column prop="changeData" label="编辑管理" min-width="250px">
      <template slot-scope="scope">
        <el-button type="primary" size="small" @click="edit(scope.row)"
          >修改</el-button
        >
        <el-button size="small" @click="del(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: ["tableHead", "tableData"],
  methods: {
    edit(curData) {
      this.$emit('formType', 'edit', curData)
    },
    del(curData) {
      this.$emit('formType', 'del', curData)
    },
  },
};
</script>