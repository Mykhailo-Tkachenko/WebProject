// const webpack = require('webpack')
// eslint-disable-next-line no-undef
const path = require('path')
// eslint-disable-next-line no-undef
const HtmlWebpackPlugin = require('html-webpack-plugin')
// eslint-disable-next-line no-undef
const ESLintPlugin = require('eslint-webpack-plugin')
// const dotenv = require('dotenv')

// const localEnv = dotenv.config().parsed

// eslint-disable-next-line no-undef
module.exports = (env) => {
  return {
    entry: './src/index.js',
    mode: 'development', //env.dev === true ? 'development' :
    output: {
      filename: 'main.js',
      // eslint-disable-next-line no-undef
      path: path.resolve(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-react', '@babel/preset-env']
            }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html'
      }),
      new ESLintPlugin({
        exclude: ['node_modules', 'dist'],
        // eslint-disable-next-line no-undef
        context: path.resolve(__dirname, 'src')
      })
      // new webpack.DefinePlugin({
      //     'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL),
      //     'process.env.MAP_KEY': localEnv.MAP_KEY
      //         ? JSON.stringify(localEnv.MAP_KEY)
      //         : JSON.stringify(process.env.MAP_KEY)
      // })
    ],
    devServer: {
      static: {
        // eslint-disable-next-line no-undef
        directory: path.join(__dirname, 'dist')
      },
      compress: false,
      port: 3000,
      historyApiFallback: {
        index: 'index.html'
      }
    },
    // module: {
    //     rules: [
    //         {
    //             test: /.(js|jsx)$/,
    //             exclude: /node_modules/,
    //             use: {
    //                 loader: 'babel-loader',
    //                 options: {
    //                     presets: ['@babel/preset-react', '@babel/preset-env']
    //                 }
    //             }
    //         },
    //         {
    //             test: /\.css$/i,
    //             use: [
    //                 'style-loader',
    //                 {
    //                     loader: 'css-loader',
    //                     options: {
    //                         esModule: false,
    //                         modules: {
    //                             localIdentName: '[local]--[name]--[hash:base64:5]'
    //                         }
    //                     }
    //                 }
    //             ]
    //         }
    //     ]
    // },

    devtool: env.dev ? 'eval-source-map' : 'source-map'
  }
}
