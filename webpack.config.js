const path = require('path'),
  webpack = require('webpack')

const config = {
  entry: {
    app: './src/App.ts',
    vendor: './src/Vendor.ts'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader'
      }, {
        test: /\.html$/,
        use: 'html-loader'
      }, {
        test: /\.s[a|c]ss$/,
        use: [
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader'
          }, {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.ts']
  },
  devServer: {
    publicPath: '/dist/',
    noInfo: true,
    historyApiFallback: true
  },
  devtool: '#inline-source-map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ]
}

if (process.env.NODE_ENV) {
  config.plugins = (config.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      },
    }),
    new webpack.optimize.UglifyJsPlugin()
  ])

  config.devtool = '#source-map'
}

module.exports = config
