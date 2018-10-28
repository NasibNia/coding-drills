// Dynamic Data Analysis


// `DataTracker` returns statistical analysis on data it tracks
class DataTracker {
  constructor() {  
    // -------------------- Your Code Here --------------------
    this.data = [];
    

    
    // --------------------- End Code Area --------------------
  }

  // Insert the argument into the DataTracker
  insert(value) {
    // -------------------- Your Code Here --------------------
    this.data.push(value);
    

    
    // --------------------- End Code Area --------------------
  }

  // Return the arithmetic mean of the data set
  getMean() {
    // -------------------- Your Code Here --------------------
    let sum  = 0;

    for (let i = 0; i < this.data.length; i++) {
      sum += this.data[i];
    }
    const mean = sum/this.data.length;
    return mean;
    // --------------------- End Code Area --------------------
  }

  // Return the minimum value of the data set
  getMin() {
    // -------------------- Your Code Here --------------------
    let min = this.data[0];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] < min){
        min = this.data[i];
      }
    }
    return min;

    // --------------------- End Code Area --------------------
  }

  // Return the maximum value of the data set
  getMax() {
    // -------------------- Your Code Here --------------------
    let max = this.data[0];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] > max){
        max = this.data[i];
      }
      
    }
    return max;
    


    // --------------------- End Code Area --------------------
  }

  // Return the mode of the data set
  getMode() {
    // -------------------- Your Code Here --------------------
    let obj = new Map();
    let maxAccurance =  0;
    let occur;
    let mode = [];

    for (let i = 0; i < this.data.length; i++) {
      const element = this.data[i];
      // console.log("obj[element] = ", obj[element]);
      if (obj.get(element)){
        
        obj.set(element , obj.get(element)+1);
      } else {
        obj.set(element , 1) ;
      }  
    }
    console.log("obj = ", obj);
    for(let [key , value] of obj){    
      console.log(key , value);  
      
        // value = obj[key];
        if (value >  maxAccurance){
          maxAccurance = value;
          mode =[];
          mode.push(parseInt(key));  
          console.log("mode =" , mode);        
        } else if (value ===  maxAccurance){
          mode.push(parseInt(key));
          console.log("mode =" , mode);        

        }
      
    }
    console.log("the latest results are the integers as follows: ");
    console.log("mode is ", mode);
    return mode;

    // --------------------- End Code Area --------------------
  }
}

// Tests
// All tests should be true

const arrEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  for (let i=0; i<arr1.length; i++)
    if (arr1[i] !== arr2[i]) return false;
  return true;
};
const test = new DataTracker();
test.insert(5);
// ------------------------------------------------------------
console.log("==================== Test 1 ====================");
console.log(test.getMean() === 5);
console.log(test.getMax() === 5);
console.log(test.getMin() === 5);
console.log(arrEqual(test.getMode(), [5]));

test.insert(7);
// ------------------------------------------------------------
console.log("==================== Test 2 ====================");
console.log(test.getMean() === 6);
console.log(test.getMax() === 7);
console.log(test.getMin() === 5);
console.log(arrEqual(test.getMode(), [5, 7]));

test.insert(3);
// ------------------------------------------------------------
console.log("==================== Test 3 ====================");
console.log("test = ", test);
console.log(test.getMean() === 5);
console.log(test.getMax() === 7);
console.log(test.getMin() === 3);
console.log(arrEqual(test.getMode(), [5, 7, 3]));

test.insert(7);
// ------------------------------------------------------------
console.log("==================== Test 4 ====================");
console.log(test.getMean() === 5.5);
console.log(test.getMax() === 7);
console.log(test.getMin() === 3);
console.log(arrEqual(test.getMode(), [7]));
