const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { rootPath, srcPath, buildPath } = require('./path');

module.exports = {
  mode: 'development',

  devtool: 'inline-source-map',

  // 소스
  entry: ['@babel/polyfill', srcPath],

  // 번들 결과
  output: {
    filename: '[name].[hash].js',
  },

  // 상대 경로 보완
  resolve: {
    alias: {
      api: srcPath + '/api',
      assets: srcPath + '/assets',
      components: srcPath + '/components',
      containers: srcPath + '/containers',
      layouts: srcPath + '/layouts',
      modules: srcPath + '/modules',
      pages: srcPath + '/pages',
      store: srcPath + '/store',
    },
  },

  devServer: {
    hot: true,
    inline: true,
    port: 4000,
    contentBase: [buildPath],
  },

  // 모듈 로더
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: [
                [
                  '@babel/preset-env',
                  {
                    useBuiltIns: 'usage',
                    modules: false, // react hot loader 사용시 modules false 필수
                    debug: true,
                  },
                ],
                '@babel/preset-react',
              ],
              plugins: [
                '@babel/plugin-syntax-dynamic-import',
                '@babel/plugin-syntax-object-rest-spread', // ES2018
                '@babel/plugin-transform-async-to-generator', // ES2017
                ['@babel/plugin-proposal-class-properties', { loose: true }], // 실험적
                'react-hot-loader/babel', // react-hot-loader은 수정시 state 유지 시켜준다.
              ],
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [srcPath + '/assets/style/modules'], // component SCSS 내부에서 import시 사용하는 path설정.
              data: '@import "variables.scss"; @import "mixin.scss";', // 변수 전역에서 사용하도록 설정
            },
          },
        ],
      },
      /**
       * for ant design theme
       * https://ant.design/docs/react/customize-theme
       */
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'less-loader', // compiles Less to CSS
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },

  // 캐싱
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html',
      showErrors: true,
    }),
    new webpack.ProgressPlugin(),
    new Dotenv({
      path: `${rootPath}/.env.development`, // Path to .env file (this is the default)
    }),
  ],
};
