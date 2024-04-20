// asyncronous version, need to provide a callback, you run that callback when your done:

const { readFile, writeFile} = require('fs')
console.log('start');

readFile('./content/first.txt', 'utf8' ,(err, result)=>{
    if(err){
        console.log(err)
        return;
    }
    //This is where you would set up the functionality
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err)
            return;
        }
        //This is where you would set up the functionality
        const second = result

        writeFile('./content/result-async.txt', 
        `Here is the async result:  ${first}, ${second}`, (err, result)=> {
            if (err) {
                console.log(err)
                return;
            }
            console.log('done with this task')
        })
    })
})
console.log('starting next task')

