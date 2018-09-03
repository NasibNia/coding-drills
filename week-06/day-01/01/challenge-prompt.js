// Defining the card constructor function
//
// -------------------- Your Code Here --------------------

function Card(value) {
    this.value = value;
    this.print = function(){
        console.log(this.value);
    };

}




// --------------------- End Code Area --------------------



// Defining the deck constructor function
//
// -------------------- Your Code Here --------------------
function Deck(cards){
    this.cards = cards;

    this.count = function(){
        return cards.length;
    };
    this.shuffle = function(){
        
        var leng = this.cards.length;
        while(leng !== 0) {
            var randIndex = Math.random(Math.floor()*leng);
            if (randIndex !== leng){
                leng--;
                var tmp = this.cards[leng];
                this.cards[leng] = this.cards[randIndex];
                this.cards[randIndex] = tmp;
            }
        }
        return this.cards;
    };
    this.draw = function(){
        console.log(this.cards);
        var drawn = this.cards[this.cards.length-1];
        this.cards.pop();
        return drawn;
    };
    this.add = function (newCard){
        this.cards.push(newCard);
        this.shuffle();
    };

}





// --------------------- End Code Area --------------------



// Export your two constructor functions
//
// -------------------- Your Code Here --------------------

module.exports = {
    Card,
    Deck
};

// --------------------- End Code Area --------------------
