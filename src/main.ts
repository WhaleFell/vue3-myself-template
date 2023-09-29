import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router/index'

const app = createApp(App)
const pinia = createPinia()

// register all icon component
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app
  .use(ElementPlus, { size: 'small', zIndex: 3000 })
  .use(router)
  .use(pinia)
  .mount('#app')
