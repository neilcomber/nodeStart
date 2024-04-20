//File System fs - Can do it Synchrounousley (blocking) or asyncronousley (nonblocking)

// syncronous way
const { readFileSync, writeFileSync } = require('fs')

console.log('start');

// utf8 is my coding so node knows how to decode the file
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')


// if file doesn't exit node will create it, if it does exist node will overwrite it completely
writeFileSync('./content/result-sync.txt', `Here is the result: ${first}, ${second}`)

console.log('done with this task')
console.log('starting the next one')

// if you just want to append the file not overwrite:
writeFileSync('./content/result-sync.txt', ` just adding this extra text in`, {flag: 'a'})