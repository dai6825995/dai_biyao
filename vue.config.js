const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 热词的接口代理
  devServer: {
    proxy: {
      "/classify": {
        target: 'http://www.biyao.com/',
        changeOrigin: true,
      }
    }
  }
})
