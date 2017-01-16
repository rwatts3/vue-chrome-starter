module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name'
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description'
    },
    author: {
      type: 'string',
      message: 'Author'
    },
    routerMode: {
      type: 'list',
      required: true,
      message: 'Select router mode',
      choices: ['history', 'hash']
    },
  },
  completeMessage: 'To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev'
}