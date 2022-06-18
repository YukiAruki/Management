<template>
  <div>
    <el-menu
      default-active="1-4-1"
      class="el-menu-vertical-demo"
      text-color="#fff"
      background-color="#555"
      active-text-color="#000"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      :router="true"
    >
      <h3 v-if="!isCollapse">{{title}}</h3>
      <h3 v-else>{{shortTitle}}</h3>
      <el-menu-item @click="changePage(item.label)" v-for="item in noChild" :index="item.path" :key="item.path">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
      <el-submenu
        v-for="item in hasChildren"
        :index="item.label"
        :key="item.label"
      >
        <template slot="title">
          <i :class="'el-icon-' + item.icon"></i>
          <span slot="title">{{ item.label }}</span>
        </template>
        <el-menu-item-group>
          <!-- <span slot="title">分组一</span> -->
          <el-menu-item
            v-for="child in item.children"
            :index="child.path"
            :key="child.path"
          >
            <i :class="'el-icon-' + item.icon"></i>
            <span>{{ child.label }}</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  height: 100vh;
  width: 200px;
  min-height: 400px;
  border: none;
}

h3 {
    color: #fff;
    text-align: center;
    white-space:nowrap;
}

.el-menu-vertical-demo {
  height: 100vh;
  border: none;
}
</style>

<script>
export default {
  props:{
    title: {
      type: String,
      default:"通用后台管理系统"
    },
    shortTitle: {
      type: String,
      default:"后台"
    }
  },
  data() {
    return {
      menu: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/mall",
          name: "mall",
          label: "商品管理",
          icon: "video-play",
          url: "MallManage/MallManage",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "UserManage/UserManage",
        },
        {
          label: "其他",
          icon: "s-tools",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "s-tools",
              url: "Other/PageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "s-tools",
              url: "Other/PageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    changePage(data){
      this.$store.commit('changePage', data)
    }
  },
  computed: {
    // filter中无children指向则返回
    noChild() {
      return this.menu.filter((item) => !item.children);
    },
    hasChildren() {
      return this.menu.filter((item) => item.children);
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse
    },
  },
};
</script>