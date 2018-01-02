const fs = require('fs');
const path = require('path');

const isGitInit = (dirPath) => fs.existsSync(path.resolve(dirPath || process.cwd(), '.git'));
module.exports = isGitInit;
