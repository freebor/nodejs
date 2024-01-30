const fs = require("fs");

fs.link("myFile.txt", "newPath.txt", (err)=>{
    if (err) console.log(err)
    console.log("this is a new path");
})

fs.unlink("myFile.txt", (err)=>{
    if(err) console.log(err);
    console.log("cleared old file");
})