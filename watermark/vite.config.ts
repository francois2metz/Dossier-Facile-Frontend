import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueI18n from '@intlify/vite-plugin-vue-i18n'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 9184,
    fs: {
      allow: ['..']
    }
  },
  plugins: [vue(),
  vueI18n({})
]
})
