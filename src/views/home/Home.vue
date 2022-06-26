<template>
      <el-main>
        <home-article></home-article>
      </el-main>
</template>

<script>
import HomeArticle from "@/components/content/home/HomeArticle";

export default {
  components: {
    HomeArticle,
  },
  name: "home-view",
  data() {
    return {

    };
  },
  methods: {},
  computed:{
    getUserData(){
      return this.$store.state.userProfile
    }
  }
};
</script>

<style lang="less" scoped>

</style>

