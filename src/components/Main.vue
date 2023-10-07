<template>
  <ElAlert show-icon type="success" closable>
    <template #title> 系统提示 </template>
    <template #default>
      欢迎使用 TG 机器人供需管理系统,这是一条系统提示,请留心
    </template>
  </ElAlert>
  <h2>总申请支付金额:{{ pay_total_amount }}</h2>
  <h2>全部用户的总金额:{{ user_total_amount }}</h2>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { service } from '../apis'

const pay_total_amount = ref<number>(0)
const user_total_amount = ref<number>(0)

const getUserAmount = () => {
  service
    .get('/user/get_user_total_amount/')
    .then((response) => {
      user_total_amount.value = Number(response.data)
    })
    .catch(function (error) {
      // 请求失败处理
      console.log(error)
    })
}

const getPaysAmount = () => {
  service
    .get('/pay/total_amount/')
    .then((response) => {
      pay_total_amount.value = Number(response.data)
    })
    .catch(function (error) {
      // 请求失败处理
      console.log(error)
    })
}

onMounted(() => {
  getUserAmount()
  getPaysAmount()
})
</script>

<style scoped></style>
