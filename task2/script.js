const http = require("http")
const fs = require("fs");
let homeData;
let aboutData;
let contactData;

fs.readFile("home.html", (err, data)=>{
    if(err){
        console.log(err);
    }else{
        homeData = data
    }
});

fs.readFile("about.html", (err, data) =>{
    if(err){
        console.log(err);
    }else{
        aboutData = data
    }
})

3
fs.readFile("contact.html", (err, data) =>{
    if(err){
        console.log(err);
    }else{
        contactData = data
    }
})


http.createServer((req, res) => {
    let url = req.url

    if (url === "/") {
        res.end(homeData)
    }else if(url === "/about"){
        res.end(about)
    }else if(url === "/contact"){
        res.end(contact)
    }else{
        res.end("page not found!!!")
    }
}).listen(2020)