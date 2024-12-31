import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  build: {
    outDir: 'dist',
  },
  server: {
    historyApiFallback: true,
  },
  plugins: [react()],
})
