let http = require("http");
let fs = require("fs");

let server = http.createServer(function(req, res){
    res.write(fs.readFileSync("index.html","utf-8"));
    res.end();
});

server.listen(1010,"localhost",function(error){
    if(error){
        console.log("Error ", error);
    }else{
        console.log("server is now live on localhost:1010");
    }
});

