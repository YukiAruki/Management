<template>
  <stripe-table
    v-bind:tableHead="tableHead"
    v-bind:tableData="tableData"
    @formType="getType"
  ></stripe-table>
</template>

<script>
import StripeTable from "@/components/common/StripeTable.vue";
import { getUserList } from "@/api/data.js";

export default {
  props: ["commitSearch"],
  components: {
    StripeTable,
  },
  watch: {
    commitSearch: {
      immediate: true,
      handler(news) {
        // 第一次搜索备份数据
        if (this.oldData.length === 0) {
          this.oldData = this.tableData;
        }
        // 过滤不含搜索关键词的用户
        this.tableData = this.oldData.filter(
          (u) => u.username.indexOf(news) != -1
        );
      },
    },
  },
  mounted() {
    getUserList().then((res) => {
      const { code, count, list } = res.data;
      if (code === 200) {
        this.tableData = list;
        this.countData = count;
      }
    });
  },
  data() {
    return {
      countData: 0,
      tableHead: [
        {
          prop: "username",
          label: "用户名",
        },
        {
          prop: "gender",
          label: "性别",
        },
        {
          prop: "age",
          label: "年龄",
        },
        {
          prop: "userType",
          label: "用户类型",
        },
      ],
      tableData: [],
      oldData: [],
    };
  },
  methods: {
    getType(type, data) {
      if (type === "del") {
        if (confirm("确定要删除吗？") == true) {
          this.tableData = this.tableData.filter((u) => u.id != data.id);
          this.$http.post("/user/del", data);
        }
      } else {
        this.$emit("getType", type + "User", data);
      }
    },
  },
};
</script>