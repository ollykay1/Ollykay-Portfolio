import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Clean config — no esbuildOptions, no wasm, no noDiscovery
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [],
  },
  server: {
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
})
