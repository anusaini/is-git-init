# is-git-init

Check if git has been initialized in a repo.

## Install

```bash

    npm i -D is-git-init

```

## Usage

```javascript

  const isGitInit = require('is-git-init')

  isGitInit() // looks for .git directory in `process.cwd()`
  // OR
  isGitInit(currentDirectory) // looks for .git directory in current directory

```

## note

Use [`node-path-choice`](https://github.com/gitfaf/node-path-choice) package to set `process.env.NODE_PATH` in `index.js` and `Gruntfile.js`.

## License

MIT &copy; 2018 Anubhav Saini
