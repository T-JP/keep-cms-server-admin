<template>
  <el-container class="df-admin">
    <el-aside width="240px">
      <el-container>
        <el-header class="dfa-logo">
          <span>CMS</span>
        </el-header>
        <el-main>
          <df-menu></df-menu>
        </el-main>
      </el-container>
    </el-aside>
    <el-container>
      <el-header>页头</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <!-- <el-footer>页脚</el-footer> -->
    </el-container>
  </el-container>
</template>
<script>
import DfMenu from "./components/Menu";
export default {
  name: "DfAdmin",
  components: {
    DfMenu
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss" scoped>
.el-aside {
  // background-color: #252526;
}
.el-header {
  border-bottom: solid 1px #e6e6e6;
}
.el-footer {
  // background-color: #2d2d2d;
  // background-color: #cccccc99;
}
.el-main {
  // background-color: #1e1e1e;
}
.df-admin {
  .dfa-logo {
    text-align: center;
    line-height: 60px;
    span {
      font-size: 16px;
      font-weight: bold;
    }
  }
}
</style>
