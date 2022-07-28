/*
 * @Author: zhangjicheng
 * @Date: 2022-07-18 16:30:01
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-07-28 17:24:40
 * @FilePath: \webpack-demo\webpack.config.ts
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
    // browserHistory 模式下，URL 是指向真实 URL 的资源路径，当通过真实 URL 访问网站的时候（首页），这个时候可以正常加载我们的网站资源，而用户在非首页下手动刷新网页时，由于路径是指向服务器的真实路径，但该路径下并没有相关资源，用户访问的资源不存在，返回给用户的是 404 错误
    historyApiFallback: true,
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
        test: /\.tsx?$/,
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
              // modules: true,
              modules: {
                // mode: "local",
                // auto: true,
                // exportGlobals: true,
                localIdentName: "[path][name]__[local]_[hash:base64:5]",
                // localIdentName: "[path][name]__[local]--[hash:base64:5]",
                // localIdentContext: path.resolve(__dirname, "src"),
                // localIdentHashSalt: "my-custom-hash",
                // namedExport: true,
                // exportLocalsConvention: "camelCase",
                // exportOnlyLocals: false,
              },
              importLoaders: 1,
            },
          },
          // "postcss-loader", 
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                  ],
                ],
              },
            },
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
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
    extensions: [".tsx", ".ts", ".jsx", ".js", ".less"],
    alias: {
      "@": path.resolve(__dirname, 'src'),
      "@components": path.resolve(__dirname, 'src/components'),
      "@utils": path.resolve(__dirname, 'src/utils'),
      "config": path.resolve(__dirname, 'config'),
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