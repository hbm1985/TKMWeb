//  该文件的作用：参考vue.config.js、vite.config.js
//  webpack的配置默认不会暴露，我们想在webpack默认配置的基础之上配置项目，则使用此文件

const CracoLessPlugin = require("craco-less")

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    }
  ],
}