import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve : {
    alias: {
      'pages': path.resolve(__dirname,'src/pages'),
      'routes': path.resolve(__dirname, 'src/routes'),
      'component': path.resolve(__dirname, 'src/component'),
      'layout': path.resolve(__dirname, 'src/layout'),
      'container': path.resolve(__dirname, 'src/container'),
      'styles': path.resolve(__dirname, 'src/styles'),
    },
  }
})
