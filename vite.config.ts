import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { resolve } from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  base: "/",

  plugins: [
    vue(),
    // Ele UI 按需导入
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],

  resolve: {
    alias: {
      '@src': resolve(__dirname, 'src'), // 源码根目录
    },
  },

  server: {
    host: '0.0.0.0',
    port: 8991,
    // 是否开启 https
    https: false,
    // 设置反向代理，跨域
    proxy: {
      '/user/': {
        // 后台地址
        target: 'http://usa1.whaleluo.top:8456/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\//, '')
      },
      '/pay/': {
        // 后台地址
        target: 'http://usa1.whaleluo.top:8456/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\//, '')
      },
      '/config/': {
        // 后台地址
        target: 'http://usa1.whaleluo.top:8456/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\//, '')
      },
    }
  },




})
