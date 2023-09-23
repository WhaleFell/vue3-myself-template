<template #default>
  <el-empty>
    <template #description>
      <h1>找不到页面,{{ timeout }} 后跳转到首页</h1>
    </template>
  </el-empty>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const timeout = ref<number>(5)
const router = useRouter()

const skip = setInterval(() => {
  timeout.value--
  if (timeout.value <= 0) {
    router.push({
      name: 'main',
    })
    clearInterval(skip)
    return
  }
}, 1000)
</script>

<style scoped></style>
