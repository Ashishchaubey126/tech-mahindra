var fs = require("fs");

/* 
fs.mkdir("data",function(err){
    if(err){
        console.log("Error ", err);
    }else{
        console.log("directory created");
    }
});
*/

fs.access("data",function(err){
    if(err){
        console.log("Error accessing folder ", err );
    }else{
        // console.log("Folder exists");
        fs.writeFile("data/temp.txt","Welcome to your life, there's no turning back","utf-8", function(err){
            if(err){
                console.log("Error creating file in data folder ", err)
            }else{ 
                console.log("File created in data folder")
            }
        });

    }
});