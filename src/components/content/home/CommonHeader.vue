<template>
  <header>
    <div class="l-content">
      <el-button
        plain
        icon="el-icon-menu"
        size="mini"
        @click="handleMenu"
      ></el-button>
      <h4 style="color: #fff; margin-left: 20px">{{getPageName}}</h4>
    </div>
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span class="el-dropdown-link">
          <img :src="userImg" alt="" /><i
            class="el-icon-arrow-down el-icon--right"
          ></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  name: "CommonHeader",
  methods: {
    handleMenu(){
      this.$store.commit('collapseMenu')
    }
  },
  data() {
    return {
      userImg: require("@/assets/img/logo.png"),
    };
  },
  computed: {
    getPageName(){
      return this.$store.state.curPage
    }
  }
};
</script>

<style lang="less">
header {
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 5px;
  }
}
.r-content {
  img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #fff;
  }
}
</style>