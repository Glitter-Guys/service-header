const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// Build directory is where the bundle file will be placed
const BUILD_DIR = path.resolve(__dirname, 'client/dist');
// App directory is where all of your raw JSX files will be placed
const APP_DIR = path.resolve(__dirname, 'client/src');

module.exports = {
  entry: APP_DIR + "/index.jsx",
  output: {
    path: BUILD_DIR,
    filename: "bundle.js"
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
      },
      {
        test: /\.css$/,
        use: [
          {
             loader: 'style-loader',
          },
          {
             loader: 'css-loader',
             options: {
                sourceMap: true,
                modules: true,
                localIdentName: '[local]___[hash:base64:5]'
               }
          }
          ],
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