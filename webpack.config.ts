/*
 * @Author: zhangjicheng
 * @Date: 2022-04-28 11:34:45
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-05-05 18:28:49
 * @FilePath: \webpack-demo\webpack.config.ts
 */

import * as path from 'path';
import * as webpack from 'webpack';
import { Configuration as WebpackOriginConfig } from 'webpack';
import { Configuration as WebpackDevServerOriginConfig } from 'webpack-dev-server';
import * as yaml from 'yamljs';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

/** webpack 配置添加提示 */
type WebpackConfigAny = {
  [key: string]: any
}

type WebpackDevServerConfig = WebpackDevServerOriginConfig &
  WebpackConfigAny

type WebpackConfig = WebpackOriginConfig & {
  devServer: WebpackDevServerConfig
} & WebpackConfigAny

const defineConfig = (config: WebpackConfig): WebpackConfig => config

/** end */

module.exports = defineConfig({
  mode: 'development',
  entry: [
    './src/app.ts',
  ],
  target: 'web',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devtool: 'inline-source-map',
  // ? 展示详细错误信息
  stats: {
    children: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', "@babel/preset-typescript"]
          }
        }
      },
      {
        test: /\.less$/i,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
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
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.ejs$/,
        use: [
          {
            loader: 'ejs-loader',
            options: {
              esModule: false,
              variable: 'data',
            },
          },
        ],
      },
      // 加载yaml文件
      {
        test: /\.yaml/i,
        type: 'json',
        parser: {
          parse: yaml.parse,
        },
      },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: "underscore"
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/document.ejs'),
      inject: true,
      filename: 'index.html',
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.ejs'],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    fallback: { 
      // ! 解决ejs Can't resolve 'fs'
      // ? https://stackoverflow.com/questions/66352613/module-not-found-when-run-build-webpack-with-ejs-module
      "fs": false,  
      "path": require.resolve("path-browserify"),
    }
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 9006,
    open: true,
  },
});
