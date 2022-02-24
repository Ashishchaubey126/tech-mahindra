let http = require("http");
let fs = require("fs");

let server = http.createServer((req, res)=>{
    // console.log(req.url);
    if(req.url == "/"){
        let htmldata = fs.readFileSync("./index.html","utf-8");
        res.write(htmldata);
    }else if(req.url == "/about"){
        let htmldata = fs.readFileSync("./about.html","utf-8");
        res.write(htmldata);
    }else if(req.url == "/contact"){
        let htmldata = fs.readFileSync("./contact.html","utf-8");
        res.write(htmldata);
    }else if(req.url == "/product"){
        let htmldata = fs.readFileSync("./products.html","utf-8");
        res.write(htmldata);
    }else{
        let htmldata = fs.readFileSync("./notfound.html","utf-8");
        res.write(htmldata);
    }
    res.end();
});

server.listen(2020,"localhost",()=>  console.log("server is now live on localhost:2020"))
