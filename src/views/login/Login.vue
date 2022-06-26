<template>
  <div class="login">
    <el-alert :title="alterTitle" type="error" v-if="showAlter"> </el-alert>
    <h3>用户登录</h3>
    <common-form
      v-bind:formLabel="formLabel"
      v-bind:form="form"
      v-bind:formType="formType"
      v-on:submitData="submitData"
      class="logForm"
    >
    </common-form>
  </div>
</template>

<script>
import CommonForm from "@/components/common/CommonForm.vue";

export default {
  name: "login-view",
  components: {
    CommonForm,
  },
  data() {
    return {
      formLabel: [
        {
          type: "input",
          model: "userid",
          label: "账号",
          inputType: "text",
        },
        {
          type: "input",
          model: "passw",
          label: "密码",
          inputType: "password",
        },
      ],
      form: {
        userid: "",
        passw: "",
      },
      formType: "login",
      showAlter: false,
      alterTitle: "",
    };
  },
  methods: {
    submitData(value) {
      const that = this;
      this.$http.post("/login", value).then((res) => {
        const { code, msg, data } = res.data;
        if (code === 200) {
          this.$store.commit("userProfile", data);
          this.$router.replace.call(that.$router, {name:'Home'})
        } else if (code === 500) {
          this.alterTitle = msg;
          this.showAlter = true;
        }
      });
    },
  },
};
</script>

<style scoped>
.login {
  position: relative;
  height: 300px;
  width: 350px;
  margin-left: 250px;
  margin-top: 100px;
  background-color: white;
  padding: 20px;
}

.logForm {
  width: 300px;
}
</style>