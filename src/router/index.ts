// router/index.ts 路由入口
import { createRouter, createWebHistory } from 'vue-router'
import routes from '../router/routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
