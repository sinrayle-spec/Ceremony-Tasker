import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    basicSsl()
  ],
  base: '/Ceremony-Tasker/',
  server: {
    port: 8080,
    host: true,
    https: true
  },
  preview: {
    port: 8080,
    host: true,
    https: true
  }
})
