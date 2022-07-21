/*
 * @Author: zhangjicheng
 * @Date: 2022-07-18 16:30:01
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-07-22 00:10:56
 * @FilePath: /webpack5.0-demo/webpack.config.ts
 */
// Generated using webpack-cli https://github.com/webpack/webpack-cli

import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';

const isProduction = process.env.NODE_ENV == "production";
const stylesHandler = MiniCssExtractPlugin.loader;

const config: webpack.Configuration = {
  // mode: 'production',
  entry: './src/app.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'foo.bundle.js',
  },
  devServer: {
    hot: true,
    open: true,
    host: "localhost",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
    }),

    new MiniCssExtractPlugin(),

    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        // 同时认识ts jsx js tsx 文件
        test: /\.(t|j)sx?$/,
        use: 'babel-loader',
      },
      {
        test: /\.less$/i,
        use: [stylesHandler, "css-loader", "postcss-loader", "less-loader"],
      },
      {
        test: /\.css$/i,
        use: [stylesHandler, "css-loader", "postcss-loader"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
  },
};

if (isProduction) {
  config.mode = "production";
  // config.plugins?.push(new WorkboxWebpackPlugin.GenerateSW());
} else {
  config.mode = "development";
  config.devtool = "source-map";
}

export default config;