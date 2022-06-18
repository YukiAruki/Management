<template>
  <el-form ref="form" label-width="100px" :model="formData" :inline="false">
    <el-form-item
      v-for="(item, index) in formLabel"
      :key="index"
      :label="item.label"
    >
      <el-input
        v-if="item.type === 'input'"
        :placeholder="'请输入' + item.label"
        v-model="formData[item.model]"
      >
      </el-input>
      <el-select
        v-if="item.type === 'select'"
        :placeholder="'请选择' + item.label"
        v-model="formData[item.model]"
      >
        <el-option
          v-for="(option, index) in item.option"
          :key="index"
          :label="option.label"
          :value="option.value"
        ></el-option>
      </el-select>
      <el-date-picker
        v-if="item.type === 'date'"
        :placeholder="'请选择' + item.label"
        v-model="formData[item.model]"
      ></el-date-picker>
      <el-radio-group
        v-if="item.type === 'radio'"
        v-model="formData[item.model]"
      >
        <el-radio
          v-for="(curRadio, index) in item.radio"
          :key="index"
          :label="index"
          >{{ curRadio }}</el-radio
        >
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    formLabel: {
      type: Array,
      default: function () {
        return [];
      },
    },
    form: {
      type: Object,
      default: function () {
        return {};
      },
    },
    formType: {
      type: String,
      default: "",
    },
  },
  watch: {
    form: {
      immediate: true,
      // 将porp中内容同步到data里
      handler(news) {
        this.formData = news;
        console.log(news);
      },
    },
  },
  methods: {
    onSubmit() {
      if (this.formType === "createUser") {
        this.$http.post("/user/create", this.formData);
      } else if(this.formType === 'editUser'){
        this.$http.post("/user/edit", this.formData);
      }
      this.$emit("submitData", true);
    },
    cancel() {
      // 关闭dialog
      this.$emit("changeVisible", false);
    },
  },
  data() {
    return {
      formData: {},
    };
  },
};
</script>