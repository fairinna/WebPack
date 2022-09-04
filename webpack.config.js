const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebPackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './index.js',
    analytics: './analytics.js',
  },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.json', '.png'],
    alias: {
      '@models': path.resolve(__dirname, 'src/models'),
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    port: 4200,
  },

  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
    }),
    new CleanWebpackPlugin(),
    new CopyWebPackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/saleSing.png'),
          to: path.resolve(__dirname, 'dist'),
        },
      ],
    }),
  ],
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.(png|svg|jpg|gif)$/i,

        type: 'asset/resource',
      },
      { test: /\.(ttf|woff|woff2|eot)$/i, type: 'asset/resource' },
      { test: /\.xml$/, use: ['xml-loader'] },
      { test: /\.csv$/, use: ['csv-loader'] },
    ],
  },
};
