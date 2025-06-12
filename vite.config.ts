import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      tsconfigPath: 'tsconfig.app.json', //--问题点1-- ：如果打包出来的类型文件为空，这里需要添加上实际的tsconfig文件；
      // outDir: 'dist/types',
      insertTypesEntry: true
    })
  ],
  resolve: {
    alias: {
      // "@": resolve(__dirname, "src"),
      "@": resolve(__dirname, "packages")
    }
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'packages/lib/index.ts'),
      name: 'lin-ui',
      // fileName: 'index',
      fileName: (format)=> `lin-ui-${format}.js`,
      formats: ['es', 'umd'] , //指定多种格式可以让你的库在不同环境中都能使用：
      cssFileName: 'lin-ui-styles'
    },
    rollupOptions: { // 覆盖掉Vite 的默认 Rollup 行为。
      external: ['vue'],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  }
})
