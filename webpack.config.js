const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const EslintWebpackPlugin = require("eslint-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: path.join(__dirname, "src", "index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|svg)$/i,
        type: 'asset/resource'
      }
    ],
  },
  resolve: {
    extensions: ["*",".js", ".jsx", ".ts", ".tsx"],
    alias: {
      '@constants': path.resolve(__dirname, './src/constants'),
      '@app': path.resolve(__dirname, './src/app'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@ui': path.resolve(__dirname, './src/ui'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@types': path.resolve(__dirname, './src/types'),
      '@theme': path.resolve(__dirname, './src/theme'),
      '@router': path.resolve(__dirname, './src/router'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@components': path.resolve(__dirname, './src/components'),
      '@localization': path.resolve(__dirname, './src/localization'),
    },
  },
  devServer: {
    static: {
        directory: path.join(__dirname, '/')
    },
    historyApiFallback: true,
  },
  plugins: [
    new EslintWebpackPlugin({
      extensions: ["tsx", 'js'],
      emitWarning: false,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
    new Dotenv()
  ],
};