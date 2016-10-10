var webpackConfig = require('./webpack.test');

module.exports = function (config) {
  var _config = {
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      // { pattern: /app\/**\/\*spec.ts/, watched: false }
      { pattern: './config/karma.test.js', watched: false }
    ],

    preprocessors: {
      // 'app/polyfills.ts': ['webpack', 'sourcemap']
      // 'app/vendor.ts': ['webpack', 'sourcemap']
      // 'app/app.ts': ['webpack', 'sourcemap']
      './config/karma.test.js': ['webpack', 'sourcemap']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: true
    },

    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true
  };

  config.set(_config);
};
