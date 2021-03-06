const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const path = require("path");
const mode = process.env.NODE_ENV === 'dev' ? 'development' : 'production'
const watch = process.env.NODE_ENV === 'watch'

module.exports = {
  entry: {
    index: "./src/page/homepage/index.js",
  },
  output: {
    path: path.join(__dirname, "dist"),
    // publicPath: "./" 会给引入的文件前面加个前缀，主要是用于生产环境
    filename: "[name].js",
  },
  mode,
  watch,
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        use: "babel-loader",
      },
      {
        test: /.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      { test: /\.(hbs|handlebars)$/, 
        loader: "handlebars-loader",
        options: {
          runtime: path.resolve(__dirname, './src/config/handlebars.js'),
        }
        // query: { 
        //   helperDirs: [
        //     path.join(__dirname, './src/helpers')
        //   ]
        // }
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, `./src/page/homepage/index.html`),
      filename: "index.html",
      chunks: ["index", "commons"],
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery",
      "window.$": "jquery",
    }),
  ],
  optimization: {
    splitChunks: {
      minSize: 0,
      cacheGroups: {
        common: {
          name: "commons",
          chunks: "all",
          minChunks: 2, // 引用大于两次就独立打包出来
          priority: 10,
        },
      },
    },
  },
  devServer: {
    hot: true,
  },
  resolve: {
    extensions: ['.hbs', '.handlebars', '.js', '.jsx'],
  }
};
