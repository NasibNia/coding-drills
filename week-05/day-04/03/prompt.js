var fs  =  require ('fs');
var input = process.argv;
var name  = input[2];
var quote = input[3];

for (var i=4; i < input.length; i++) {
    quote = quote + " " + input[i];
}
// console.log(name + " said "  + quote);
var toAdd = "; " + JSON.stringify(quote) + "-" + name; 
fs.appendFile("quotes.txt" , toAdd , function(error){
    if(error){
        console.log(error);
    } else {
        console.log("Content Added");
    }

});



