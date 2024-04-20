const os = require('os')

// info on curent os user:

const user = os.userInfo()

console.log(user)

// how long computer has been running (in seconds)

const uptime = os.uptime()

console.log(uptime)

//current os

const currentOS = {
    name: os.type(), 
    release: os.release(), 
    totalMem: os.totalmem(), 
    freeMem: os.freemem()
}

console.log(currentOS)