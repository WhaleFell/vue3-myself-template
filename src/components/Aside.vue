<template>
  <el-menu
    default-active="1"
    mode="vertical"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    unique-opened
    router
    :collapse="isCollapse"
  >
    <el-button
      type="primary"
      @click="isC"
      round
      text
      :icon="!isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
    >
      {{ isCollapse ? '点击展开' : '点击收起' }}
    </el-button>
    <el-menu-item index="1" :route="{ name: 'main' }">
      <el-icon><icon-menu /></el-icon>
      <span class="link">主页</span>
    </el-menu-item>

    <el-menu-item index="2" :route="{ name: 'users' }">
      <el-icon>
        <document />
      </el-icon>
      <span>用户管理</span>
    </el-menu-item>

    <el-menu-item index="3" :route="{ name: 'setting' }">
      <el-icon>
        <setting />
      </el-icon>
      <span>系统设置</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Document, Menu as IconMenu, Setting } from '@element-plus/icons-vue'
const isCollapse = ref(true)

const isC = () => {
  isCollapse.value = !isCollapse.value
}
</script>

<style scoped></style>
