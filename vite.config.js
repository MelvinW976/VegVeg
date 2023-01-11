import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { BootstrapVue3Resolver } from 'unplugin-vue-components/resolvers'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/info4340-2022fa/vueture-ers-project/' : './',
  plugins: [
    vue(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['vegveg.png'],
      manifest: {
        name: 'VegVeg',
        short_name: 'VegVeg',
        description: 'An example Vue.js+Vite PWA',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'vegveg.png',
            sizes: '192x192',
            type: 'image/png'
          },
         {
            src: 'vegveg.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'vegveg.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      devOptions: {
        enabled: true
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
