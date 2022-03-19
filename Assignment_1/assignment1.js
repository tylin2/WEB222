/*  WEB222 – Assignment 01
I declare that this assignment is my own work in accordance with
Seneca Academic Policy. No part of this assignment has been
copied manually or electronically from any other source
(including web sites) or distributed to other students. 
Please update the following with your information:
Name: Ting-Yeh
Student ID: 141726182
Date: 2019/09/28 */

/**
* Task 1 - format a name and email address into the following String format:
*
* "Name <email@address>"
*
* `name` - a String with the person's name (e.g., "Kim Smythe")
* `email` - a String with the person's email (e.g., "kims@gmail.com")
*
* For example: "Kim Smythe <kims@gmail.com>"
*/
var name ;
var email ;
function formatEmailAddress(name, email) {
    console.log("\""+name+" <"+email+">"+"\"");
}
formatEmailAddress('Kim Smythe', 'kims@gmail.com');

/**
* Task 2 - calculate the number of seconds for the given number of days
*
* `days` - a Number of days.
*
* Ignore any fractional parts (i.e., treat 1.34 the same as 1).
* If no value is given for `days` (undefined, null, 0), assume 1 as a default.
*
* Return the number of seconds for the given days as a Number.
*/
function toSeconds(days) {
   var second;    
   if(isNaN(days)==1){
        days=1;
        second=days+1;
   }
   else{
        second=parseInt(days)+1;;
   }    
   return second;    
}
console.log(toSeconds(2.34));
console.log(toSeconds('ddd'));

/**
* Task 3 - convert a temperature in Celsius or Fahrenheit to Kelvin,
* returning a formatted string (e.g., "288.71 K").
*
* `temp` - a Number with a temperature value (e.g., 17)
* `unit` - a String with a temperature scale unit. Should be one of:
* C, c, F, or F. If no value is given, assume C.
*/
var tempToKelvin = function(temp, unit) {
    var kelvin;
    var ftok, ctok;
    switch (unit){
        case'f':
        case'F':
            ftok=(temp-32)*5/9+273;
            kelvin=ftok.toFixed(2);            
            break;
        case'C':
        case'c':
        case'':
            ctok=temp+273;
            kelvin=ctok.toFixed(2);
            break;
        default:
                kelvin='error';
                break;
    }    
    return kelvin;
};
console.log(tempToKelvin(75,'f')+" K");
console.log(tempToKelvin(75,'F')+" K");
console.log(tempToKelvin(75,'c')+" K");
console.log(tempToKelvin(75,'C')+" K");
console.log(tempToKelvin(75,'')+" K");
console.log(tempToKelvin(75,'D')+" K");

/**
* Task 4 - find the smallest number in a list.
*
* Allow any number of arguments to be passed to the function. Allow both
* String and Number arguments to be passed, but throw an error if any other
* type is passed to the function (e.g., Boolean, Date, etc.). If the list
* is empty (nothing passed to the function), return Number.MIN_VALUE, see:
*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_VALUE
*/

function findSmallest() {
    arr=[];
    for(var i=0;i<arguments.length;i++){
        if(typeof arguments[i]==='number'){
           arr.push(arguments[i]);
        }else if(typeof arguments[i]==='string'){
            if(Date.parse(arguments[i])>0){
                arr.push('error');
            }else{
                arr.push(arguments[i]);                              
            }            
        }else{
            arr.push('error');
        }
    }
    return function(){
        var Answers;
        arr2=[];
        if (arr.indexOf('error')!=-1) {
            Answers=console.log('error');
        }else if(arr.every(checkarrempty)==false) {
            for(var i=0;i<arr.length;i++){
                if(typeof arr[i]==='number'){
                    arr2.push(arr[i]);
                }else{
                    //do nothing
                }
            }
            Answers=console.log(Math.min(...arr2));
        } 
        else {
            Answers=console.log(Number.MIN_VALUE);
        }
        return Answers;
    };        
}
function checkarrempty(test) {
    return test == 0;
}
function checkarrerror(test){
    return test == 'error';
}
var small1=findSmallest('dd','',13,'',324,'2012-9-20');  //error
small1();
var small2=findSmallest('dd','',13,'',324,true);  //error
small2();
var small3=findSmallest(29,5,13,324);  //5
small3();
var small4=findSmallest('dd','',13,'',324);  //13
small4();
var small5=findSmallest(''); //Number.MIN_VALUE
small5();

/**
* Task 5 - find all odd numbers in a list.
*
* Allow any number of Number arguments to be passed to the function.
* If a value is passed to the function that is not a Number, ignore it
* and continue processing the rest. If the list is empty (nothing passed
* to the function, or all need to be ignored, return `null`).
*
* Return a formatted string with all odd numbers in a list, for example:
*
* "1, 3, 5"
*/

var oddNumbers = function() {
    var odds=[];
    for (var i = 0; i < arguments.length; i++) {
        if ((arguments[i] % 2) == 1) {            
            odds.push(arguments[i]);            
        }
        else {
            //do nothing(ignored)
        }        
    }
    return function(){       
        if (odds.every(checknull)==false) {
            //var answer='hi';
            answer=console.log("\""+odds.join(", ")+"\"");
        } else {
            var answer=console.log('null');
        }
        return answer;
    };  
};
function checknull(test) {
    return test == 0;
}
var odd1=oddNumbers('',11,13,'dd',22,25,12,'s');
odd1();
var odd2=oddNumbers('',2,'');
odd2();
