const http = require("http");
const fs= require("fs");
const express = require("express");

/*
const myServer = http.createServer((req,res)=>{
    // console.log("New Req Rec.");
    // res.end("Hello From Server");

    const log = `${Date.now()} ${req.url}:New Req Received\n`;
    fs.appendFile("log.txt", log ,(err,data)=>{
        res.end("Hello From Server Again");
    });
});

myServer.listen(8000, ()=> console.log("Server Started!"));
*/

const app = express(); //app is a handler

app.get('/',(req,res)=>{
    return res.send("hello from home page");
});

app.get('/about' ,(req,res)=>{
    return res.send("hello form about page");
});

// const myServer= http.createServer(app);
// myServer.listen(8000,()=> console.log("Server Started"));


app.listen(8000, ()=> console.log("server started!"));