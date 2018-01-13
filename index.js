const fs = require('fs');
const path = require('path');

module.exports = function isGitInit(dirPath) {
  return fs.existsSync(path.resolve(dirPath || process.cwd(), '.git'));  
};
