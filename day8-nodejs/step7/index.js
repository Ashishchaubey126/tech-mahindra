let http = require("http");

let server = http.createServer(function(req, res){
    // res.write();
    // res.end("welcome to your life");
    res.write("<!DOCTYPE html>");
    res.write("<html lang='en'><head>");
    res.write("<meta charset='UTF-8'><meta http-equiv='X-UA-Compatible' content='IE=edge'><meta name='viewport' content='width=device-width, initial-scale=1.0'>");
    res.write("<title>Document</title></head>");
    res.write("<body>");
    res.write(`
    <h1> Tech Mahindra </h1>
    <hr/>
    <p>
        This is Tech Mahindra India's web page
    </p>
    `);
    res.write("</body></html>");

    res.end();
});

server.listen(1010,"localhost",function(error){
    if(error){
        console.log("Error ", error);
    }else{
        console.log("server is now live on localhost:1010");
    }
});

