const path = require('path')
const webpackConfig = require('../../webpack.config')

module.exports = (config) => {
  config.set({
    basePath: '../../',
    files: [
      'test/config/MochaGlobals.ts',
      'test/specs/unit/**/*.spec.ts'
    ],
    preprocessors: {
      'test/config/MochaGlobals.ts': ['webpack'],
      'test/specs/unit/**/*.spec.ts': ['webpack']
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
    reporters: ['dots', 'coverage-istanbul'],
    coverageIstanbulReporter: {
      dir: 'test/results',
      reports: ['lcov', 'text-summary'],
      fixWebpackSourcePaths: true
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_DISABLE,
    client: {
      captureConsole: false
    },
    browsers: ['PhantomJS'],
    autoWatch: true,
    singleRun: true
  })
}
