const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const projectRoot = path.resolve(__dirname, '..', 'src');

function resolve (dir) {
  return path.resolve(__dirname, '..', dir);
}

module.exports = {
  entry: {
    // test: resolve('src/entry-client.js'),
    test: resolve('src/test.js'),
  },
  // 此处告知 server bundle 使用 Node 风格导出模块(Node-style exports)
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: 'test.js',
    chunkFilename: '[name].bundle.js'
  },
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
    // alias: {
    //   'vue$': 'vue/dist/vue.runtime.esm.js'
    // }
  },
  plugins: [
    new VueLoaderPlugin()
  ]
};

