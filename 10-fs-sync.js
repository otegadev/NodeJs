const { readFileSync, writeFileSync } = require('fs')
 
const first = readFileSync('./folder/subfolder/first.txt', 'utf8')
const second = readFileSync('./folder/subfolder/second.txt', 'utf8')

console.log(first, second)

writeFileSync('./folder/subfolder/third.txt',`Here is the result : ${first}, ${second}`, {flag: 'a'}) 