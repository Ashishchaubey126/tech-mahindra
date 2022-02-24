let http = require("http");
let fs = require("fs");

let server = http.createServer((req, res)=>{
    if(req.url == "favicon.ico"){
        res.write("");
    }else if(req.url == "/"){
        let htmldata = fs.readFileSync("./index.html","utf-8");
        res.write(htmldata);
        res.end();
    }else{
        fs.readFile("./"+req.url+".html","utf-8",function(err, data){
            if(err){
                res.write(fs.readFileSync("./notfound.html","utf-8")); 
                res.end();
           }else{
               res.write(data);
               res.end();
           }
       })
    }
});

server.listen(2020,"localhost",()=>  console.log("server is now live on localhost:2020"))
