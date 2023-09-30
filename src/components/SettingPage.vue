<template>
  <ElText>
    可使用以下关键字代替: 【每次消耗的USDT】 【发表次数】 【当前时间】
    【用户内容】
  </ElText>
  <ElForm :model="FormConfig" label-position="top">
    <el-form-item label="管理员密码">
      <el-input v-model="FormConfig.admin_password" />
    </el-form-item>
    <el-form-item label="发送的频道 ID">
      <el-input v-model="FormConfig.channel_id" />
    </el-form-item>
    <el-form-item label="支付的 USDT 地址">
      <el-input v-model="FormConfig.usdt_token" />
    </el-form-item>
    <el-form-item label="发送一次耗费的 USDT">
      <el-input v-model="FormConfig.once_cost" />
    </el-form-item>
    <el-form-item label="机器人描述" autosize type="textarea">
      <el-input v-model="FormConfig.description" autosize type="textarea" />
    </el-form-item>
    <el-form-item label="供给模板">
      <el-input v-model="FormConfig.provide_desc" autosize type="textarea" />
    </el-form-item>
    <el-form-item label="需求模板">
      <el-input v-model="FormConfig.require_desc" autosize type="textarea" />
    </el-form-item>
    <el-form-item label="发送内容">
      <el-input v-model="FormConfig.send_content" autosize type="textarea" />
    </el-form-item>
    <el-form-item label="屏蔽词,请使用,分隔">
      <el-input v-model="FormConfig.ban_words" autosize type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="success" plain @click="commit">提交</el-button>
      <el-button type="danger" plain @click="reset">重置</el-button>
    </el-form-item>
  </ElForm>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { service } from '../apis'
// {
//   "admin_password": "admin",
//   "provide_desc": "string",
//   "require_desc": "string",
//   "send_content": "string",
//   "channel_id": "string",
//   "usdt_token": "string",
//   "description": "string",
//   "once_cost": 0
// }

interface Config {
  admin_password: string
  provide_desc: string
  require_desc: string
  send_content: string
  channel_id: string
  usdt_token: string
  description: string
  once_cost: number
  ban_words: string
}

let FormConfig = ref<Config>({
  admin_password: 'admin',
  provide_desc: 'string',
  require_desc: 'string',
  send_content: 'string',
  channel_id: 'string',
  usdt_token: 'string',
  description: 'string',
  once_cost: 0,
  ban_words: '是滴,2121',
})

const get = () =>
  service
    .get('/config/config_get')
    .then((response) => (FormConfig.value = response.data))
    .catch(function (error) {
      // 请求失败处理
      console.log(error)
    })

const reset = () => {
  service
    .get('/config/config_reset')
    .then((response) => (FormConfig.value = response.data))
    .catch(function (error) {
      // 请求失败处理
      console.log(error)
    })
  get()
}

const commit = () => {
  service
    .post('/config/config_set', FormConfig.value)
    .then((response) => (FormConfig.value = response.data))
    .catch(function (error) {
      // 请求失败处理
      console.log(error)
    })
  get()
}

onMounted(() => {
  get()
})
</script>

<style scoped></style>
