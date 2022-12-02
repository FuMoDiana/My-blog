const path = require('path')
const resolve = (path) => path.resolve
(__dirname,path)
const CracoLessPlugin = require('craco-less');
module.exports = {
  //less
  plugins: [
    {
      plugin: CracoLessPlugin,
    },
  ],
  //webpack
  webpack:{
    alias:{
      "@":resolve("src"),
      "components":resolve("src/components"),
      "utils":resolve("src/utils")
    }
  },
}