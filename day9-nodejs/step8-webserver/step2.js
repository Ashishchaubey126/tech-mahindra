let http = require("http");
let fs = require("fs");

let server = http.createServer((req, res)=>{
    // console.log(req.url);
    if(req.url == "/"){
        let htmldata = fs.readFileSync("./index.html","utf-8");
        res.write(htmldata);
    }else{
       fs.readFile("."+req.url+".html","utf-8", (error, data)=>{
           // console.log(req.url+".html")
           if(error){
                let tempdata = fs.readFileSync("./notfound.html","utf-8");
                res.write(tempdata);
                console.log("Error ", error);
            }else{
                res.write(data);
           }
       });
       
    }
    res.end();
});

server.listen(2020,"localhost",()=>  console.log("server is now live on localhost:2020"))
