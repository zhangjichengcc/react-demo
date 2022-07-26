/*
 * @Author: zhangjicheng
 * @Date: 2022-07-18 16:30:01
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-07-27 00:20:37
 * @FilePath: /webpack5.0-demo/webpack.config.ts
 */
// Generated using webpack-cli https://github.com/webpack/webpack-cli

import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { merge } from 'webpack-merge';
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';

const isProduction = process.env.NODE_ENV == "production";
const stylesHandler = MiniCssExtractPlugin.loader;

const defaultConfig: webpack.Configuration = {
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
        test: /\.tsx$/,
        loader: 'babel-loader',
        options: {
          'presets': [["@babel/preset-react", {
            "runtime": "automatic"
          }],
          '@babel/preset-typescript']
        }
      },
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.less$/i,
        use: [
          stylesHandler, 
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              modules: true,
              importLoaders: 1,
            },
          },
          "postcss-loader", 
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                strictMath: true,
              },
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        use: [
          stylesHandler,
          'css-loader',
          "postcss-loader"
        ],
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
    alias: {
      "@": path.resolve(__dirname, '/src'),
    }
  },
};

const config = merge(defaultConfig, {
  // mode: isProduction ? "production" : "development",
  devtool: isProduction ? false : "source-map",
  // plugins: [
  //   // new WorkboxWebpackPlugin.GenerateSW(),
  // ]
})

export default config;