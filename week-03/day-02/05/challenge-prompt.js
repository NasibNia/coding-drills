// Day 02
// Activity 5


// This function takes in two strings and checks whether they're anagrams of each other.
// Return true if they are anagrams and false if they aren't anagrams.
function anagramCheck (str1, str2) {

  // ---------- Your Code Here ----------
  var obj1 = {flag : true};
  var obj2 = {flag : true};
  str1 = str1.replace(/\s/g,'');
  str2 = str2.replace(/\s/g,'');

  for (var i = 0; i < str1.length ; i++){
    var lett = str1[i].toLowerCase();
    if (!(lett in obj1)){
      obj1[lett] = 1;
    } else {
      obj1[lett]++;
    }
  }
  for (var i = 0; i < str2.length ; i++){
    var lett = str2[i].toLowerCase();
    if (!(lett in obj2)){
      obj2[lett] = 1;
    } else {
      obj2[lett]++;
    }
  }
  
console.log(obj1);
console.log(obj2);

Object.keys(obj1).forEach(key => {
  let value1 = obj1[key];
  if ( !(key in obj2) || (obj2[key] !==value1) ){
    // console.log("Key " + key);
    // console.log("value1 " + value1); 
    // console.log("value2  " + obj2[key]);
    obj1.flag = false;
  }  
});

Object.keys(obj2).forEach(key => {
  let value2 = obj2[key];  
  if ( !(key in obj1) || (obj1[key] !==value2) ){
    console.log('inside the false condition');
    // console.log("key in obj1   " + key in obj1);    
    // console.log("Key " + key);
    // console.log("value2 " + value2); 
    // console.log("value1  " + obj1[key]);
    obj2.flag = false;
  }  
});

if ((obj1.flag === true) && (obj2.flag === true)){
  return true;
}else {
  return false;
}




  // ----------- End Code Area -----------

}

// This should console log true
console.log(anagramCheck("I am Lord Voldemort", "Tom Marvolo Riddle"));

// This should console log true
console.log(anagramCheck("Astronomer", "Moon Starer"));

// This should console log false
console.log(anagramCheck("Hello World", "Goodnight Sun"));

// This should console log false
console.log(anagramCheck("Supercalifragilisticexpialidocious", "If you say it loud enough"));
