<template>
  <el-menu default-active="1" class="el-menu-demo" mode="horizontal">
    <router-link :to="{ name: 'main' }" custom v-slot="{ navigate }">
      <el-menu-item index="1" @click="skip(navigate)">
        <el-icon><icon-menu /></el-icon>
        <span class="link">主页</span>
      </el-menu-item>
    </router-link>

    <router-link :to="{ name: 'users' }" custom v-slot="{ navigate }">
      <el-menu-item index="2" @click="skip(navigate)">
        <el-icon>
          <document />
        </el-icon>
        <span>用户管理</span>
      </el-menu-item>
    </router-link>

    <router-link :to="{ name: 'setting' }" custom v-slot="{ navigate }">
      <el-menu-item index="3" @click="skip(navigate)">
        <el-icon>
          <setting />
        </el-icon>
        <span>系统设置</span>
      </el-menu-item>
    </router-link>

    <h2>供需机器人后台管理系统</h2>
  </el-menu>
</template>

<script setup lang="ts">
import { Document, Menu as IconMenu, Setting } from '@element-plus/icons-vue'
import { NavigationFailure } from 'vue-router'

const skip = (
  navigate: (e?: MouseEvent | undefined) => Promise<void | NavigationFailure>
) => {
  navigate()
}
</script>

<style scoped></style>
