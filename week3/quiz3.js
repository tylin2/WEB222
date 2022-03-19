//findMatch("This is a string","string") returns true
//findMatch("This is a string","something") returns false

function findMatch(str1,str2){    
    var findword = new RegExp(str2);
    var answer=findword.test(str1);
    return answer;
}
console.log(findMatch("This is a string","string"));
console.log(findMatch("This is a string","something"));
console.log('---------------------------');
// for closures
function makeAdder(x) {
    return function(y) {
    return x + y;
    };
}
var add5 = makeAdder(5);
var add10 = makeAdder(10);
console.log(add5(2)); // 7
console.log(add10(2)); // 12
