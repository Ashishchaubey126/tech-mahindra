var fs = require("fs");

fs.writeFile("temp.txt","Welcome to your life","utf-8",function(error){
    if(error){
        console.log("Error : ", error)
    }else{
        console.log("File created with data ", "log from line 7");
    }
});
console.log("log from line 10")