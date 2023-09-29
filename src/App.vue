<template>
  <el-container>
    <el-header>
      <Aside></Aside>
    </el-header>
    <el-main>
      <RouterView></RouterView>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import Aside from './components/Aside.vue'
</script>

<style scoped></style>
