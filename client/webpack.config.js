const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html',
        title: 'webpack plugin'
      }),
      new WebpackPwaManifest({
        name: 'Just Another Text Editor',
        short_name: 'JATE',
        description: 'a simple text editor that can handle JavaScript',
        start_url: './',
        publicPath: '/.',
        icons:[
          {
            src: path.resolve('src/images/logo.png'),
            size: '512x512',
            destination: path.join('assets', 'logo')
          }
        ]
      }),
      new InjectManifest({
        swSrc: './src-sw.js',
        swDest: 'service-worker.js'
      })
    ],

    module: {
      rules: [
        {
          test: /\.(png)$/i,
          type: 'asset/resource'
        },
        {
          test: /\.css$/i,
          use: ['css-loader']
        },
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use:{
            loader: 'babel-loader',
            options:{
              presets:[
                ['@babel/preset-env', { targets: "defaults" }]
              ]
            }
          }
        }
      ],
    },
  };
};
