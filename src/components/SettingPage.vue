<template>
  <ElText>
    可使用以下关键字代替: 【普通供需消耗USDT】 【图文供需消耗USDT】 【发表次数】
    【当前时间】【用户内容】
  </ElText>
  <ElForm :model="FormConfig" label-position="top">
    <el-form-item label="管理员密码">
      <el-input v-model="FormConfig.admin_password" />
    </el-form-item>
    <el-form-item label="发送的频道 ID 多个频道请使用 , 分隔">
      <el-input v-model="FormConfig.channel_ids" />
    </el-form-item>
    <el-form-item label="支付的 USDT 地址">
      <el-input v-model="FormConfig.usdt_token" />
    </el-form-item>
    <el-form-item label="发送一次耗费的 USDT">
      <el-input v-model="FormConfig.once_cost" />
    </el-form-item>
    <el-form-item label="充值 USDT 的倍率(比如2倍:冲10就到账20)">
      <el-input v-model="FormConfig.multiple" />
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
import { Config } from '../apiModel'

let FormConfig = ref<Config>({
  admin_password: 'admin',
  provide_desc: 'string',
  require_desc: 'string',
  send_content: 'string',
  channel_ids: 'string',
  usdt_token: 'string',
  description: 'string',
  once_cost: 0,
  ban_words: '担保,供需',
  multiple: 1,
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
    .finally(() => {
      get()
    })
}

const commit = () => {
  service
    .post('/config/config_set', FormConfig.value)
    .then((response) => (FormConfig.value = response.data))
    .catch(function (error) {
      // 请求失败处理
      console.log(error)
    })
    .finally(() => {
      get()
    })
}

onMounted(() => {
  get()
})
</script>

<style scoped></style>
