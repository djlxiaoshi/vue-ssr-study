/* webpack.server.js */
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
