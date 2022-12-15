// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nosotros: resolve(__dirname, 'nosotros.html'),
        servicios: resolve(__dirname, 'servicios.html'),
      },
    },
  },
})