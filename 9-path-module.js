const { log } = require('console')
const path = require('path')

// your systems personalised seporator

console.log(path.sep)

//this gives you the normalised path, sorts out your slahes e.t.c.:

const filePath = path.join('content', 'subfolder', 'test.txt')

console.log(filePath)

const baseName = path.basename(filePath)

console.log(baseName)

// return an absoloute path: reloves a few chunks on paths together

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')

console.log(absolute)