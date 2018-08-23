// ======== You are given NOTHING to start with 😱 ========

var fs = require ('fs');
var obj = {};

fs.readFile("quotes.txt" , "utf8", function(error, data) {
    if(error){
        console.log(error);
    } else{
        // console.log(data);
        var dataArr = data.split(";");
        // console.log(dataArr);
        for (var i = 0; i < dataArr.length; i++) {
            var tmp = dataArr[i].split("-");
            var key = tmp[1];
            var quote = tmp[0];
            obj[key] = quote;   
        }
        console.log(obj);
    }
});

var input = process.argv;

var name = "";
for (var i = 2; i < input.length; i++){
    name = name + input[i] + " ";
}
name.trim();
console.log("name is " + name.trim());
if (name in obj){   
    console.log(obj.name);
} else { 
    console.log("we don't have anything for you yet");
}
