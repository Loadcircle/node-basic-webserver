const http = require('http');
console.clear();
http.createServer((request, response)=>{
    
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end();
})
.listen(8080);

console.log('Listing to port 80');