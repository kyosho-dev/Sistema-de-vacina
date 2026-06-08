import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path' // Precisamos importar o 'path' para localizar as pastas

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(), 
    react()
  ],
  resolve: {
    alias: {
      // 🎯 A SOLUÇÃO: Força o <ComposableMap> a usar o mesmo React do seu projeto
      'react': path.resolve(__dirname, './node_modules/react'),
      'react-dom': path.resolve(__dirname, './node_modules/react-dom')
    }
  }
})
