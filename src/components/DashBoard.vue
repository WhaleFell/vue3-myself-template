<template>
  <el-container>
    <el-header class="header" style="height: auto">
      <span style="text-align: center; font-size: 30px"
        >TG供需机器人后台管理系统</span
      >
    </el-header>
    <el-container>
      <el-aside style="width: auto">
        <Aside></Aside>
      </el-aside>
      <el-main>
        <RouterView></RouterView>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Aside from '../components/Aside.vue'
</script>

<style scoped>
.header {
  text-align: center;
}

.el-header {
  background: #b3c0d1;
  color: #333;
  padding: 0 !important;
}

.el-aside {
  background: #393e42;
  color: #333;
  height: 100vh;
}
.el-menu {
  border-right-width: 0;
}
.el-main {
  color: #333;
}
.el-menu-vertical:not(.el-menu--collapse) {
  width: 240px;
}
.box_bgd {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.box_bgd i {
  font-size: 20px;
}
.box_bgd:hover {
  background: rgb(203, 215, 230);
}
</style>
