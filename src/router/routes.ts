// routes.ts 路由集合


// 使用 TypeScript 时需要导入路由项目的类型声明
import type { RouteRecordRaw } from 'vue-router'

// 使用路由项目类型声明一个路由数组
const routes: RouteRecordRaw[] = [
  {
    path: '/main/',
    name: 'main',
    component: () => import('../components/Main.vue'),
    meta: {
      title: "主页"
    }
  },
  {
    path: '/setting/',
    name: 'setting',
    component: () => import('../components/SettingPage.vue'),
    meta: {
      title: "设置"
    }
  },
  {
    path: '/users/',
    name: 'users',
    component: () => import('../components/Users.vue'),
    meta: {
      title: "用户管理"
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('../components/NotFound.vue'),
    meta: {
      title: "404"
    }
  },
]

// 将路由数组导出给其他模块使用
export default routes
