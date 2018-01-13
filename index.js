const fs = require('fs')
const path = require('path')

function isGitInit(dirPath) {
  return fs.existsSync(path.resolve(dirPath || process.cwd(), '.git'))
}

module.exports = isGitInit
