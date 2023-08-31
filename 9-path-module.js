const path = require('path')

 console.log(path.sep)

 const filePath = path.join('/ROADMAP', 'JAVASCRIPT', 'async.js')
 console.log(filePath)

 const base = path.basename(filePath)
 console.log(base);

 const absolute = path.resolve(__dirname, 'ROADMAP', 'JAVASCRIPT', 'async.js')
 console.log(absolute)