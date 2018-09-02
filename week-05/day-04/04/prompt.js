
  var string = "ilovetowritecode";
  var character = "o";
  var newArr=[];
  
  function distanceFrom(str, char) {
// ===================== YOUR WORK HERE =====================
console.log("array length : "+ str.length);
var zeroIndex=[];
for (var i = 0; i < str.length; i++) {
  if (str[i]=== char){
    zeroIndex.push(i);
  }
}
console.log("index  " + zeroIndex);

var distance = [];
for (var i = 0; i < zeroIndex[0]; i++) {
  distance.push(zeroIndex[0]-i); 
}
console.log("distance  " + distance);
// for (var i = 0; i < zeroIndex.length; i++) {
  
  
}

// variable for the length of the string
var strL = str.length;
// ideftify the character locations
var zeroIndex=[];
for (var i = 0; i < str.length; i++) {
  if (str[i]=== char){
    zeroIndex.push(i);
  }
}

// define a new object that keeps track of zone changes inside the zeroIndex
var obj ={
  index     : 0,
  begin     : this.index,
  end       : zeroIndex[this.index],
  passZone  : false,
  reset : function(zeroIndex, strL){
    if (this.passZone){
      this.begin = this.end;     
      if (this.index < zeroIndex.length-1){
        this.index  = this.index + 1;
        this.end   = zeroIndex[this.index];
      } else if (this.index == zeroIndex.length){
        this.end = strL;
      } 
    }
  },
};
// create the new array
var newArr =[];
var distance
for (var i = 0; i < strl; i++) {
  if (!obj.passZone){
    distance = min ((end - i) , (i-begin))
  }
  if ( zeroIndex.indexOf(i) !== -1 ){
    obj.passZone = true;
    obj.reset(zeroIndex,strL);
    console.log(obj)
    obj.passZone = false;
  }
}


function min(a,b){
  if (a<b){
    return a;
  } 
  return b;
}


// ==========================================================

  
  console.log(distanceFrom(string, character))
 