const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
// Build directory is where the bundle file will be placed
var BUILD_DIR = path.resolve(__dirname, 'client/dist');
// App directory is where all of your raw JSX files will be placed
var APP_DIR = path.resolve(__dirname, 'client/src');

module.exports = {
  entry: APP_DIR + "/app.jsx",
  output: {
    path: BUILD_DIR,
    filename: "bundle.js",
    publicPath: '/'
  },
  devServer: {
  contentBase: BUILD_DIR
    },   
  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
plugins: [
    new HtmlWebPackPlugin({
      template: APP_DIR + '/index.html',
      filename: "./index.html"
    })
  ]
};