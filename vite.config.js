import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path' // 1. Import Node's path module

export default defineConfig({
  base: '/eladeatah.github.io/',
  plugins: [react()],
  resolve: {
    alias: {
      // 2. Define the @ alias to point to the src folder
      '@': path.resolve(__dirname, './src'),
    },
  },
})