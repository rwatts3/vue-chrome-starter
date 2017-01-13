'use strict'

module.exports = {
  popupTitle: 'popup page',
  optionsTitle: 'options page',
  babel: {
    babelrc: false,
    presets: [
      ['es2015', { modules: false }],
      'stage-1'
    ]
  },
  // postcss: [
  //   require('autoprefixer')({
  //     browsers: ['last 2 versions', '> 1%', 'ie > 8']
  //   }),
  //   require('precss')
  // ],
  cssModules: false
}
