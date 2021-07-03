const http = require("http");
const fs = require("fs");
const {execPath} = require('process');

const hostname = '127.0.0.1'
const port = 8088

http.createServer((req, res) => {
    let path = "./views/"
    
    if (req.url === "/" || req.url==="/home") {
        path += "home.html"
    }  else if (req.url === "/about" || req.url==="/about-us") {
        path += "about.html"
    } else if (req.url === "/contact") {
        path += "contact.html"
    } else {
        path += "/error.html"
    }

fs.readFile(path, (err, data)=>{
    if (err) 
return;
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end(data);
})
})
.listen(port, hostname,()=>{
console.log(`Server listening on port http://${hostname}:${port}/`)
})