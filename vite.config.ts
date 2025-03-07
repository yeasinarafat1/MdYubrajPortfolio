import path from "path"
import react from "@vitejs/plugin-react"
import tailwindcss from '@tailwindcss/vite'

import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Ignore TypeScript errors during build
        if (warning.code === 'TS2307') return
        warn(warning)
      }
    }
  }
})
