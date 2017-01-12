'use strict'

module.exports = {
  port: '4000',
  title: '移动审批',
  babel: {
    babelrc: false,
    presets: [
      ['es2015', { modules: false }],
      'stage-1'
    ]
  },
  postcss: [
    require('autoprefixer')({
      browsers: ['last 2 versions', '> 1%', 'ie > 8']
    }),
    require('precss')
  ],
  cssModules: false
}
