const path = require("path")
const cracoLessPlugin = require("craco-less")

const pathResolve = pathName => path.resolve(__dirname, pathName)

module.exports = {
  webpack: {
    alias: {
      "@": pathResolve("src"),
      "@components": pathResolve("src/components"),
      "@views": pathResolve("src/views"),
      "@utils": pathResolve("src/utils"),
      "@css": pathResolve("src/assets/css"),
      "@img": pathResolve("src/assets/img"),
      "@store": pathResolve("src/store"),
      "@services": pathResolve("src/services")
    }
  },
  plugins: [
    {
      plugin: cracoLessPlugin
    }
  ]
}