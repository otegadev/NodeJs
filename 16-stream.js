const {createReadStream} = require('fs');

const stream = createReadStream('./folder/subfolder/big.txt', {
  highWaterMark: 900, encoding: 'utf8'})

stream.on('data', (result) => {
  console.log(result)
})

stream.on('error', (error) => console.log(error))
