<template>
  <div>
    <el-dialog :title="formName" :visible.sync="dialogFormVisible">
      <common-form
        v-bind:formLabel="formLabel"
        v-bind:form="form"
        v-bind:formType="formType"
        v-on:changeVisible="changeVisible"
        v-on:submitData="submitData"
      ></common-form>
    </el-dialog>
    <el-button type="primary" @click="showCreate" style="margin-bottom: 20px"
      >新增用户</el-button
    >
    <user-info v-if="updateData" @getType="changeData"></user-info>
  </div>
</template>

<script>
import UserInfo from "@/components/content/user/UserTable.vue";
import CommonForm from "@/components/common/CommonForm.vue";

export default {
  name: "user-view",
  components: {
    UserInfo,
    CommonForm,
  },
  data() {
    return {
      dialogFormVisible: false,
      formName: "",
      formLabel: [
        {
          type: "input",
          model: "username",
          label: "用户名",
        },
        {
          type: "radio",
          model: "gender",
          label: "性别",
          radio: ["男", "女"],
        },
        {
          type: "input",
          model: "age",
          label: "年龄",
        },
        {
          type: "select",
          model: "userType",
          label: "用户类型",
          option: [
            {
              label: "普通用户",
              value: 0,
            },
            {
              label: "管理员用户",
              value: 1,
            },
          ],
        },
      ],
      form: {
        username: "",
        gender: "",
        age: "",
        userType: "",
      },
      updateData: true,
      formType: "",
    };
  },
  methods: {
    showCreate() {
      this.formName = "新增用户";
      this.formType = "createUser";
      this.form = {
        username: "",
        gender: "",
        age: "",
        userType: "",
      };
      this.dialogFormVisible = true;
    },
    changeVisible(curVisible) {
      this.dialogFormVisible = curVisible;
    },
    submitData() {
      // 提交表单，关闭对话+实现重载
      this.dialogFormVisible = false;

      this.updateData = false;
      this.$nextTick(function () {
        this.updateData = true;
      });
    },
    changeData(type, data) {
      this.formName = "编辑信息";
      data.userType = data.userType == "管理员用户" ? 1 : 0;
      data.gender = data.gender == "男" ? 1 : 0;
      this.form = data;
      this.dialogFormVisible = true;
      this.formType = type;
    },
  },
};
</script>