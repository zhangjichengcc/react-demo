/*
 * @Author: zhangjicheng
 * @Date: 2022-07-18 16:30:01
 * @LastEditors: zhangjicheng
 * @LastEditTime: 2022-07-19 18:52:56
 * @FilePath: \webpack-demo\webpack.config.ts
 */
// Generated using webpack-cli https://github.com/webpack/webpack-cli

// const path = require("path");
import * as path from 'path';
// const HtmlWebpackPlugin = require("html-webpack-plugin");
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
import * as MiniCssExtractPlugin from 'mini-css-extract-plugin';
// const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
import * as WorkboxWebpackPlugin from 'workbox-webpack-plugin';
import { Configuration as WebpackOriginConfig } from 'webpack';

const isProduction = process.env.NODE_ENV == "production";

const stylesHandler = MiniCssExtractPlugin.loader;

const config: WebpackOriginConfig = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
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
      // {
      //   test: /\.(ts|tsx)$/i,
      //   loader: "ts-loader",
      //   exclude: ["/node_modules/"],
      // },
      {
        test: /\.(jsx|tsx)$/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-react", 
            {
              "runtime": "automatic"
            },
            "@babel/preset-typescript"
          ],
        }
      },
      {
        test: /\.(ts|js)?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript"],
          },
        },
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

  config.plugins?.push(new WorkboxWebpackPlugin.GenerateSW());
} else {
  config.mode = "development";
  config.devtool = "source-map";
}

export default config;


// import * as path from 'path';
// import * as webpack from 'webpack';
// // in case you run into any typescript error when configuring `devServer`
// import 'webpack-dev-server';

// const config: webpack.Configuration = {
//   mode: 'production',
//   entry: './foo.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'foo.bundle.js',
//   },
// };

// export default config;