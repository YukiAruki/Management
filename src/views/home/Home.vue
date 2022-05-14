<template>
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
        <home-article></home-article>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import NavMenu from "@/components/common/navMenu/NavMenu";
import CommonHeader from "@/components/content/home/CommonHeader";
import HomeArticle from "@/components/content/home/HomeArticle"

export default {
  components: {
    NavMenu,
    CommonHeader,
    HomeArticle,
  },
  name: "home-view",
  data(){
    return {
      shortTitle:"后台",
      title: "通用后台管理系统",
      isCollapse:false
    }
  },
  methods:{
  }
};
</script>

<style lang="less" scoped>
.el-header {
  background-color: #333;
  display: flex;
  justify-content: space-between;
}
</style>

