const http = require('http');

const server = http.createServer((req, res) => {
if (req.url === "/"){
        res.end('Welcome to our homepage')
}
if (req.url === "/about"){
        res.end('Welcome to the about page')
}

res.end(
        `<h1>Oops!</h1>
        <p>We Can't seem to find this page</p>
        <a href = "/">back home</a>`
)
        
//res.write()
//res.end()
})

server.listen(9000)