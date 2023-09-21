<template>
  <el-container>
    <el-header>
      <h1 style="text-align: center">后台管理系统</h1>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <Aside></Aside>
      </el-aside>
      <el-main>
        <Suspense>
          <router-view />
        </Suspense>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Aside from './components/Aside.vue'
</script>

<style scoped></style>
