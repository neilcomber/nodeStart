// express uses the http module.

const http = require('http')

// req = incoming request
const server = http.createServer((req, res)=>{
    console.log(req.url)
    if(req.url === '/') {
        res.end('Welcome to our home page')
    }
    else if (req.url === '/about') {
        res.end('This is our about page')
    } else {
        res.end(`
        <h1>Oops!!</h1>
        <p>We can't seem to find the page that you are looking for</p>
        <a href='/'>back home</a>
        `)
    }
        
    
   
})

server.listen(3000)