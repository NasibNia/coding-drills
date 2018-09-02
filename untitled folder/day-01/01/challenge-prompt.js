// Defining the card constructor function
//

// -------------------- Your Code Here --------------------

var Card  =  function (){
    this.value  = Math.floor(Math.random()*13)+1;

    this.print = function () {
        console.log("the card value is ", this.value, null , 2 );
    };
};




// --------------------- End Code Area --------------------



// Defining the deck constructor function
//
// -------------------- Your Code Here --------------------


var Deck =  function (){
    this.cardsArr = [] ; 
    this.count = 0;
    this.addCard = function(){
        var newCard  = new Card();
        newCard.prototype. count = function(){
           this.count++;
           return this.count; 
        };
    }
    this.newCard.
};



// --------------------- End Code Area --------------------



// Export your two constructor functions
//
// -------------------- Your Code Here --------------------




// --------------------- End Code Area --------------------
