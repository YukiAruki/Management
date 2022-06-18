<template>
  <div id="app">
    <el-container style="height: 100%">
      <el-aside width="auto">
        <nav-menu :title="title" :shortTitle="shortTitle"></nav-menu>
      </el-aside>
      <el-container>
        <el-header>
          <common-header
            style="
              position: relative;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            "
          ></common-header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenu from "@/components/common/navMenu/NavMenu";
import CommonHeader from "@/components/content/home/CommonHeader";

export default {
  name: "App",
  components: {
    NavMenu,
    CommonHeader,
  },
  data() {
    return {
      shortTitle: "后台",
      title: "通用后台管理系统",
      isCollapse: false,
    };
  },
};
</script>

<style>
#app {
  height: 100%;
  background-color: rgb(244, 244, 244);
}
.el-header {
  background-color: #333;
  display: flex;
  justify-content: space-between;
}
</style>
