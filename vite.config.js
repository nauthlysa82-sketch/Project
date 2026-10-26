
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
<<<<<<< HEAD
  plugins: [react(), tailwindcss()],
  base: '/Project/',
=======
  plugins: [
    react(),
    tailwindcss(),
  ],
>>>>>>> 66852fa (Fix Vercel deployment)
})
