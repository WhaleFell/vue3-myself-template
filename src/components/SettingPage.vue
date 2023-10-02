<template>
  <ElText>
    可使用以下关键字代替: 【每次消耗的USDT】 【发表次数】 【当前时间】
    【用户内容】
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

// {
//   "admin_password": "admin",
//   "provide_desc": "\n项目名称：\n项目介绍：\n价格：\n联系人：\n频道：【选填/没频道可以不填】\n",
//   "require_desc": "\n需求：\n预算：\n联系人：\n频道：【选填/没频道可以不填】\n",
//   "send_content": "\n【用户内容】\n\n该用户累计发布 【发表次数】 次，当前时间：【当前时间】\n",
//   "channel_ids": "-1001858197255,",
//   "usdt_token": "TTV9EnFgcZ8WXvE3YPqwz4VYoQzzLLLLLL",
//   "description": "\n发布规则 付费广告 消耗 【每次消耗的USDT】 USDT\n\n发布付费广告严格要求如下\n1：行数限制15行内【超过百分百不通过】\n2：禁止发布虚假内容，禁止诈骗欺骗用户🚫\n3：无需备注累计广告次数，机器人会自动统计\n\n请编写好广告词，点击下方【📝自助发布】\n\n供给频道： https://t.me/gcccaasas\n",
//   "once_cost": 2,
//   "ban_words": "做爱,死,数学,地理,生物,幼女,黄颖宝,蔡徐坤,陈立农,鸡巴",
//   "multiple": 1
// }

interface Config {
  admin_password: string
  provide_desc: string
  require_desc: string
  send_content: string
  channel_ids: string
  usdt_token: string
  description: string
  once_cost: number
  ban_words: string
  multiple: number
}

let FormConfig = ref<Config>({
  admin_password: 'admin',
  provide_desc: 'string',
  require_desc: 'string',
  send_content: 'string',
  channel_ids: 'string',
  usdt_token: 'string',
  description: 'string',
  once_cost: 0,
  ban_words: '是滴,2121',
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
