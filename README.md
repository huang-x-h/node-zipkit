# node-zipkit

> Corss platform compress or extract `zip` archive, inspired by [feross/cross-zip](https://github.com/feross/cross-zip)

## Install

**Node.js 4 or higher**

    $ npm install node-zipkit --save

## Usage

```js
// zip folder
const path = require('path');
const zipkit = require('node-zipkit');

zipkit.zip(path.join(__dirname, 'test.zip'), path.join(__dirname, 'test.js')).then(function(directoryPath) {
  console.log('compress', directoryPath, 'success.');
});

// unzip archive
zipkit.unzip(path.join(__dirname, 'test.zip'), path.join(__dirname, 'test')).then(function(directoryPath) {
  console.log('extract', directoryPath, 'success.');
});
```

## API

- zipkit.zip(archivePath, filePath)

  Add files to archive

- zipkit.zipSync(archivePath, filePath)

  Synchronous version of `zip`

- zipkit.unzip(archivePath, filePath)

  Extract files from archive

- zipkit.unzipSync(archivePath, filePath)

  Synchronous version of `unzip`
