var sum =function(number1,number2){
    var total=0;
    for(var i=number1;i<number2+1;i++){
        total=total+i;
    }
    return total;
};

console.log(sum(4,9));