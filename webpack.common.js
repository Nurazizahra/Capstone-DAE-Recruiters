const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.join(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
      favicon: './src/public/logo.png',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, 'src/public/'),
          to: path.join(__dirname, 'dist/'),
        },
      ],
    }),
    new Dotenv(),
  ],
  resolve: {
    fallback: {
     "crypto": require.resolve("crypto-browserify"),
     "stream": require.resolve("stream-browserify"),
     "vm": require.resolve("vm-browserify"),
    }
  },
};
