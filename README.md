# vite-plugin-html
> 配置vite项目中index.html动态参数

## 安装
```bash
npm i @jomsou/vite-plugin-html -D
or 
yarn add @jomsou/vite-plugin-html -D
```

## 使用
```ts
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import HtmlVitePlugin from '@jomsou/vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    HtmlVitePlugin({
      htmlWebpackPlugin: {
        options: {
          title: 'dubo',
          pwa: false,
          vite: true
        }
      }
    }),
  ]
})
```

**备注**
为什么`options`参数是h`tmlWebpackPlugin`作为`key`，是因为跟打包使用的vue-cli中的`html-webpack-plugin`对应上
