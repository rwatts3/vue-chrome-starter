'use strict'

module.exports = {
  popupTitle: 'popup page',
  optionsTitle: 'options page',
  vendor: [
    'vue',
    'vue-router'
  ],
  babel: {
    babelrc: false,
    presets: [
      ['es2015', { modules: false }],
      'stage-1'
    ]
  },
  postcss: [
    require('postcss-cssnext')({
      browsers: ['last 2 versions', 'ie > 8']
    })
  ],
  cssModules: false
}
