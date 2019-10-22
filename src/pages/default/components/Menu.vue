<template>
  <!-- background-color="#252526"
    text-color="#cccccc99"
    active-text-color="#cccccc" -->
  <el-menu
    class="dfa-menu"
    unique-opened
    :default-active="defaultActive"
    @select="selectMenu"
  >
    <el-submenu index="df-page">
      <template slot="title">
        <i class="el-icon-document"></i>
        <span slot="title">页面管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="PageAdmin">页面模板</el-menu-item>
        <el-menu-item index="PageCategory">页面分类</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="df-content">
      <template slot="title">
        <i class="el-icon-notebook-2"></i>
        <span slot="title">内容管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="ContentAdmin">内容管理</el-menu-item>
        <el-menu-item index="ContentCategory">内容分类</el-menu-item>
      </el-menu-item-group>
    </el-submenu>

    <el-menu-item index="Menu">
      <i class="el-icon-menu"></i>
      <span slot="title">菜单管理</span>
    </el-menu-item>
    <!-- <el-submenu index="df-menu">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">菜单管理</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="pageAdmin1">页面模板</el-menu-item>
        <el-menu-item index="pageCategory1">页面分类</el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <span slot="title">选项4</span>
        <el-menu-item index="1-4-1">选项1</el-menu-item>
      </el-submenu>
    </el-submenu> -->
  </el-menu>
</template>
<script>
export default {
  name: "DfAMenu",
  data() {
    return {
      defaultActive: "PageAdmin"
    };
  },
  methods: {
    selectMenu(index) {
      const { name } = this.$route;
      if (index !== name) {
        this.$router.push({ name: index });
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.el-menu {
  // border: 0;
}
.dfa-menu {
  height: 100%;
}
</style>
