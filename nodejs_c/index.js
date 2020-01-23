const greetModule = require('./build/Release/greet.node');
var express = require("express");
var app = express();
var server = require("http").createServer(app);
var bodyParser = require("body-parser");
const fs = require("fs");
const http = require("http");
//
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);
//
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',(req, res)=>{
    res.sendFile(__dirname + '/boxes.html');
});

app.post('/submit',(req, res)=>{
    
    const x = req.body.d;
    console.log(greetModule.greetHello(x).toString(10));
    res.writeHead(200, {
                            'Content-Type': 'text/html',
                            'Content-Length': 10000,
                            'Expires': new Date().toUTCString()
                        });
                        res.end(greetModule.greetHello(x).toString(10)); 
  	
             
    
                               
});

server.listen(8000);