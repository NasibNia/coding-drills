// 1. Configure Server
var express = require("express");

var app = express();
var PORT = 3000;


//Expected Output: 
// {
//   jerome: 50,
//   code: 80,
//   org: 58,
//   ricky: 30,
//   com: 90,
//   robert: 60,
//   chicken: 68,
//   sasha: 8
// }
var input = ["50 jerome.code.org", "30 ricky.code.com", "60 robert.chicken.com", "8 sasha.chicken.org"];

function getNumVisits(arr) {
  // 2. ================= YOUR WORK HERE ==================
  var trackObj = {};
  for (var i = 0 ; i < arr.length ; i++ ) {

    var str = arr[i].split(" ");
    var count = parseInt(str[0]);
    var words = str[1].split(".");

    for (var j = 0 ; j < words.length ; j++ ) {
      if (words[j] in trackObj){
        trackObj[words[j]] += count; 
      } else {
        trackObj[words[j]] = count;
      }
    }
  }

  return trackObj;
  // ===================================================
}


// At the root route, send the solution as JSON
  //3. ================= YOUR WORK HERE ==================
  var resultObj = getNumVisits(input);

  app.get("/" , function(req,res){
    return res.json(resultObj);
  });





  // ===================================================


// Listener
// ===========================================================

// 1. Create server
app.listen(PORT, function() {
  console.log("server listening on http://localhost: " + PORT);
});