# cross-zip2

> Corss platform compress or extract `zip` archive, inspired by [feross/cross-zip](https://github.com/feross/cross-zip)

## Install

**Node.js 4 or higher**

    $ npm install cross-zip2 --save

## Usage

```js
// zip folder
const path = require('path');
const zip = require('cross-zip2');

zip.zip(path.join(__dirname, 'test.zip'), path.join(__dirname, 'test.js')).then(function(directoryPath) {
  console.log('compress', directoryPath, 'success.');
});

// unzip archive
zip.unzip(path.join(__dirname, 'test.zip'), path.join(__dirname, 'test')).then(function(directoryPath) {
  console.log('extract', directoryPath, 'success.');
});
```

## API

- zip.zip(archivePath, filePath)

  Add files to archive

- zip.zipSync(archivePath, filePath)

  Synchronous version of `zip`

- zip.unzip(archivePath, filePath)

  Extract files from archive

- zip.unzipSync(archivePath, filePath)

  Synchronous version of `unzip`
