//  YOUR WORK HERE

function show(num, maxNum) {
    var str = "";

    for (var i = 0 ; i < maxNum*2; i++){
        if (i<num*2-1){
            str += "#";
        } else {
            str += " ";
        }
    }
    console.log(str);
}
 
function stairs(maxNum) {
    for(var i = 0 ; i <= maxNum ; i++){
        show(i, maxNum);
    }
}

stairs(8);