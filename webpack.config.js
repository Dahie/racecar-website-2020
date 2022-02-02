const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  devtool: 'eval-cheap-module-source-map',
  entry: {
    main: path.join(__dirname, '/source/assets/javascripts/main.js'),
    drive: path.join(__dirname, '/source/javascripts/site.js'),
  },

  output: {
    path: path.join(__dirname, '.tmp/dist'),
    publicPath: '/',
    filename: 'assets/javascripts/[name].bundle.js'
  },
  resolve: {
    modules: [
      __dirname + '/assets/javascript',
      __dirname + '/assets/images',
      __dirname + '/assets/css',
      __dirname + '/node_modules',
    ],
    extensions: ['.js', '.json', '.css', '.scss']
  },
  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|svg|ico|jpg|jpeg|png)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      },
      {
        test: /\.(css)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
  ],
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, './build')
  }
};