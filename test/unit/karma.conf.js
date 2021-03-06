// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

var webpackConfig = require('../../../baxi-ui/build/webpack.test.config')

module.exports = function karmaConfig (config) {
  config.set({
    browsers: ['PhantomJS_mobile'],
    browserDisconnectTimeout: 300000,
    browserNoActivityTimeout: 300000,
    customLaunchers:{
      PhantomJS_mobile: {
        base: 'PhantomJS',
        options: {
          viewportSize: {
            width: 375,
            height: 667
          }
        }
      }
    },
    frameworks: ['mocha', 'sinon-chai', 'phantomjs-shim'],
    reporters: ['spec', 'coverage'],
    files: ['./index.js'],
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  })
}
