import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: "https://github.com/Kristofflus/project_1.git"
  plugins: [react()],
})
