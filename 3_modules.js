const name = require('./4-firstmod')
const sayHi = require('./5-utils')
const data = require('./6-alternative_flavor')
require('./7-mind-grenade')
console.log(name)
console.log(data)

sayHi(name.peter);
sayHi(name.john);
