module.exports = {
  devServer: { // webpack 的一个插件，搭建本地服务器
    proxy: { // 反向代理
      '/api': {
        target: 'http://172.0.0.1:3000', // 服务器地址  仅限于开发环境
        pathRewrite: {
          '^/api': '' // 以 /api 开头的地址替换为''
        },
        changeOrigin: true // 本地会虚拟一个服务的接收你的请求并代你发送该请求
      }
    }
  }
}