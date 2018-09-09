var express = require('express');

var app = express();
var PORT = 3000;

// create the server 
app.listen(PORT, function(){
    console.log("server listening on http://localhost:" + PORT);
});

app.get("/:string", function(req,res){
    var stringParam = req.params.string;
    var response = evenLetters(stringParam);
    res.json(response);
});

var alphabets = 'abcdefghijklmnopqrsrtuvwxyz';

function evenLetters(str){
    var newStr = "";
    for(var i =0 ; i < alphabets.length ; i++){
        var count = 0;
        for(var j =0 ; j < str.length ; j++){
            if (str[j] === alphabets[i]){
                count++;
            }
        }
        if(count%2 === 0){
            newStr += alphabets[i];
        }
    }

    return newStr;
}