'use strict';

const child_process = require('child_process');
const path = require('path');
const rimraf = require('rimraf');
const bin = path.join(__dirname, process.arch === 'x64' ? '7z-extra/x64/7za.exe' : '7z-extra/7za.exe');

const isWin32 = () => {
  return process.platform === 'win32';
};

const getZipCommand = (archivePath, directoryPath) => {
  if (isWin32()) {
    return `${bin} a ${archivePath} ${directoryPath}`;
  } else {
    const dirPath = path.dirname(archivePath);
    const fileName = path.basename(archivePath);

    return `cd ${dirPath} && zip -r -y ${fileName} ${directoryPath}`;
  }
};

const getUnZipCommand = (archivePath, directoryPath) => {
  if (isWin32()) {
    return `${bin} x -o${directoryPath} ${archivePath}`;
  } else {
    return `unzip -o ${archivePath} -d ${archivePath}`;
  }
};

/**
 * Add files to archive
 *
 * @param {string} archivePath archive file path
 * @param {string} directoryPath folde or file path to append to archive
 * @returns {Promise}
 */
const zip = (archivePath, directoryPath) => {
  rimraf.sync(archivePath);

  return new Promise((resovle, reject) => {
    child_process.exec(getZipCommand(archivePath, directoryPath), err => {
      if (err) reject(err);
      else resovle(directoryPath);
    })
  });
};
/**
 * Synchronous version of zip
 *
 * @param {string} archivePath archive file path
 * @param {string} directoryPath folde or file path to append to archive
 */
const zipSync = (archivePath, directoryPath) => {
  child_process.execSync(getZipCommand(archivePath, directoryPath));
};

/**
 * Extract files from archive
 *
 * @param {string} archivePath archive file path
 * @param {string} directoryPath folde or file path to append to archive
 * @returns {Promise}
 */
const unzip = (archivePath, directoryPath) => {
  return new Promise((resovle, reject) => {
    child_process.exec(getUnZipCommand(archivePath, directoryPath), err => {
      if (err) reject(err);
      else resovle(directoryPath);
    })
  });
};

/**
 * Synchronous version of unzip
 *
 * @param {string} archivePath archive file path
 * @param {string} directoryPath folde or file path to append to archive
 */
const unzipSync = (archivePath, directoryPath) => {
  child_process.execSync(getUnZipCommand(archivePath, directoryPath));
};

module.exports = {
  zip: zip,
  zipSync: zipSync,
  unzip: unzip,
  unzipSync: unzipSync
};
