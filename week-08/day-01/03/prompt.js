//  YOUR WORK HERE//  YOUR WORK HERE

function show(num, maxNum) {
    var str = "";
    

    for (var i = 0 ; i < maxNum*2; i++){
        var space = ((maxNum*2-1)-(num*2-1))/2;
        if (i<space){
            str += " ";
        } else if (i < space+num*2-1){
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