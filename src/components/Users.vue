<template>
  <el-auto-resizer>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="用户信息">
        <template #default="scope">
          <el-icon><timer /></el-icon>
          <span style="margin-left: 10px"
            >{{ scope.row.username }}({{ scope.row.user_id }})</span
          >
        </template>
      </el-table-column>

      <el-table-column label="余额">
        <template #default="scope">
          <el-input v-model="scope.row.amount"></el-input>
          <el-button
            type="primary"
            @click="set(scope.row.user_id, scope.row.amount)"
          >
            修改
          </el-button>
        </template>
      </el-table-column>

      <el-table-column prop="count" label="发布次数" />
      <el-table-column prop="create_at" label="注册时间" />
    </el-table>
  </el-auto-resizer>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { service } from '../apis'
import { ElMessageBox } from 'element-plus'
import { User } from '../apiModel'

const get = () => {
  service
    .get('/user/get_all_user')
    .then((response) => (tableData.value = response.data))
    .catch(function (error) {
      // 请求失败处理
      console.log(error)
    })
}

const set = (user_id: string, amount: number) => {
  service
    .post('/user/set_user_amount/', { user_id: user_id, amount: amount })
    .then((response) => {
      let new_user: User = response.data
      ElMessageBox.alert(
        `当前${new_user.username}(${new_user.user_id})余额:${new_user.amount}`,
        '用户金额修改成功!',
        {
          confirmButtonText: 'OK',
        }
      )
      get()
    })
    .catch(function (error) {
      // 请求失败处理
      console.log(error)
    })
}

onMounted(() => {
  get()
})

const tableData = ref<User[]>([])
</script>

<style scoped></style>
