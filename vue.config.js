const { defineConfig } = require('@vue/cli-service')
const { resolve } = require('path')
const alias = {
  '@': joinUrl('./src')
}

function joinUrl(src) {
  return resolve(__dirname, src)
}
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: { alias },
    output: {
      library: `club`,
      libraryTarget: 'umd',
    }
  },
  devServer: {
    port: 8888,
    headers: {
      'Access-Control-Allow-Origin': '*',
    }
  }
})
