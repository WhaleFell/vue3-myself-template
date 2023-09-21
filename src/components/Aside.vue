<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
  >
    <router-link :to="{ name: 'main' }" custom v-slot="{ navigate }">
      <el-menu-item index="1" @click="navigate">
        <el-icon><icon-menu /></el-icon>
        <span class="link">主页</span>
      </el-menu-item>
    </router-link>

    <router-link :to="{ name: 'users' }" custom v-slot="{ navigate }">
      <el-menu-item index="2" @click="navigate">
        <el-icon>
          <document />
        </el-icon>
        <span>用户管理</span>
      </el-menu-item>
    </router-link>

    <router-link :to="{ name: 'setting' }" custom v-slot="{ navigate }">
      <el-menu-item index="3" @click="navigate">
        <el-icon>
          <setting />
        </el-icon>
        <span>设置</span>
      </el-menu-item>
    </router-link>
  </el-menu>
</template>

<script setup lang="ts">
import { Document, Menu as IconMenu, Setting } from '@element-plus/icons-vue'
</script>

<style scoped></style>
