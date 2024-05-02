import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/genre-remix/",
  plugins: [react()],
  build: {
    outDir: './build'
  }
})
