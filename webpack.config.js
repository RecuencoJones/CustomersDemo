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
    publicPath: '/dist/',
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
      }, {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
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
  stats: 'minimal',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.plugins = (config.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      },
    }),
    new webpack.optimize.UglifyJsPlugin()
  ])

  config.devtool = '#source-map'
} else if (process.env.NODE_ENV === 'testing') {
  config.module.rules.push({
    enforce: 'post',
    test: /\.ts$/,
    loader: 'istanbul-instrumenter-loader',
    exclude: /test|node_modules|\.spec\.ts$/
  })
}

module.exports = config
