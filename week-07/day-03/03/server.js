// 1. Configure Server
var express =  require ("express");

var app = express();
var PORT = 3000;

//Expected Output: 
// "ethae uickqae ownbrae ogdae umpedjae overae ethae azylae oxfae appleae"
var input = "The quick brown dog jumped over the lazy fox apple";

function pigLatin(sen) {
  // 2. ================= YOUR WORK HERE ==================
  var vowel = ["u","a","e","o","e"];
  var senArr = sen.split(" ");
  var senLatin = "";
  var word;

  for (var i = 0 ; i < senArr.length ; i++){
    word =  senArr[i];
    for (var j=0 ; j< word.length ;j++){
      if(vowel.includes(word[j])){
        var befor = word.substring(0,j);
        var after = word.substring(j,word.length);
        console.log(befor);
        console.log(after);
        var pigWord = after + befor + "ae";
        break;
      } 
    }
    senLatin += pigWord + " ";
  }
  console.log(senLatin);
    return senLatin;
  // ===================================================
}

// At the root route, send the solution as JSON
  //3. ================= YOUR WORK HERE ==================
var senLatinPig = pigLatin(input);

app.get("/", function(req, res){
  res.json(senLatinPig);
});




  // ===================================================


// Listener
// ===========================================================

// 1. Create server

app.listen(PORT, function(){
  console.log('server is listening on http://localhost:'+PORT);
});