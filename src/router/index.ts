// router/index.ts 路由入口
import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHashHistory("/"),
  routes,
})


// 进入路由之前
router.beforeEach((to) => {
  const { title } = to.meta
  document.title = title as string || '默认标题'

})

export default router
