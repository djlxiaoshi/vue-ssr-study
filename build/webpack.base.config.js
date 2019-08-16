const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const projectRoot = path.resolve(__dirname, '..', 'src');

module.exports = {
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: projectRoot,
        exclude: /node_modules/,
      },
      {
        test: /\.less$/,
        use: ["vue-style-loader", "css-loader", "less-loader"] // 由于要使用ssr，这里使用vue-style-loader来替换style-loader
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.runtime.esm.js'
    }
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};
