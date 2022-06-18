<template>
  <div>
    <stripe-table
      v-bind:tableHead="tableHead"
      v-bind:tableData="tableData"
    ></stripe-table>
    <common-form v-bind:formLabel="formLabel" v-bind:form="form"></common-form>
  </div>
</template>

<script>
import StripeTable from "@/components/common/StripeTable.vue";
import CommonForm from "@/components/common/CommonForm.vue";

export default {
  name: "mall-view",
  components: {
    StripeTable,
    CommonForm,
  },
  data() {
    return {
      tableHead: [
        {
          prop: "name",
          label: "商品名",
        },
        {
          prop: "customer",
          label: "下单客户",
        },
        {
          prop: "count",
          label: "数量",
        },
        {
          prop: "date",
          label: "日期",
        },
      ],
      tableData: [
        {
          name: "手机型号111",
          customer: "小明",
          count: 1,
          date: "2023-5-1",
        },
        {
          name: "手机型号111",
          customer: "小明",
          count: 1,
          date: "2023-5-1",
        },
        {
          name: "手机型号111",
          customer: "小明",
          count: 1,
          date: "2023-5-1",
        },
        {
          name: "手机型号111",
          customer: "小明",
          count: 1,
          date: "2023-5-1",
        },
        {
          name: "手机型号111",
          customer: "小明",
          count: 1,
          date: "2023-5-1",
        },
      ],
      formLabel: [
        {
          type: "input",
          model: "name",
          label: "商品名",
        },
        {
          type: "input",
          model: "customer",
          label: "下单客户",
        },
        {
          type: "input",
          model: "count",
          label: "数量",
        },
        {
          type: "date",
          model: "date",
          label: "日期",
        },
      ],
      form: {
        name: "aaa",
        customer: "111",
        count: "",
        date: "",
      },
    };
  },
};
</script>