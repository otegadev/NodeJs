const os = require('os')
 
 //info about current user
 const user = os.userInfo()
 console.log(user)

 //system Uptime in seconds
 console.log(`System Uptime is ${os.uptime()} seconds`)

 const currentOS = {
        name: os.type(),
        release: os.release(),
        totalMem: os.totalmem(), 
        freeMem: os.freemem()
 }
 console.log(currentOS)()