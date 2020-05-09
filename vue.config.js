//__dirname 绝对路径;代表的是当前文件的目录
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

const px2rem = require('postcss-px2rem')

const postcss = px2rem({
  remUnit: 75   //remUnit = 设计稿/等分数10， 网易严选首页750宽，正好相当于是设计稿宽度，所以值为750/10 = 75
})
module.exports = {
  outputDir:"damu",
  lintOnSave:false,
  devServer:{
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:4001',
        changeOrigin: true,
        pathRewrite: {'^/api' : ''}
      },
      '/initSearch': {
        target: 'https://m.you.163.com',
        changeOrigin: true,
        pathRewrite: {'^/initSearch' : ''}
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
  configureWebpack:{
    resolve: {
        alias: {
            'components': resolve('src/components'),
            'pages': resolve('src/pages'),
        }
    }
  }
}