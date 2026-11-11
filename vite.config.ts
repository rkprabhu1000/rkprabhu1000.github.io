import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// base './' keeps asset paths relative, so the build works on any host or sub-path
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
