console.log("welcome to web222");
var x=8;
y=++x
console.log(y);
console.log("-------------------------------------------------------------------------------------");
var pi = 3.14159;                       // pi is a Number 
var radius = 4.2;                       // radius is a Number
var area;                               // area is (currently) undefined

area = pi * radius * radius;            // calculate area from radius

console.log("Area = " + area +"\n");   // print area to the console
console.log("-------------------------------------------------------------------------------------");
function a(a) {
    console.log(a);
}

a("correct");          // logs "correct"
a("also", "correct");  // logs "also"
a();                   // logs undefined
console.log("-------------------------------------------------------------------------------------");
function a2(a) {
    console.log(arguments.length, a, arguments[1]);
}

a2("correct");          // 1, "correct", "correct"
a2("also", "correct");  // 2, "also", "also"
a2();                   // 0, undefined, undefined
console.log("-------------------------------------------------------------------------------------");
function sum() {
    var count = arguments.length;
    var total = 0;
    for(var i = 0; i < count; i++) {
        total += arguments[i];
    }
    return total;
}
console.log(sum(1));         // 1
console.log(sum(1,2));       // 3
console.log(sum(1,2,3,4));   // 10
console.log("-------------------------------------------------------------------------------------");
var add =function(){
    var counter = 0;
    return function(){        
        return ++counter;
    };
};
var total=add();
var counter2=total();
console.log(counter2); //1
counter2=total();
console.log(counter2); //2
console.log(total());  //3
console.log(total());
console.log("-------------------------------------------------------------------------------------");
var add2 =function(){
    var counter = 0;
    return function(){        
        return ++counter;
    };
};
var total=add2();
console.log(total()); //1
console.log(total()); //2
console.log(total()); //3
console.log(total()); //4
console.log("-------------------------------------------------------------------------------------");
var add3 =function(){
    var counter = 0;
    return function(){        
        return ++counter;
    };
};

console.log(add3()); //error
console.log(add3()); //error
console.log(add3()); //error
console.log(add3()); //error
console.log("-------------------------------------------------------------------------------------");