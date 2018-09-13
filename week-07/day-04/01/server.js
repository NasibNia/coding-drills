// SERVE UP INDEX AND ADD.HTML IN THIS FILE AT THE PORT OF YOUR CHOICE.
var express = require ("express");
var bodyParser = require ("body-parser");
var path = require("path");

var app = express();
var PORT  = 8080;

app.listen(PORT, function(){
    console.log("server listenign on http://localhost:" + PORT);
});

app.get("/", function(req,res){
    res.sendFile(path.join(__dirname , "./public/index.html"));
});

app.get("/add", function(req,res){
    res.sendFile(path.join(__dirname , "./public/add.html" ));
});