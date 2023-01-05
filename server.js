// syntax for creating the server 

const http = require("http");
const port = 8081;

http.createServer((req ,res)=>
{
    res.writeHead(200,{
        "content-Type" : "text/html"
    });
    res.write("<h1>My first server is created and i used nodemon to run server automatically</h1>");
    res.end();
}).listen(port, ()=>
{
    console.log(`our port is started on ${port}`);
});


// to check the server on brower use : http://localhost:8081;