const webpackConfig = require('../../webpack.config')

webpackConfig.plugins = []

module.exports = (config) => {
  config.set({
    basePath: '../../',
    files: [
      'test/config/MochaGlobals.ts',
      'test/specs/unit/**/*.spec.ts'
    ],
    preprocessors: {
      'test/config/MochaGlobals.ts': ['webpack'],
      'test/specs/unit/**/*.spec.ts': ['webpack', 'coverage']
    },
    exclude: [],
    frameworks: [
      'mocha',
      'chai',
      'sinon',
      'chai-sinon',
      'source-map-support'
    ],
    plugins: [
      'karma-*'
    ],
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
    },
    mime: {
      'text/x-typescript': ['ts', 'tsx']
    },
    reporters: [
      'dots'
    ],
    port: 9876,
    colors: true,
    logLevel: 'ERROR',
    browsers: ['PhantomJS'],
    autoWatch: true,
    singleRun: true
  })
}
