import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { resolve } from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  base:"/",

  plugins: [
    vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],

    resolve: {
      alias: {
        '@src': resolve(__dirname,'src'), // 源码根目录
      },
    },
})
