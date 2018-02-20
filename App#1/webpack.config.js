// entry point
// output file
const path = require('path')
publicPath = path.join(__dirname, 'public')

module.exports = {
  entry: './src/app.js',
  output: {
    path: publicPath,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer:{
    contentBase: publicPath
  }
}
